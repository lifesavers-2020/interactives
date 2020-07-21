import React, { useState } from "react";
import { VContainer } from "../Layout/VContainer";
import { NextStepButton } from "../components/Share/NextStepButton";
import { ClickableImages } from "../components/Interactions/ClickableImages";
import { PopAnimation } from "../components/Animations/PopAnimation";

export const FindingMatchTakesTime: React.FC = () => {
  const [count, setCount] = useState(-1);

  const Seasons = (
    <ClickableImages
      className="flex justify-center"
      width={300}
      height={353}
      imgs={[
        {
          src: "/assets/imgs/finding-match-takes-time/spring.png",
          visibility: () => count === 0,
        },
        {
          src: "/assets/imgs/finding-match-takes-time/summer.png",
          visibility: () => count === 1,
        },
        {
          src: "/assets/imgs/finding-match-takes-time/fall.png",
          visibility: () => count === 2,
        },
        {
          src: "/assets/imgs/finding-match-takes-time/winter.png",
          visibility: () => count === 3,
        },
        {
          src: "/assets/imgs/finding-match-takes-time/donor.png",
          style: { height: 353 },
        },
      ]}
      onClick={() => setCount((count + 1) % 4)}
    />
  );

  const Info = (
    <div className="p-4">
      <PopAnimation className="card" visible={() => count >= 0}>
        Finding a match takes time, patience and a donor's commitment to donate
        stem cells when the time comes to save a life.
      </PopAnimation>
    </div>
  );

  return (
    <VContainer>
      {Seasons}
      {Info}
      <NextStepButton />
    </VContainer>
  );
};
