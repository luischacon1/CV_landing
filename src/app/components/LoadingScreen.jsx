import { motion } from "framer-motion";

const LoadingScreen = ({ loadedCount, totalImages }) => {
  const progress = totalImages > 0 ? (loadedCount / totalImages) * 100 : 0;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-primary flex flex-col items-center justify-center z-50"
    >
      {/* Logo/Avatar */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="w-24 h-24 rounded-full bg-lsecondary flex items-center justify-center overflow-hidden">
          <img
            src="/portfolio/luis/perfilsonrie.png"
            alt="Luis"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Loading Text */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center mb-6"
      >
        <h2 className="text-white text-xl font-medium mb-2">Loading Luis's Portfolio</h2>
        <p className="text-txt text-sm">Preparing the best experience for you...</p>
      </motion.div>

      {/* Progress Bar */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "200px", opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="relative"
      >
        <div className="w-full h-1 bg-lsecondary rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-iblue rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>
        <p className="text-txt text-xs text-center mt-2">
          {loadedCount} / {totalImages} images loaded
        </p>
      </motion.div>

      {/* Animated dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex gap-1 mt-4"
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-iblue rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen; 