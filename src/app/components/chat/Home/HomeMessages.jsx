import GrayMessage from "../GrayMessage";
import BlueMessage from "../BlueMessage";
import MessageBar from "../MessageBar";

const HomeMessages = () => {
  let counter = 1;
  const timeGap = 3;
  return (
    <>
      <GrayMessage message="hi there 👋" order={(counter += timeGap)} bg="#44484e" />
      <GrayMessage message="it's luis here" order={(counter += timeGap)} bg="#44484e" />

      <GrayMessage order={(counter += timeGap)} bg="#44484e">
        <div className="overflow-hidden">
          <img
            src="/portfolio/luis/perfilsonrie.png"
            className="w-56 h-56 rounded-3xl object-[100%_50%] object-cover"
          />
        </div>
      </GrayMessage>

      <GrayMessage
        message="i'm currently"
        order={(counter += timeGap)}
        bg="#44484e"
      />
      <GrayMessage order={(counter += timeGap)} bg="#44484e">
        <ul className="list-disc pl-6 space-y-1">
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
            hosting{' '}
            <img
              src="/portfolio/luis/in.png"
              alt="inedito podcast logo"
              className="inline w-7 h-7 align-middle mx-1"
              style={{ display: 'inline', verticalAlign: 'middle' }}
            />
            Podcast
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
          <li>
            exchange student{' '}
            <img
              src="/portfolio/luis/actualucilogo-removebg-preview.png"
              alt="uci logo"
              className="inline w-6 h-6 align-middle mx-1"
              style={{ display: 'inline', verticalAlign: 'middle' }}
            />
             U.California Irvine
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
