import { useEffect } from "react";
import { motion, stagger } from "framer-motion";
import { cn } from "../../utils/cn";

export const TextGenerateEffect = ({ words, className }) => {
  const wordsArray = words.split(" ");

  useEffect(() => {
    // No need for useEffect for animating each word
  }, []);

  const renderWords = () => {
    return (
      <motion.div>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="text-white opacity-0 p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: idx * 0.2 }} // Adjust delay for staggered effect
          >
            {(word === "RestrO" || word === "OPEN") ? (
              <span style={{ color: "#f05941", fontWeight: "bold", fontSize: '110px' }}>
                {word}
              </span>
            ) : (
              <span>{word}</span>
            )}
            {" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-6xl leading-snug tracking-wide py-2">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
