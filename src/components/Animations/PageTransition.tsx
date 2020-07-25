import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const PageTransition: React.FC = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="flex flex-col justify-between h-full w-full"
        initial={{ x: "-100vw", opacity: 0, scale: 1 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        exit={{ x: 0, opacity: 0, scale: 0.5 }}
        transition={{ type: "tween", ease: "anticipate", duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
