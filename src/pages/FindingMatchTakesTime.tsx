import React, { useState, useContext, useEffect } from "react";
import { ClickableImages } from "../components/Interactions/ClickableImages";
import { PopAnimation } from "../components/Animations/PopAnimation";
import { ClickIndicator } from "../components/Shared/ClickIndicator";
import { PageStore } from "../stores/PageStore";

export const FindingMatchTakesTime: React.FC = () => {
  const [count, setCount] = useState(-1);
  const pageStore = useContext(PageStore.context());

  useEffect(() => {
    if (count >= 3) pageStore.pushPageLimit();
  }, [count, pageStore]);

  const Seasons = (
    <div className="flex flex-row justify-center my-2">
      <ClickIndicator visible={() => count < 3}>
        <ClickableImages
          className="flex justify-center"
          width={300}
          height={354}
          imgs={[
            {
              src: "/assets/imgs/finding-match-takes-time/spring.png",
              visibility: () => count % 4 === 0,
            },
            {
              src: "/assets/imgs/finding-match-takes-time/summer.png",
              visibility: () => count % 4 === 1,
            },
            {
              src: "/assets/imgs/finding-match-takes-time/fall.png",
              visibility: () => count % 4 === 2,
            },
            {
              src: "/assets/imgs/finding-match-takes-time/winter.png",
              visibility: () => count % 4 === 3,
            },
            {
              src: "/assets/imgs/finding-match-takes-time/donor.png",
              style: { paddingTop: 32, height: 353 },
            },
          ]}
          onClick={() => setCount(count + 1)}
          hoverable={true}
          tappable={true}
        />
      </ClickIndicator>
    </div>
  );

  const Info = (
    <PopAnimation className="card" visible={() => count >= 0}>
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
