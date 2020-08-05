import React, { useState, useContext, useEffect } from "react";
import { PopAnimation } from "../components/Animations/PopAnimation";
import { PageStore } from "../stores/PageStore";
import { AnimatePresence, motion } from "framer-motion";
import { SwipeIndicator } from "../components/Shared/SwipeIndicator";

import springImage from "../assets/imgs/finding-match-takes-time/spring.png";
import summerImage from "../assets/imgs/finding-match-takes-time/summer.png";
import fallImage from "../assets/imgs/finding-match-takes-time/fall.png";
import winterImage from "../assets/imgs/finding-match-takes-time/winter.png";
import donorImage from "../assets/imgs/finding-match-takes-time/donor.png";

const seasons = [springImage, summerImage, fallImage, winterImage];
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const FindingMatchTakesTime: React.FC = () => {
  const pageStore = useContext(PageStore.context());
  const [count, setCount] = useState(() => (pageStore.isViewedPage() ? 4 : -1));
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
    <SwipeIndicator className="w-full" horizontal visible={() => count < 3}>
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
          src={donorImage}
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
    <PopAnimation className="card" visible={() => count >= 0}>
      Finding a match usually takes time. The donor's commitment to donate is
      critical in saving a patient's life.
    </PopAnimation>
  );

  return (
    <div className="vcontainer">
      {Seasons}
      {Info}
    </div>
  );
};
