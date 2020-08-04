import React, { useContext, useState, useEffect } from "react";
import { PopAnimation } from "../components/Animations/PopAnimation";
import { PageStore } from "../stores/PageStore";
import { motion } from "framer-motion";
import { SwipeIndicator } from "../components/Shared/SwipeIndicator";

import handImage from "../assets/imgs/swabbing-kit/i8-2-hand.png";
import mikeImage from "../assets/imgs/swabbing-kit/i8-2-mike.png";
import baseImage from "../assets/imgs/swabbing-kit/i8-2-base.png";
import maskImage from "../assets/imgs/swabbing-kit/i8-2-mask.png";

export const SwabbingKit: React.FC = () => {
  const pageStore = useContext(PageStore.context());
  const [swabbed, setSwabbed] = useState(() => pageStore.isViewedPage());

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
      visible={() => !swabbed}
    >
      <motion.img
        className="absolute"
        draggable={false}
        src={handImage}
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
      <img className="absolute" draggable={false} src={mikeImage} alt="" />
      <img className="absolute" draggable={false} src={baseImage} alt="" />
      {MovableHand}
      <img
        className="absolute"
        draggable={false}
        src={maskImage}
        alt=""
        style={{ pointerEvents: "none" }}
      />
    </div>
  );

  const Info = (
    <PopAnimation className="card" visible={() => swabbed}>
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
