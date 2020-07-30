import React, { useState, useContext, useEffect } from "react";
import { Scrollable } from "../components/Interactions/Scrollable";
import { useOnResize } from "../components/Shared/UseOnResize";
import { FadeAnimation } from "../components/Animations/FadeAnimation";
import { PageStore } from "../stores/PageStore";
import { PopAnimation } from "../components/Animations/PopAnimation";
import { SwipeIndicator } from "../components/Shared/SwipeIndicator";

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const YoungDonorWalking: React.FC = () => {
  const bgWidth = 1200;
  const [dragLeft, setDragLeft] = useState(window.innerWidth - bgWidth);
  const pageStore = useContext(PageStore.context());
  const [step, setStep] = useState(0);
  const [lock, setLock] = useState(false);
  const [swiped, setSwiped] = useState(false);
  const NUM_STEP = 3;

  useEffect(() => {
    if (step < NUM_STEP) return;
    pageStore.pushPageLimit();
  }, [pageStore, step]);

  useOnResize(() => setDragLeft(window.innerWidth - bgWidth), 200);

  const makeInfoBox = (text: string, shownStep: number) => (
    <div className="z-10 absolute px-8" style={{ top: 32 }}>
      <PopAnimation visible={() => step === shownStep}>
        <div className="card">{text}</div>
      </PopAnimation>
    </div>
  );

  const Infos = (
    <>
      {makeInfoBox("17 Years Old", 0)}
      {makeInfoBox(
        "Younger donors offer better outcomes for reducing post-transplant complications",
        1
      )}
      {makeInfoBox("You will also remain on the stem cell registry longer.", 2)}
      {makeInfoBox("35 Years Old", 3)}
    </>
  );

  const WalkingPerson = (
    <FadeAnimation
      className="absolute flex justify-center"
      style={{
        zIndex: 1,
        bottom: 36,
        left: "25%",
        right: "25%",
        pointerEvents: "none",
      }}
    >
      <img
        width={120}
        src="/assets/imgs/young-donor-walking/walking.gif"
        alt="Young donor"
        draggable={false}
      />
    </FadeAnimation>
  );

  const Background = (
    <div className="absolute" style={{ bottom: 16 }}>
      <SwipeIndicator horizontal top="0" left="10%" visible={() => !swiped}>
        <Scrollable
          imageWidth={bgWidth}
          drag="x"
          dragConstraints={{
            right: step * (dragLeft / NUM_STEP),
            left: step * (dragLeft / NUM_STEP),
          }}
          onDrag={(_, { offset, velocity }) => {
            if (lock) return;
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold && step < NUM_STEP) {
              setStep(step + 1);
              setLock(true);
              setSwiped(true);
            } else if (swipe > swipeConfidenceThreshold && step > 0) {
              setStep(step - 1);
              setLock(true);
              setSwiped(true);
            }
          }}
          onDragEnd={() => setLock(false)}
          dragElastic={1}
        >
          <img
            src="/assets/imgs/young-donor-walking/trees.png"
            alt="background"
            draggable={false}
          />
        </Scrollable>
      </SwipeIndicator>
    </div>
  );

  return (
    <div className="vcontainer">
      {Infos}
      {WalkingPerson}
      {Background}
    </div>
  );
};
