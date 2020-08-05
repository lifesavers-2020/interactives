import React, { useState, useContext } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { PopAnimation } from "../components/Animations/PopAnimation";
import { PageStore } from "../stores/PageStore";

import intro1Image from "../assets/imgs/intro/intro1.gif";
import intro2Image from "../assets/imgs/intro/intro2.gif";
import intro3Image from "../assets/imgs/intro/intro3.gif";
import introNextImage from "../assets/imgs/shared/intro-next.png";

const variants: Variants = {
  enter: { x: "100vw", opacity: 0, scale: 1 },
  center: { zIndex: 1, x: 0, scale: 1, opacity: 1 },
  exit: { zIndex: 0, opacity: 0, scale: 0.5 },
};

const srcs = [intro1Image, intro2Image, intro3Image];

export const Intro: React.FC = () => {
  const [page, setPage] = useState(0);
  const pageStore = useContext(PageStore.context());

  const paginate = () => {
    if (page < 2) return setPage(page + 1);
    pageStore.finishIntro();
  };

  const IntroContent = (
    <motion.div
      className="vcontainer w-full absolute"
      key={page}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "spring", stiffness: 300, damping: 200 },
        opacity: { duration: 0.2 },
      }}
    >
      <img src={srcs[page]} alt="" draggable={false} />
      {/* <PopAnimation>Intro text placeholder...</PopAnimation> */}
    </motion.div>
  );

  return (
    <div className="flex flex-col justify-between items-center w-full h-full bg-white overflow-x-hidden">
      <div className="relative w-full h-full">
        <AnimatePresence initial={false}>{IntroContent}</AnimatePresence>
      </div>
      <div className="flex flex-row justify-center w-full">
        <motion.img
          style={{ width: 54, height: 54, margin: 20 }}
          whileTap={{ scale: 0.9 }}
          onClick={paginate}
          src={introNextImage}
        ></motion.img>
      </div>
    </div>
  );
};
