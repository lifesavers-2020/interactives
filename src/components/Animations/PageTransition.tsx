import React from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useLocation } from "wouter";

const variants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "-100vw" : "100vw",
    opacity: 0,
    scale: 1,
  }),
  center: {
    zIndex: 1,
    x: 0,
    scale: 1,
    opacity: 1,
  },
  exit: {
    zIndex: 0,
    opacity: 0,
    scale: 0.5,
  },
};

export const PageTransition: React.FC = ({ children }) => {
  const [location] = useLocation();

  const direction = 1;

  return (
    <AnimatePresence initial={false} custom={direction}>
      <motion.div
        key={location}
        className="absolute flex flex-col justify-between h-full w-full"
        initial="enter"
        animate="center"
        exit="exit"
        custom={direction}
        variants={variants}
        transition={{
          x: { type: "spring", stiffness: 300, damping: 200 },
          opacity: { duration: 0.2 },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
