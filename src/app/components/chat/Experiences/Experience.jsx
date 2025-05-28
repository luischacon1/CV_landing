import GrayMessage from "../GrayMessage";
import BlueMessage from "../BlueMessage";
const Experience = ({ exp }) => {
  return (
    <>
      <h1 className="text-xs text-center text-txt">
        {exp.startDate} - {exp.endDate}
      </h1>
      {exp.img && (
        <img src={exp.img} alt={exp.title || 'experience'} className="w-10 mx-auto my-2" />
      )}
      <BlueMessage message={exp.intro} />

      {exp.me.map((point, index) => (
        <GrayMessage key={index} message={point} bg="#44484e" />
      ))}

      <BlueMessage message={exp.outro} />
    </>
  );
};
export default Experience;
