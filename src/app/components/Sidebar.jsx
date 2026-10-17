"use client";
import { useState } from "react";
import { profile } from "../content/profile";
import { chapters } from "../content/chapters";

function firstImage(ch) {
  if (ch.row.image) return ch.row.image;
  const m = ch.messages.find((x) => x.kind === "photos" || (x.kind === "link" && x.link.image));
  if (!m) return null;
  return m.kind === "photos" ? m.photos[0].src : m.link.image;
}

export default function Sidebar({ seen, current, onPick }) {
  const [q, setQ] = useState("");
  const query = q.trim().toLowerCase();
  const list = chapters.filter(
    (c) =>
      !query ||
      c.row.title.toLowerCase().includes(query) ||
      c.row.preview.toLowerCase().includes(query) ||
      c.chip.toLowerCase().includes(query),
  );

  return (
    <aside className="sidebar" aria-label="Conversaciones">
      <div className="sidebar-head">
        <h1 className="sidebar-title">Mensajes</h1>
        <label className="sidebar-search">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5" />
          </svg>
          <input
            type="search"
            placeholder="Buscar"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            aria-label="Buscar capítulo"
          />
        </label>
      </div>

      <div className="sidebar-list">
        <button type="button" className="row" aria-current={current === "luis"} onClick={() => onPick("luis")}>
          <span className="row-avatar">
            <img src={profile.avatar.src} alt="" />
          </span>
          <span className="row-text">
            <span className="row-top">
              <span className="row-title">{profile.shortName}</span>
              <span className="row-time">Ahora</span>
            </span>
            <span className="row-preview">
              {profile.role} · {profile.city}
            </span>
          </span>
        </button>

        {list.map((c) => {
          const img = firstImage(c);
          const isSeen = seen.includes(c.id);
          return (
            <button
              key={c.id}
              type="button"
              className={`row${isSeen ? " seen" : ""}`}
              aria-current={current === c.id}
              onClick={() => onPick(c.id)}
            >
              <span className={`row-avatar${img ? "" : " mono"}`}>
                {img ? <img src={img} alt="" /> : c.row.title[0]}
              </span>
              <span className="row-text">
                <span className="row-top">
                  <span className="row-title">{c.row.title}</span>
                  {!isSeen && <span className="row-unread" aria-label="Sin leer" />}
                </span>
                <span className="row-preview">{c.row.preview}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="sidebar-foot">
        <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={profile.links.x} target="_blank" rel="noopener noreferrer">X</a>
        <a href={profile.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={profile.links.icon} target="_blank" rel="noopener noreferrer">ICON</a>
        <a href={`mailto:${profile.email}`}>Email</a>
      </div>
    </aside>
  );
}
