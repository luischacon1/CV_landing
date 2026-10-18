"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Message from "./Message";
import Lightbox from "./Lightbox";
import Sidebar from "./Sidebar";
import Composer from "./Composer";
import ThemeToggle from "./ThemeToggle";
import { profile } from "../content/profile";
import { intro, chapters, chapterById } from "../content/chapters";

let uid = 0;
const nextId = () => `m${++uid}`;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function reducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/* Cuánto "tarda" Luis en escribir cada mensaje. */
function typingDelay(m) {
  if (reducedMotion()) return 250;
  if (m.kind === "text") return Math.min(2000, 450 + m.text.length * 14);
  return 900;
}

function timeNow() {
  return new Date().toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" });
}

function dayStamp() {
  const d = new Date();
  const weekday = d.toLocaleDateString("es-ES", { weekday: "long" });
  const date = d.toLocaleDateString("es-ES", { day: "numeric", month: "short" });
  return `${weekday[0].toUpperCase() + weekday.slice(1)} ${date}`;
}

export default function Chat() {
  const [thread, setThread] = useState([]);
  const [typing, setTyping] = useState(false);
  const [busy, setBusy] = useState(false);
  const [seen, setSeen] = useState([]);
  const [current, setCurrent] = useState("luis");
  const [lightbox, setLightbox] = useState(null);
  const [atBottom, setAtBottom] = useState(true);

  const listRef = useRef(null);
  const stickRef = useRef(true);
  const startedRef = useRef(false);
  const aliveRef = useRef(true);
  const stamp = useMemo(() => dayStamp(), []);
  const threadRef = useRef([]);
  const seenRef = useRef([]);
  useEffect(() => {
    threadRef.current = thread;
  }, [thread]);
  useEffect(() => {
    seenRef.current = seen;
  }, [seen]);

  useEffect(() => {
    aliveRef.current = true;
    return () => {
      aliveRef.current = false;
    };
  }, []);

  const push = useCallback((m) => {
    setThread((t) => [...t, { id: nextId(), at: timeNow(), ...m }]);
  }, []);

  /* Reproduce una lista de mensajes de Luis con pausas de escritura. */
  const play = useCallback(
    async (messages, extra = {}) => {
      for (let i = 0; i < messages.length; i++) {
        if (!aliveRef.current) return;
        const m = messages[i];
        setTyping(true);
        await sleep(typingDelay(m));
        if (!aliveRef.current) return;
        setTyping(false);
        push({ from: "luis", ...m, ...extra, anchor: i === 0 ? extra.chapter : undefined });
        await sleep(reducedMotion() ? 80 : 260);
      }
    },
    [push],
  );

  /* Capítulo guionizado. withQuestion: si el visitante "lo pregunta" o no. */
  const playChapter = useCallback(
    async (id, withQuestion = true) => {
      const ch = chapterById[id];
      if (!ch) return;
      setBusy(true);
      setCurrent(id);
      stickRef.current = true;
      if (withQuestion) {
        push({ from: "me", kind: "text", text: ch.chip });
        await sleep(reducedMotion() ? 100 : 500);
      }
      setSeen((s) => (s.includes(id) ? s : [...s, id]));
      await play(ch.messages, { chapter: id });
      setBusy(false);
    },
    [play, push],
  );

  /* Mensaje libre → IA (con historial). */
  const askAI = useCallback(
    async (text) => {
      setBusy(true);
      setCurrent("luis");
      stickRef.current = true;
      const history = threadRef.current
        .filter((m) => m.kind === "text" && m.text)
        .map((m) => ({ role: m.from === "me" ? "user" : "assistant", content: m.text }));
      history.push({ role: "user", content: text });
      push({ from: "me", kind: "text", text });

      setTyping(true);
      const started = Date.now();
      let res;
      try {
        res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: history }),
        });
      } catch {
        res = null;
      }

      const fail = async (msg) => {
        await sleep(Math.max(0, 900 - (Date.now() - started)));
        setTyping(false);
        push({ from: "luis", kind: "text", text: msg });
        setBusy(false);
      };

      if (!res) return fail("se me ha ido la conexión. prueba otra vez en un momento");
      if (res.status === 503)
        return fail(`esta parte todavía no está conectada. escríbeme a ${profile.email} y te contesto yo de verdad`);
      if (!res.ok || !res.body) return fail("algo ha fallado por mi lado. inténtalo de nuevo, o escríbeme al email");

      // Las burbujas se van creando según llega el texto: cada párrafo
      // (línea en blanco) es un mensaje nuevo, como si Luis los enviara uno a uno.
      const ids = [];
      const at = timeNow();
      const splitParts = (txt) => txt.split(/\n\s*\n/).map((x) => x.trim()).filter(Boolean);
      const render = (txt, streaming) => {
        const parts = splitParts(txt);
        if (!parts.length) parts.push("");
        while (ids.length < parts.length) ids.push(nextId());
        setThread((t) => {
          const kept = t.filter((m) => !ids.includes(m.id));
          const bubbles = parts.map((text, k) => ({
            id: ids[k],
            at,
            from: "luis",
            kind: "text",
            text,
            streaming: streaming && k === parts.length - 1,
          }));
          return [...kept, ...bubbles];
        });
      };

      let full = "";
      let first = true;
      const reader = res.body.getReader();
      const dec = new TextDecoder();
      try {
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          full += dec.decode(value, { stream: true });
          if (!aliveRef.current) return;
          if (first) {
            first = false;
            await sleep(Math.max(0, 700 - (Date.now() - started)));
            setTyping(false);
          }
          const visible = full.replace(/\s*\[\[chapter:[^\]]*\]\]\s*$/i, "").replace(/\s*\[\[chap?t?e?r?:?[a-z]*$/i, "");
          render(visible, true);
        }
      } catch {
        /* se corta la conexión: lo que haya llegado se queda */
      }

      if (first) return fail("me he quedado en blanco, como en mi primer hackathon. ¿me lo repites?");

      const tag = full.match(/\[\[chapter:([a-z]+)\]\]/i);
      const clean = full.replace(/\s*\[\[chapter:[^\]]*\]\]\s*/gi, "").trim();
      render(clean, false);

      const chapterId = tag?.[1]?.toLowerCase();
      if (chapterId && chapterById[chapterId] && !seenRef.current.includes(chapterId)) {
        await sleep(600);
        setSeen((s) => (s.includes(chapterId) ? s : [...s, chapterId]));
        setCurrent(chapterId);
        await play(chapterById[chapterId].messages, { chapter: chapterId });
      }
      setBusy(false);
    },
    [play, push],
  );

  const send = useCallback(
    (text) => {
      const t = text.trim();
      if (!t || busy) return;
      const norm = t.toLowerCase().replace(/[¿?¡!.]/g, "").trim();
      const hit = chapters.find((c) => c.chip.toLowerCase().replace(/[¿?¡!.]/g, "").trim() === norm);
      if (hit && !seen.includes(hit.id)) return playChapter(hit.id);
      return askAI(t);
    },
    [askAI, busy, playChapter, seen],
  );

  const pick = useCallback(
    (id) => {
      if (id === "luis") {
        setCurrent("luis");
        listRef.current?.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      if (seen.includes(id)) {
        setCurrent(id);
        stickRef.current = false;
        document.getElementById(`c-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      if (!busy) playChapter(id);
    },
    [busy, playChapter, seen],
  );

  /* Intro al cargar. */
  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    (async () => {
      setBusy(true);
      await sleep(reducedMotion() ? 100 : 700);
      await play(intro);
      setBusy(false);
    })();
  }, [play]);

  /* Scroll pegado al final mientras llegan mensajes. */
  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    if (stickRef.current) el.scrollTo({ top: el.scrollHeight, behavior: "instant" });
  }, [thread, typing]);

  const onScroll = () => {
    const el = listRef.current;
    if (!el) return;
    const gap = el.scrollHeight - el.scrollTop - el.clientHeight;
    const near = gap < 120;
    stickRef.current = near;
    setAtBottom((v) => (v === near ? v : near));
  };

  const jumpBottom = () => {
    stickRef.current = true;
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  };

  /* Último mensaje mío → "Entregado" / "Leído". */
  const lastMine = [...thread].reverse().find((m) => m.from === "me");
  const answered = lastMine && thread.some((m, i) => m.from === "luis" && i > thread.indexOf(lastMine));

  const suggestions = chapters.filter((c) => !seen.includes(c.id));

  return (
    <div className="app">
      <Sidebar seen={seen} current={current} onPick={pick} />

      <section className="thread" aria-label={`Conversación con ${profile.name}`}>
        <header className="navbar">
          <span className="navbar-avatar">
            <img src={profile.avatar.src} alt="" width="52" height="52" />
          </span>
          <span className="navbar-name">
            {profile.name}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </span>
          <span className="navbar-side right">
            <ThemeToggle />
            <a className="theme-toggle" href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Luis" title="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 11v5M12 8v.5" />
              </svg>
            </a>
          </span>
        </header>

        <div className="messages" ref={listRef} onScroll={onScroll} role="log" aria-live="polite" aria-relevant="additions">
          <div className="messages-inner">
            <div className="day-stamp">
              <b>{stamp}</b> {thread[0]?.at ?? ""}
            </div>
            {thread.map((m, i) => {
              const next = thread[i + 1];
              const tail = !next || next.from !== m.from;
              let meta = null;
              if (m === lastMine) meta = answered ? `Leído ${m.at}` : "Entregado";
              return (
                <Message key={m.id} msg={m} tail={tail} meta={meta} onOpenPhotos={(photos, index) => setLightbox({ photos, index })} />
              );
            })}
            {typing && (
              <div className="msg in typing" aria-label="Luis está escribiendo">
                <div className="bubble">
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            )}
          </div>
        </div>

        {!atBottom && (
          <button type="button" className="to-bottom" onClick={jumpBottom} aria-label="Ir al último mensaje">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </button>
        )}

        <Composer suggestions={suggestions} busy={busy} onSend={send} onChip={(id) => playChapter(id)} />
      </section>

      {lightbox && <Lightbox photos={lightbox.photos} index={lightbox.index} onClose={() => setLightbox(null)} />}
    </div>
  );
}
