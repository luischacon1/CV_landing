import { motion } from "framer-motion";

const GrayMessage = ({
  message = "Hi this is a sample message by Luis Chacon. Here we will talk about a lot of different things like how I love eating food etc etc.",
  children,
  bg = "lsecondary",
  customStyle = "",
  order=1,
  isAIResponse = false,
  isJSX = false,
  isClickable = false,
  onClick = null
}) => {
  // Remove delays for AI responses, keep them for preset messages
  const animationDelay = isAIResponse ? 0 : order * 0.2;
  const textDelay = isAIResponse ? 0 : order * 0.2 + 0.2;

  // Define gradient background for clickable messages
  const clickableBackground = 'linear-gradient(135deg, #10B981 0%, #059669 50%, #10B981 100%)';
  
  // Define enhanced styles for clickable messages
  const clickableStyle = isClickable ? {
    background: clickableBackground,
    backgroundSize: '200% 200%',
    boxShadow: '0 4px 15px rgba(16, 185, 129, 0.6), 0 0 30px rgba(16, 185, 129, 0.3)',
    border: '2px solid rgba(255, 255, 255, 0.4)',
    cursor: 'pointer',
    animation: 'gradient-shift 3s ease infinite, pulse-glow-green 2s ease-in-out infinite',
  } : {};

  return (
    <motion.div
      initial={{ scale: isAIResponse ? 0.95 : 0.8, opacity: 0, y: isAIResponse ? 10 : 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      whileHover={isClickable ? { scale: 1.03, boxShadow: '0 6px 20px rgba(16, 185, 129, 0.8), 0 0 40px rgba(16, 185, 129, 0.5)' } : {}}
      whileTap={isClickable ? { scale: 0.98 } : {}}
      transition={{
        type: "spring", 
        stiffness: isAIResponse ? 400 : 200, 
        damping: isAIResponse ? 25 : 20,
        delay: animationDelay,
       }}
      onClick={isClickable ? onClick : undefined}
      className={`inline-block text-white ${customStyle} rounded-[18px] rounded-bl-[4px] w-fit max-w-[75%] p-3 mb-1 shadow-lg`}
      style={{ 
        backgroundColor: isClickable ? undefined : bg,
        boxShadow: isClickable ? undefined : '0 1px 2px rgba(0, 0, 0, 0.1), 0 1px 4px rgba(0, 0, 0, 0.1)',
        fontSize: '22px',
        lineHeight: '1.4',
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
        wordBreak: 'break-word',
        hyphens: 'auto',
        ...clickableStyle
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
          isJSX ? message : (
            <div style={{ 
              whiteSpace: 'pre-line',
              wordWrap: 'break-word',
              overflowWrap: 'break-word',
              maxWidth: '100%'
            }}>
              {message}
            </div>
          )
        )}
      </motion.div>
    </motion.div>
  );
};

export default GrayMessage;
