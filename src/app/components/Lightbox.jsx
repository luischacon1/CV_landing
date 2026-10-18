"use client";
import { useEffect, useState } from "react";

export default function Lightbox({ photos, index, onClose }) {
  const [i, setI] = useState(index);
  const n = photos.length;

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setI((v) => (v + 1) % n);
      if (e.key === "ArrowLeft") setI((v) => (v - 1 + n) % n);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [n, onClose]);

  const p = photos[i];
  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={p.alt} onClick={onClose}>
      <img key={p.src} src={p.src} alt={p.alt} onClick={(e) => e.stopPropagation()} />
      <button type="button" className="lightbox-close" onClick={onClose} aria-label="Cerrar">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
      {n > 1 && (
        <>
          <button
            type="button"
            className="lightbox-nav prev"
            aria-label="Anterior"
            onClick={(e) => {
              e.stopPropagation();
              setI((v) => (v - 1 + n) % n);
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </button>
          <button
            type="button"
            className="lightbox-nav next"
            aria-label="Siguiente"
            onClick={(e) => {
              e.stopPropagation();
              setI((v) => (v + 1) % n);
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="lightbox-count">
            {i + 1} de {n}
          </div>
        </>
      )}
    </div>
  );
}
