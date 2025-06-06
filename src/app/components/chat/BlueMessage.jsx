import { motion } from "framer-motion";

const BlueMessage = ({
  message = "Hi this is a sample message by Luis Chacon. Here we will talk about a lot of different things like how I love eating food etc etc.",
  children,
  order = 1,
  isUserMessage = false
}) => {
  // For user messages, use instant animation. For preset messages, use delayed animation
  const animationDelay = isUserMessage ? 0 : order * 0.2;
  const textDelay = isUserMessage ? 0 : order * 0.2 + 0.2;

  return (
    <motion.div
      initial={{ scale: isUserMessage ? 0.95 : 0.8, opacity: 0, y: isUserMessage ? 10 : 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: isUserMessage ? 400 : 200, 
        damping: isUserMessage ? 25 : 20,
        delay: animationDelay
      }}
      className="inline-block ml-auto text-white bg-iblue rounded-[18px] rounded-br-[4px] w-fit max-w-[75%] p-3 mb-1 shadow-lg"
      style={{
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1), 0 1px 4px rgba(0, 0, 0, 0.1)',
        fontSize: '22px',
        lineHeight: '1.4'
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: textDelay,
          duration: isUserMessage ? 0.05 : 0.3
        }}
      >
        {children ? children : message}
      </motion.div>
    </motion.div>
  );
};

export default BlueMessage;
