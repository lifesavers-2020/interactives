import React, { useState, useContext, useEffect } from "react";
import { Scrollable } from "../components/Interactions/Scrollable";
import { useOnResize } from "../components/Shared/UseOnResize";
import { FadeAnimation } from "../components/Animations/FadeAnimation";
import { PageStore } from "../stores/PageStore";

export const YoungDonorWalking: React.FC = () => {
  const bgWidth = 1500;
  const [dragLeft, setDragLeft] = useState(window.innerWidth - bgWidth);
  const pageStore = useContext(PageStore.context());

  useEffect(() => {
    // TODO: After scroll, push page limit
    pageStore.pushPageLimit();
  }, [pageStore]);

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
    <>
      {WalkingPerson}
      {Background}
    </>
  );
};
