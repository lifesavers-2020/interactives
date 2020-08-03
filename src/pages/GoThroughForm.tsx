import React, { useState, useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { SwipeIndicator } from "../components/Shared/SwipeIndicator";
import { PopAnimation } from "../components/Animations/PopAnimation";
import { PageStore } from "../stores/PageStore";

export const GoThroughForm: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const pageStore = useContext(PageStore.context());

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
      visible={() => !scrolled && !pageStore.isViewedPage()}
    >
      <motion.img
        drag="y"
        className="absolute"
        draggable={false}
        src="/assets/imgs/go-through-form/i8-1-phone.png"
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
      <img
        className="absolute"
        draggable={false}
        src="/assets/imgs/go-through-form/i8-1-mike.png"
        alt=""
      />
      <img
        className="absolute"
        draggable={false}
        src="/assets/imgs/go-through-form/i8-1-phone-frame.png"
        style={{ width: 270, top: 135 }}
        alt=""
      />
      {ScrollableDoc}
    </div>
  );

  const Info = (
    <PopAnimation
      className="card"
      visible={() => scrolled || pageStore.isViewedPage()}
    >
      (Need revise)
      <br /> Register 1: Go through register form
    </PopAnimation>
  );

  return (
    <div className="vcontainer">
      {ReadDoc}
      {Info}
    </div>
  );
};
