import React, { useContext } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { PageStore } from "../../stores/PageStore";

const variants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100vw" : "-100vw",
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
  const pageStore = useContext(PageStore.context());

  return (
    <AnimatePresence initial={false} custom={pageStore.direction}>
      <motion.div
        key={pageStore.page}
        className="absolute flex flex-col justify-between h-full w-full"
        initial="enter"
        animate="center"
        exit="exit"
        custom={pageStore.direction}
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
