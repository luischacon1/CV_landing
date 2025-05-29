'use client';
import React, { useEffect } from "react";
import GrayMessage from "../GrayMessage";
import { useModalImage } from "../../ModalImageContext";

const AboutMessages = () => {
  const { modalImg, setModalImg } = useModalImage();
  let counter = 1;
  const timeGap = 2;

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="w-full max-w-[55rem]">
        <GrayMessage
          message="If you wanna know me, you gotta know them first... Brodie, Greta and Granny"
          order={(counter += timeGap)}
          bg="#44484e"
        />
      </div>
      <div className="w-full max-w-[55rem]">
        <GrayMessage order={(counter += timeGap)} bg="#44484e">
          <div className="flex gap-2">
            {[
              "hermano.JPG",
              "greta.jpg",
              "abuela.jpg"
            ].map((img) => (
              <img
                key={img}
                src={`/portfolio/luis/${img}`}
                className="object-cover aspect-square rounded-xl flex-1 min-w-0 cursor-pointer transition-transform hover:scale-105"
                alt={img}
                onClick={() => setModalImg(`/portfolio/luis/${img}`)}
              />
            ))}
          </div>
        </GrayMessage>
      </div>
      <div className="h-64" />
      <GrayMessage
        message="and of course them ❤️"
        order={(counter += timeGap)}
        bg="#44484e"
      />
      <GrayMessage order={(counter += timeGap)} bg="#44484e">
        <div className="flex gap-2">
          {["posh.png", "feria.png"].map((img) => (
            <img
              key={img}
              src={`/portfolio/luis/${img}`}
              className="object-cover aspect-square rounded-xl flex-1 min-w-0 cursor-pointer transition-transform hover:scale-105"
              alt={img}
              onClick={() => setModalImg(`/portfolio/luis/${img}`)}
              onError={(e) => {
                console.error(`Failed to load image: /portfolio/luis/${img}`);
              }}
            />
          ))}
        </div>
      </GrayMessage>
      <div style={{ height: "50px" }} />
      <GrayMessage
        message="Pics say it all… wait for it."
        order={(counter += timeGap)}
        bg="#44484e"
      />
      <GrayMessage
        message="Lowkey love sports"
        order={(counter += timeGap)}
        bg="#44484e"
      />
      <GrayMessage order={(counter += timeGap)} bg="#44484e">
        <div className="flex gap-2">
          {["swim.jpg", "bici.jpg", "surf.jpg"].map((img) => (
            <img
              key={img}
              src={`/portfolio/luis/${img}`}
              className="object-cover aspect-square rounded-xl flex-1 min-w-0 cursor-pointer transition-transform hover:scale-105"
              alt={img}
              onClick={() => setModalImg(`/portfolio/luis/${img}`)}
            />
          ))}
        </div>
      </GrayMessage>
      <div style={{ height: "50px" }} />
      <GrayMessage
        message="first time pitching ; ) Ngl, I've put on some weight since then."
        order={(counter += timeGap)}
        bg="#44484e"
      />
      <GrayMessage order={(counter += timeGap)} bg="#44484e">
        <div className="flex gap-2">
          {["hackathon1.png", "hackathon.png", "hackathon2.png"].map((img) => (
            <img
              key={img}
              src={`/portfolio/luis/${img}`}
              className="object-cover aspect-square rounded-xl flex-1 min-w-0 cursor-pointer transition-transform hover:scale-105"
              alt={img}
              onClick={() => setModalImg(`/portfolio/luis/${img}`)}
            />
          ))}
        </div>
      </GrayMessage>
      <GrayMessage
        message="Literally blacked out mid-pitch… don't know how we won 😭"
        order={(counter += timeGap)}
        bg="#44484e"
      />
      <div style={{ height: "50px" }} />
      <GrayMessage
        message="This was SKH I event. Huge day."
        order={(counter += timeGap)}
        bg="#44484e"
      />
      <GrayMessage order={(counter += timeGap)} bg="#44484e">
        <div className="flex gap-2">
          {["cheque.jpeg", "skh.jpeg"].map((img) => (
            <img
              key={img}
              src={`/portfolio/luis/${img}`}
              className="object-cover aspect-square rounded-xl flex-1 min-w-0 cursor-pointer transition-transform hover:scale-105"
              alt={img}
              onClick={() => setModalImg(`/portfolio/luis/${img}`)}
            />
          ))}
        </div>
      </GrayMessage>
      <GrayMessage
        message="probably one of the best days of my life..."
        order={(counter += timeGap)}
        bg="#44484e"
      />
      <div style={{ height: "50px" }} />
      <GrayMessage
        message="📍 European parliament - got invited to speak on youth entrepreneurship."
        order={(counter += timeGap)}
        bg="#44484e"
      />
      <GrayMessage order={(counter += timeGap)} bg="#44484e">
        <div className="flex gap-2">
          {["ue.JPG", "uee.JPG"].map((img) => (
            <img
              key={img}
              src={`/portfolio/luis/${img}`}
              className="object-cover aspect-square rounded-xl flex-1 min-w-0 cursor-pointer transition-transform hover:scale-105"
              alt={img}
              onClick={() => setModalImg(`/portfolio/luis/${img}`)}
            />
          ))}
        </div>
      </GrayMessage>
      <GrayMessage
        message="Only 18. Still processing it 🤯"
        order={(counter += timeGap)}
        bg="#44484e"
      />
      <div className="h-20" />
      <GrayMessage
        message="i also give talks in high schools"
        order={(counter += timeGap)}
        bg="#44484e"
      />
      <GrayMessage order={(counter += timeGap)} bg="#44484e">
        <div className="flex gap-2">
          {["stage.png", "tupuedes.jpeg"].map((img) => (
            <img
              key={img}
              src={`/portfolio/luis/${img}`}
              className="object-cover aspect-square rounded-xl flex-1 min-w-0 cursor-pointer transition-transform hover:scale-105"
              alt={img}
              onClick={() => setModalImg(`/portfolio/luis/${img}`)}
            />
          ))}
        </div>
      </GrayMessage>
      <div className="h-64" />
      <GrayMessage
        message="moments before jumping off a plane in Hawaii 🪂🪂"
        order={(counter += timeGap)}
        bg="#44484e"
      />
      <GrayMessage order={(counter += timeGap)} bg="#44484e">
        <div className="flex gap-2">
          {["plane.png", "spider.jpg"].map((img) => (
            <img
              key={img}
              src={`/portfolio/luis/${img}`}
              className="object-cover aspect-square rounded-xl flex-1 min-w-0 cursor-pointer transition-transform hover:scale-105"
              alt={img}
              onClick={() => setModalImg(`/portfolio/luis/${img}`)}
            />
          ))}
        </div>
      </GrayMessage>
      <div className="h-64" />
      <GrayMessage
        message="✌🏼 ran a workshop at No Suspires camp — vibes were high."
        order={(counter += timeGap)}
        bg="#44484e"
      />
      <GrayMessage order={(counter += timeGap)} bg="#44484e">
        <div className="flex justify-start">
          <video
            src="/portfolio/luis/reel.mp4"
            controls
            className="rounded-xl h-72 w-40 object-cover bg-black"
          />
        </div>
      </GrayMessage>
      <GrayMessage
        message="Probably the most intense (and risky) project I've led."
        order={(counter += timeGap)}
        bg="#44484e"
      />
      <div className="h-64" />
      <GrayMessage
        message="Made it to the Latin Grammys — filming ICON mentors in Miami 🔥"
        order={(counter += timeGap)}
        bg="#44484e"
      />
      <GrayMessage order={(counter += timeGap)} bg="#44484e">
        <div className="flex gap-2">
          {["grammy.jpg", "andy.jpg"].map((img) => (
            <img
              key={img}
              src={`/portfolio/luis/${img}`}
              className="object-cover aspect-square rounded-xl flex-1 min-w-0 cursor-pointer transition-transform hover:scale-105"
              alt={img}
              onClick={() => setModalImg(`/portfolio/luis/${img}`)}
            />
          ))}
        </div>
      </GrayMessage>
      <div className="h-64" />
      <GrayMessage
        message="Touched base at Meta & Google HQ in Silicon Valley . Dream checked ✅"
        order={(counter += timeGap)}
        bg="#44484e"
      />
      <GrayMessage order={(counter += timeGap)} bg="#44484e">
        <div className="flex gap-2">
          {["facebook.jpg", "google.jpg", "inside.jpg"].map((img) => (
            <img
              key={img}
              src={`/portfolio/luis/${img}`}
              className="object-cover aspect-square rounded-xl flex-1 min-w-0 cursor-pointer transition-transform hover:scale-105"
              alt={img}
              onClick={() => setModalImg(`/portfolio/luis/${img}`)}
            />
          ))}
        </div>        
      </GrayMessage>
      <div className="h-64" />
      <GrayMessage 
        message="And studied in Los Angeles for a year. What a experience!🤯"
        order={(counter += timeGap)}
        bg="#44484e"
      />
      <GrayMessage order={(counter += timeGap)} bg="#44484e">
        <div className="flex flex-col gap-2 w-full max-w-[22rem]">
          <a 
            href="https://www.youtube.com/watch?v=RV-P7ly9irU&t=2s"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl overflow-hidden transition-transform hover:scale-[1.02] relative"
          >
            <img
              src="https://img.youtube.com/vi/RV-P7ly9irU/maxresdefault.jpg"
              alt="LA Video Thumbnail"
              className="w-full object-cover rounded-xl"
            />
            {/* Play button overlay */}
            <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="32" fill="rgba(0,0,0,0.45)" />
                <polygon points="26,20 48,32 26,44" fill="#fff" />
              </svg>
            </span>
          </a>
        </div>
      </GrayMessage>
      <div className="h-64" />
      <GrayMessage
        message="but yeahh, that's it"
        order={(counter += timeGap)}
        bg="#44484e"
      />
      <GrayMessage
        message="Just a chill guy figuring it out"
        order={(counter += timeGap)}
        bg="#34cb5c"
      />
    </>
  );
};

export default AboutMessages;
