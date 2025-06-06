import { motion } from "framer-motion";

const GrayMessage = ({
  message = "Hi this is a sample message by Luis Chacon. Here we will talk about a lot of different things like how I love eating food etc etc.",
  children,
  bg = "lsecondary",
  customStyle = "",
  order=1,
  isAIResponse = false
}) => {
  // Remove delays for AI responses, keep them for preset messages
  const animationDelay = isAIResponse ? 0 : order * 0.2;
  const textDelay = isAIResponse ? 0 : order * 0.2 + 0.2;

  return (
    <motion.div
      initial={{ scale: isAIResponse ? 0.95 : 0.8, opacity: 0, y: isAIResponse ? 10 : 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{
        type: "spring", 
        stiffness: isAIResponse ? 400 : 200, 
        damping: isAIResponse ? 25 : 20,
        delay: animationDelay,
       }}
      className={`inline-block text-white ${customStyle} rounded-[18px] rounded-bl-[4px] w-fit max-w-[75%] p-3 mb-1 shadow-lg`}
      style={{ 
        backgroundColor: bg,
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1), 0 1px 4px rgba(0, 0, 0, 0.1)',
        fontSize: '22px',
        lineHeight: '1.4',
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
        wordBreak: 'break-word',
        hyphens: 'auto'
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: textDelay,
          duration: isAIResponse ? 0.05 : 0.3
        }}
      >
        {children ? children : (
          <div style={{ 
            whiteSpace: 'pre-line',
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
            maxWidth: '100%'
          }}>
            {message}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default GrayMessage;
