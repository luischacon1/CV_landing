import { motion } from "framer-motion";

const GrayMessage = ({
  message = "Hi this is a sample message by Luis Chacon. Here we will talk about a lot of different things like how I love eating food etc etc.",
  children,
  bg = "lsecondary",
  customStyle = "",
  order=1
}) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{
        type: "spring", 
        stiffness: 200, 
        damping: 20,
        delay: order * 0.2,
       }}
      className={`inline-block text-white ${customStyle} rounded-[18px] rounded-bl-[4px] w-fit max-w-[75%] p-3 mb-1 shadow-lg`}
      style={{ 
        backgroundColor: bg,
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1), 0 1px 4px rgba(0, 0, 0, 0.1)',
        fontSize: '22px',
        lineHeight: '1.4'
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: order * 0.2 + 0.2,
          duration: 0.3
        }}
      >
        {children ? children : message}
      </motion.div>
    </motion.div>
  );
};

export default GrayMessage;
