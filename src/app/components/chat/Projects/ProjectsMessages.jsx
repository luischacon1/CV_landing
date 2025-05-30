import React, { useState, useEffect } from "react";
import GrayMessage from "../GrayMessage";
import BlueMessage from "../BlueMessage";
import projects from "../../../data/portfolio.js"; // Import your projects array

// Apple-like tooltip for YouTube preview
const YouTubePreviewLink = ({ url, children }) => {
  const [show, setShow] = useState(false);
  // Extract YouTube video ID
  let videoId = null;
  try {
    const urlObj = new URL(url);
    if (urlObj.hostname.includes("youtu.be")) {
      videoId = urlObj.pathname.slice(1);
    } else {
      videoId = urlObj.searchParams.get("v");
    }
  } catch (e) {}
  const thumbnail = videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : null;
  return (
    <span
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-iblue underline transition-colors duration-200 hover:text-blue-400"
        style={{ cursor: "pointer" }}
      >
        {children}
      </a>
      {show && thumbnail && (
        <span
          style={{
            position: "absolute",
            top: "-170px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 50,
            background: "rgba(30,30,30,0.95)",
            borderRadius: "18px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
            padding: "12px",
            minWidth: "220px",
            maxWidth: "300px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pointerEvents: "none"
          }}
        >
          <img
            src={thumbnail}
            alt="YouTube preview"
            style={{
              width: "260px",
              height: "146px",
              objectFit: "cover",
              borderRadius: "12px",
              marginBottom: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.18)"
            }}
          />
        </span>
      )}
    </span>
  );
};

const ProjectsMessages = () => {
  let counter = 0;
  const timeGap = 3;

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="w-full max-w-[55rem]">
      <GrayMessage
        message="here's some things i've worked on"
        order={(counter += timeGap)}
        bg="#44484e"
      />
      </div>

      {/* Proyectos principales */}
      <div className="w-full max-w-[55rem]">
      <GrayMessage order={(counter += timeGap)} bg="#44484e">
          <div className="w-32 max-w-[8rem] mx-auto">
          <a href="https://www.instagram.com/_skillhunting/" target="_blank" rel="noopener noreferrer" className="block">
              <img src="/portfolio/luis/skhh.png" alt="skhh.png" className="w-full rounded-lg object-cover cursor-pointer transition-transform hover:scale-105" />
          </a>
        </div>
      </GrayMessage>
      </div>
      <div className="w-full max-w-[55rem]">
      <GrayMessage order={(counter += timeGap)} bg="#44484e">
          <div className="w-32 max-w-[8rem] mx-auto">
          <a href="https://x.com/Luis_fchacon/status/1923236041680433613" target="_blank" rel="noopener noreferrer" className="block">
              <img src="/portfolio/luis/apex.svg" alt="apex.svg" className="w-full rounded-lg object-cover cursor-pointer transition-transform hover:scale-105" />
          </a>
        </div>
      </GrayMessage>
      </div>
      <div className="w-full max-w-[55rem]">
      <GrayMessage order={(counter += timeGap)} bg="#44484e">
          <div className="w-32 max-w-[8rem] mx-auto">
          <a href="https://youtu.be/OkPpSbBkhBw?si=toPjL2sUHCBciFne&t=2353" target="_blank" rel="noopener noreferrer" className="block">
              <img src="/portfolio/luis/ns.png" alt="ns.png" className="w-full rounded-lg object-cover cursor-pointer transition-transform hover:scale-105" />
          </a>
        </div>
      </GrayMessage>
      </div>

      {/* Separación grande entre proyectos principales y podcast */}
      <div className="h-80" />

      <div className="w-full max-w-[55rem]">
      <GrayMessage
        message="And of course Inedito podcast"
        order={(counter += timeGap)}
        bg="#44484e"
      />
      </div>
      <div className="w-full max-w-[55rem]">
      <GrayMessage order={(counter += timeGap)} bg="#44484e">
          <div className="w-32 max-w-[8rem] mx-auto">
            <img src="/portfolio/luis/in.png" alt="in.png" className="w-full rounded-lg object-cover cursor-pointer transition-transform hover:scale-105" />
        </div>
      </GrayMessage>
      </div>

      {/* Separación entre podcast y episodios favoritos */}
      <div className="h-20" />

      <div className="w-full max-w-[55rem]">
      <GrayMessage
        message="fav episodes ⤵️⤵️"
        order={(counter += timeGap)}
        bg="#34cb5c"
      />
      </div>
      <div className="w-full max-w-[55rem]">
      <GrayMessage order={(counter += timeGap)} bg="#44484e">
        <ul className="list-disc pl-6 space-y-2">
            <li><YouTubePreviewLink url="https://youtu.be/YNAptmPaGHk">USA Ambassador to Spain</YouTubePreviewLink></li>
            <li><YouTubePreviewLink url="https://youtu.be/MyKKtZf5z1w">President of Oracle</YouTubePreviewLink></li>
          <li><YouTubePreviewLink url="https://www.youtube.com/watch?v=mUqx8NFBc54&t=31s">President of EY</YouTubePreviewLink></li>
            <li><YouTubePreviewLink url="https://youtu.be/WlExGqbMFc8">Carlos Latre</YouTubePreviewLink></li>
            <li><YouTubePreviewLink url="https://youtu.be/qcpKCOL25JE">La Hormiga del Hormiguero</YouTubePreviewLink></li>
            <li><YouTubePreviewLink url="https://youtu.be/NvEtVel-upc">Belén Esteban</YouTubePreviewLink></li>
        </ul>
      </GrayMessage>
      </div>
    </>
  );
};

export default ProjectsMessages;
