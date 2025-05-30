import GrayMessage from "../GrayMessage";
import BlueMessage from "../BlueMessage";
const Experience = ({ exp }) => {
  let counter = 1;
  const timeGap = 2;
  
  return (
    <>
      <h1 className="text-xs text-center text-txt">
        {exp.startDate} - {exp.endDate}
      </h1>
      {exp.img && (
        <img src={exp.img} alt={exp.title || 'experience'} className="w-10 mx-auto my-2" />
      )}
      <BlueMessage message={exp.intro} order={(counter += timeGap)} />

      {exp.me.map((point, index) => (
        <GrayMessage key={index} message={point} bg="#44484e" order={(counter += timeGap)} />
      ))}

      <BlueMessage message={exp.outro} order={(counter += timeGap)} />
    </>
  );
};
export default Experience;
