"use client";
import { profile } from "../content/profile";

/* Convierte URLs y emails en enlaces dentro de un texto plano. */
function linkify(text) {
  const re = /((?:https?:\/\/|www\.)[^\s<]+[^\s<.,;:!?)]|[\w.+-]+@[\w-]+\.[\w.-]+)/g;
  const parts = [];
  let last = 0;
  let m;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const raw = m[0];
    const isMail = raw.includes("@") && !raw.startsWith("http");
    const href = isMail ? `mailto:${raw}` : raw.startsWith("http") ? raw : `https://${raw}`;
    parts.push(
      <a key={m.index} href={href} target={isMail ? undefined : "_blank"} rel="noopener noreferrer">
        {raw}
      </a>,
    );
    last = m.index + raw.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

function Photos({ photos, onOpen }) {
  const n = Math.min(photos.length, 3);
  return (
    <div className={`photos n${n}`}>
      {photos.map((p, i) => (
        <button
          key={p.src}
          type="button"
          className="photo"
          style={n === 1 ? { "--ar": `${p.w} / ${p.h}` } : undefined}
          onClick={() => onOpen(photos, i)}
          aria-label={`Ampliar foto: ${p.alt}`}
        >
          <img src={p.src} alt={p.alt} width={p.w} height={p.h} loading="lazy" decoding="async" />
        </button>
      ))}
    </div>
  );
}

function LinkCard({ link }) {
  return (
    <a className="link-card" href={link.url} target="_blank" rel="noopener noreferrer">
      {link.image && (
        <div className="link-card-img">
          <img
            src={link.image}
            alt=""
            loading="lazy"
            decoding="async"
            className={link.imageFit === "contain" ? "contain" : undefined}
          />
        </div>
      )}
      <div className="link-card-body">
        <p className="link-card-title">{link.title}</p>
        {link.description && <p className="link-card-desc">{link.description}</p>}
        <span className="link-card-domain">{link.domain}</span>
      </div>
    </a>
  );
}

function Video({ video }) {
  return (
    <div className="video">
      <video
        src={video.src}
        poster={video.poster}
        controls
        playsInline
        preload="none"
        width={video.w}
        height={video.h}
      />
    </div>
  );
}

function ContactCard() {
  const { links } = profile;
  return (
    <div className="contact-card">
      <div className="contact-head">
        <img src={profile.avatar.src} alt="" />
        <div>
          <div className="contact-name">{profile.name}</div>
          <div className="contact-role">{profile.role}</div>
        </div>
      </div>
      <div className="contact-list">
        <a href={`mailto:${profile.email}`}>
          <span>Email</span>
          <span>{profile.email}</span>
        </a>
        <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
          <span>LinkedIn</span>
          <span>luisfernandezchacon</span>
        </a>
        <a href={links.x} target="_blank" rel="noopener noreferrer">
          <span>X</span>
          <span>@Luis_fchacon</span>
        </a>
        <a href={links.icon} target="_blank" rel="noopener noreferrer">
          <span>ICON</span>
          <span>iconmbs.com</span>
        </a>
      </div>
    </div>
  );
}

export default function Message({ msg, tail, meta, onOpenPhotos }) {
  const side = msg.from === "me" ? "out" : "in";
  const hasBubble = msg.kind === "text";

  return (
    <div
      className={`msg ${side}${tail && hasBubble ? " tail" : ""}`}
      data-chapter={msg.chapter}
      id={msg.anchor ? `c-${msg.anchor}` : undefined}
    >
      {msg.kind === "text" && (
        <div className={`bubble${msg.streaming ? " cursor" : ""}`}>
          {msg.text ? linkify(msg.text) : msg.streaming ? "" : null}
        </div>
      )}
      {msg.kind === "photos" && <Photos photos={msg.photos} onOpen={onOpenPhotos} />}
      {msg.kind === "link" && <LinkCard link={msg.link} />}
      {msg.kind === "video" && <Video video={msg.video} />}
      {msg.kind === "contact" && <ContactCard />}
      {meta && <div className="msg-meta">{meta}</div>}
    </div>
  );
}
