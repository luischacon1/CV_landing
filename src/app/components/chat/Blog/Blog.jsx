import GrayMessage from "../GrayMessage";
import BlueMessage from "../BlueMessage";
const Experience = ({ exp }) => {
  return (
    <>
      <h1 className="text-xs text-center text-txt">
        {exp.Date}
      </h1>
      {exp.me.map((point, index) => (
        <GrayMessage message={point} bg="#44484e" />
      ))}

      <BlueMessage message={exp.outro} />
      <GrayMessage message="TODO: FIX THIS THIS SECTION IS NOT DONE" bg="#44484e" />
    </>
  );
};
export default Experience;
