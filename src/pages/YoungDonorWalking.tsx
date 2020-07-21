import React, { useState } from "react";
import { NextStepButton } from "../components/Shared/NextStepButton";
import { Scrollable } from "../components/Interactions/Scrollable";
import { useOnResize } from "../components/Shared/UseOnResize";
import { FadeAnimation } from "../components/Animations/FadeAnimation";
import { AnimatedContainer } from "../Layout/AnimatedContainer";

export const YoungDonorWalking: React.FC = () => {
  const bgWidth = 1500;
  const [dragLeft, setDragLeft] = useState(window.innerWidth - bgWidth);

  useOnResize(() => setDragLeft(window.innerWidth - bgWidth), 200);

  const WalkingPerson = (
    <FadeAnimation
      className="absolute"
      style={{
        zIndex: 1,
        bottom: 36,
        left: "25%",
        right: "25%",
        pointerEvents: "none",
      }}
    >
      <img
        src="/assets/imgs/young-donor-walking/walking.gif"
        alt="Young donor"
        draggable={false}
      />
    </FadeAnimation>
  );

  const Background = (
    <div className="absolute" style={{ bottom: 16 }}>
      <Scrollable
        imageWidth={bgWidth}
        drag="x"
        dragConstraints={{ right: 0, left: dragLeft }}
      >
        <img
          src="/assets/imgs/young-donor-walking/tree+road.png"
          alt="background"
          draggable={false}
        />
      </Scrollable>
    </div>
  );

  return (
    <AnimatedContainer>
      <div className="relative py-12 px-4" style={{ zIndex: 100 }}>
        <NextStepButton />
      </div>
      <div>
        {WalkingPerson}
        {Background}
      </div>
    </AnimatedContainer>
  );
};
