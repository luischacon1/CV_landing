import GrayMessage from "../GrayMessage";
import BlueMessage from "../BlueMessage";

const ContactMessages = () => {
  let counter = 1;
  const timeGap = 3;
  return (
    <>
      <GrayMessage
        message="thanks for checking out my site!"
        order={(counter += timeGap)}
        bg="#44484e"
      />

      <GrayMessage order={(counter += timeGap)} bg="#44484e">
        feel free to email me at {" "}
        <a href="mailto:fernandez.luis.chacon@gmail.com" className="text-iblue underline">
          fernandez.luis.chacon@gmail.com
        </a>
      </GrayMessage>

      <GrayMessage order={(counter += timeGap)} bg="#44484e">
        <div className="overflow-hidden">
          <img
            src="/portfolio/luis/end.jpg"
            className="object-cover rounded-xl h-64 w-64 object-[50%_0%]"
            alt="picture of me"
          />
        </div>{" "}
      </GrayMessage>

      <GrayMessage order={(counter += timeGap)} bg="#44484e">
        you can also find me on {" "}
        <a
          href="https://linkedin.com/in/luisfernandezchacon"
          target="_blank"
          rel="noopener noreferrer"
          className="text-iblue underline"
        >
          LinkedIn
        </a>
      </GrayMessage>
      <GrayMessage order={(counter += timeGap)} bg="#44484e">
        or check out more of my work on {" "}
        <a
          href="https://github.com/luischacon1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-iblue underline"
        >
          GitHub
        </a>
      </GrayMessage>

      <GrayMessage order={(counter += timeGap)} message="i'd love to chat!" bg="#34cb5c" />
      <GrayMessage order={(counter += timeGap)} message="😊" bg="#34cb5c"/>
    </>
  );
};

export default ContactMessages;
