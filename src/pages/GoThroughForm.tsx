import React, { useState, useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { SwipeIndicator } from "../components/Shared/SwipeIndicator";
import { PopAnimation } from "../components/Animations/PopAnimation";
import { PageStore } from "../stores/PageStore";

import phoneImage from "../assets/imgs/go-through-form/i8-1-phone.png";
import mikeImage from "../assets/imgs/go-through-form/i8-1-mike.png";
import phoneFrameImage from "../assets/imgs/go-through-form/i8-1-phone-frame.png";

export const GoThroughForm: React.FC = () => {
  const pageStore = useContext(PageStore.context());
  const [scrolled, setScrolled] = useState(() => pageStore.isViewedPage());

  useEffect(() => {
    if (scrolled) pageStore.pushPageLimit();
  }, [scrolled, pageStore]);

  const ScrollableDoc = (
    <SwipeIndicator
      style={{
        position: "absolute",
        width: 60,
        height: 234,
        right: 68,
        top: 145,
        clipPath: "polygon(0 2%, 100% 2%, 100% 69%, 0 69%)",
      }}
      visible={() => !scrolled}
    >
      <motion.img
        drag="y"
        className="absolute"
        draggable={false}
        src={phoneImage}
        dragConstraints={{ top: -80, bottom: 0 }}
        alt=""
        onDrag={() => setScrolled(true)}
      />
    </SwipeIndicator>
  );

  const ReadDoc = (
    <div
      className="relative w-full flex justify-center"
      style={{ width: 340, height: 400 }}
    >
      <img className="absolute" draggable={false} src={mikeImage} alt="" />
      <img
        className="absolute"
        draggable={false}
        src={phoneFrameImage}
        style={{ width: 270, top: 135 }}
        alt=""
      />
      {ScrollableDoc}
    </div>
  );

  const Info = (
    <PopAnimation className="card" visible={() => scrolled}>
      To Join The Registry:
      <br />
      Step 1: Go to our page and read about the registration process.
    </PopAnimation>
  );

  return (
    <div className="vcontainer">
      {ReadDoc}
      {Info}
    </div>
  );
};
