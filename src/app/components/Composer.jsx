"use client";
import { useEffect, useRef, useState } from "react";
import { profile } from "../content/profile";

export default function Composer({ suggestions, busy, onSend, onChip }) {
  const [value, setValue] = useState("");
  const ref = useRef(null);

  // auto-grow
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.height = "0px";
    el.style.height = Math.min(el.scrollHeight, 140) + "px";
  }, [value]);

  const submit = () => {
    const t = value.trim();
    if (!t || busy) return;
    setValue("");
    onSend(t);
  };

  return (
    <div className="composer-wrap">
      <div className="composer-inner">
        {suggestions.length > 0 && (
          <div className="chips" role="list" aria-label="Sugerencias">
            {suggestions.map((c) => (
              <button key={c.id} type="button" className="chip" role="listitem" disabled={busy} onClick={() => onChip(c.id)}>
                {c.chip}
              </button>
            ))}
          </div>
        )}
        <form
          className="composer"
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
        >
          <a className="composer-plus" href={`mailto:${profile.email}`} aria-label="Enviar email a Luis" title="Enviar email">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </a>
          <div className="composer-field">
            <textarea
              ref={ref}
              rows={1}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  submit();
                }
              }}
              placeholder={busy ? "Luis está escribiendo…" : "Mensaje"}
              aria-label="Escribe un mensaje a Luis"
              autoComplete="off"
              enterKeyHint="send"
            />
            <button type="submit" className="send" disabled={!value.trim() || busy} aria-label="Enviar">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
