import React, { useState } from "react";
import { Layout } from "../Layout/Layout";
import { ClickableImages } from "../components/Interactions/ClickableImages";
import { PopAnimation } from "../components/Animations/PopAnimation";
import { ClickIndicator } from "../components/Shared/ClickIndicator";

export const FindingMatchTakesTime: React.FC = () => {
  const [count, setCount] = useState(-1);

  const Seasons = (
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
    <Layout>
      {Seasons}
      {Info}
    </Layout>
  );
};
