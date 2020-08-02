import React, { useState, useContext, useEffect } from "react";
import { PopAnimation } from "../components/Animations/PopAnimation";
import { PageStore } from "../stores/PageStore";
import { AnimatePresence, motion } from "framer-motion";
import { SwipeIndicator } from "../components/Shared/SwipeIndicator";

const seasons = [
  "/assets/imgs/finding-match-takes-time/spring.png",
  "/assets/imgs/finding-match-takes-time/summer.png",
  "/assets/imgs/finding-match-takes-time/fall.png",
  "/assets/imgs/finding-match-takes-time/winter.png",
];
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const FindingMatchTakesTime: React.FC = () => {
  const [count, setCount] = useState(-1);
  const pageStore = useContext(PageStore.context());
  const [[season, direction], setSeason] = useState([0, 0]);

  useEffect(() => {
    if (count >= 3) pageStore.pushPageLimit();
  }, [count, pageStore]);

  const changeSeason = (dir: number) => {
    let newSeason = season + dir;
    if (newSeason < 0) newSeason = 3;
    if (newSeason > 3) newSeason = 0;
    setCount(count + 1);
    setSeason([newSeason, dir]);
  };

  const Seasons = (
    <SwipeIndicator
      className="w-full"
      horizontal
      visible={() => count < 3 && !pageStore.isViewedPage()}
    >
      <div className="flex flex-row justify-center my-2 relative w-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            className="absolute w-full"
            style={{ maxWidth: 343, zIndex: -1 }}
            key={season}
            custom={direction}
            src={seasons[season]}
            initial="enter"
            animate="center"
            exit="exit"
            variants={{
              enter: (direction: number) => ({
                x: direction > 0 ? 1000 : -1000,
                opacity: 0,
              }),
              center: { zIndex: 1, x: 0, opacity: 1 },
              exit: (direction: number) => ({
                x: direction < 0 ? 1000 : -1000,
                opacity: 0,
              }),
            }}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 200 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(_, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                changeSeason(1);
              } else if (swipe > swipeConfidenceThreshold) {
                changeSeason(-1);
              }
            }}
            alt="seasons"
          />
        </AnimatePresence>
        <img
          src="/assets/imgs/finding-match-takes-time/donor.png"
          style={{
            paddingTop: 32,
            height: 353,
            zIndex: 2,
            pointerEvents: "none",
          }}
          alt="donor"
        />
      </div>
    </SwipeIndicator>
  );

  const Info = (
    <PopAnimation
      className="card"
      visible={() => count >= 0 || pageStore.isViewedPage()}
    >
      Finding a match takes time, patience and a donor's commitment to donate
      stem cells when the time comes to save a life.
    </PopAnimation>
  );

  return (
    <div className="vcontainer">
      {Seasons}
      {Info}
    </div>
  );
};
