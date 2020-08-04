import React, { useContext, useState, useEffect } from "react";
import { PopAnimation } from "../components/Animations/PopAnimation";
import { PageStore } from "../stores/PageStore";
import { motion } from "framer-motion";
import { SwipeIndicator } from "../components/Shared/SwipeIndicator";

export const SwabbingKit: React.FC = () => {
  const [swabbed, setSwabbed] = useState(false);
  const pageStore = useContext(PageStore.context());

  useEffect(() => {
    if (swabbed) pageStore.pushPageLimit();
  }, [swabbed, pageStore]);

  const MovableHand = (
    <SwipeIndicator
      style={{
        position: "relative",
        width: 200,
        height: 88.88,
        bottom: -295,
        left: -85,
      }}
      visible={() => !swabbed && !pageStore.isViewedPage()}
    >
      <motion.img
        className="absolute"
        draggable={false}
        src="/assets/imgs/swabbing-kit/i8-2-hand.png"
        alt=""
        drag
        dragConstraints={{ top: -5, bottom: 2, left: -5, right: 5 }}
        dragElastic={0.01}
        dragMomentum={false}
        onDragEnd={() => setSwabbed(true)}
      />
    </SwipeIndicator>
  );

  const Swab = (
    <div
      className="relative w-full flex justify-center"
      style={{ width: 340, height: 400 }}
    >
      <img
        className="absolute"
        draggable={false}
        src="/assets/imgs/swabbing-kit/i8-2-mike.png"
        alt=""
      />
      <img
        className="absolute"
        draggable={false}
        src="/assets/imgs/swabbing-kit/i8-2-base.png"
        alt=""
      />
      {MovableHand}
      <img
        className="absolute"
        draggable={false}
        src="/assets/imgs/swabbing-kit/i8-2-mask.png"
        alt=""
        style={{ pointerEvents: "none" }}
      />
    </div>
  );

  const Info = (
    <PopAnimation
      className="card"
      visible={() => swabbed || pageStore.isViewedPage()}
    >
      Step 2: A swabbing kit will be sent to you along with instructions. Send
      the swabbing kit back to us when you are done.
    </PopAnimation>
  );

  return (
    <div className="vcontainer">
      {Swab}
      {Info}
    </div>
  );
};
