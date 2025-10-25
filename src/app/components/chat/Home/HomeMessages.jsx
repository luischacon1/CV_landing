import { useEffect } from "react";
import GrayMessage from "../GrayMessage";
import BlueMessage from "../BlueMessage";
import MessageBar from "../MessageBar";
import useBackgroundImagePreloader from "../../hooks/useBackgroundImagePreloader";
import portfolioImages from "../../../utils/imageUrls";

const HomeMessages = () => {
  let counter = 1;
  const timeGap = 3;
  
  // Start background image preloading when component mounts
  const { isPreloading, preloadComplete, progress } = useBackgroundImagePreloader(
    portfolioImages, 
    true // Start immediately
  );

  return (
    <>
      <GrayMessage message="hi there 👋" order={(counter += timeGap)} bg="#44484e" />
      <GrayMessage message="it's luis here" order={(counter += timeGap)} bg="#44484e" />

      <GrayMessage order={(counter += timeGap)} bg="#44484e">
        <img
          src="/portfolio/luis/perfiltiktok.png?v=2"
          className="w-56 h-56 rounded-3xl object-[100%_50%] object-cover cursor-pointer transition-transform hover:scale-[1.02]"
        />
      </GrayMessage>

      <GrayMessage
        message="i'm currently"
        order={(counter += timeGap)}
        bg="#44484e"
      />
      <GrayMessage order={(counter += timeGap)} bg="#44484e">
        <ul className="list-disc pl-6 space-y-1">
          <li>
            interning at{' '}
            <img
              src="/portfolio/luis/tts.png"
              alt="tiktok shop logo"
              className="inline w-7 h-7 align-middle mx-1 rounded"
              style={{ display: 'inline', verticalAlign: 'middle' }}
            />
            TikTok Shop
          </li>
          <li>
            building{' '}
            <img
              src="/portfolio/luis/iconblanco.png"
              alt="icon logo"
              className="inline w-9 h-9 align-middle mx-1"
              style={{ display: 'inline', verticalAlign: 'middle' }}
            />
            Music Business School
          </li>
          <li>
            EEII & ADE undergraduate{' '}
            <img
              src="/portfolio/luis/uc3micon.png"
              alt="uc3m logo"
              className="inline w-6 h-6 align-middle mx-1"
              style={{ display: 'inline', verticalAlign: 'middle' }}
            />
             Uc3m
          </li>
        </ul>
      </GrayMessage>

      <GrayMessage order={(counter += timeGap)} bg="#44484e">
        email me at{" "}
        <a
          href="mailto:fernandez.luis.chacon@gmail.com"
          rel="noopener noreferrer"
          className="text-iblue underline"
        >
          fernandez.luis.chacon@gmail.com
        </a>
      </GrayMessage>
      <GrayMessage order={(counter += timeGap)} bg="#44484e">
        or check me out at other stuff like{" "}
        <a
          href="https://linkedin.com/in/luisfernandezchacon"
          target="_blank"
          rel="noopener noreferrer"
          className="text-iblue underline"
        >
          LinkedIn
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/luischacon1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-iblue underline"
        >
          GitHub
        </a>
      </GrayMessage>

      <GrayMessage
        message="if you ever want to talk, just send me a message through the message bar 😉"
        order={(counter += timeGap)}
        bg="#34cb5c"
      />
    </>
  );
};
export default HomeMessages;
