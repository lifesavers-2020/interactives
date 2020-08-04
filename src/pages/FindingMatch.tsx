import React, { useState, useEffect, useContext } from "react";
import { PageStore } from "../stores/PageStore";
import { ClickIndicator } from "../components/Shared/ClickIndicator";
import { FadeAnimation } from "../components/Animations/FadeAnimation";

import matchMapImage from "../assets/imgs/finding-match/i3-map.png";
import sickImage from "../assets/imgs/finding-match/i3-sick.png";
import curedImage from "../assets/imgs/finding-match/i3-cured.png";
import match2Image from "../assets/imgs/finding-match/i3-match-2.png";
import matchImage from "../assets/imgs/finding-match/i3-match.png";

export const FindingMatch: React.FC = () => {
  const pageStore = useContext(PageStore.context());
  const [found, setFound] = useState(() => pageStore.isViewedPage());

  useEffect(() => {
    if (found) pageStore.pushPageLimit();
  }, [found, pageStore]);

  const Crowd = (
    <div className="relative">
      <img
        style={{ width: 300, height: 300 }}
        src={matchMapImage}
        alt=""
        draggable={false}
      />
      <ClickIndicator
        width={40}
        right={130}
        bottom={150}
        visible={() => !found}
      >
        <div
          className="absolute"
          style={{
            width: 32,
            height: 70,
            top: -244,
            left: 117,
          }}
          onClick={() => setFound(true)}
        ></div>
      </ClickIndicator>
    </div>
  );

  const makeImageBox = (
    srcBefore: string,
    srcAfter: string,
    text: string,
    width: number
  ) => (
    <div style={{ width }}>
      <div className="text-center">{text}</div>
      <img src={srcBefore} alt="" draggable={false} />
      <div className="relative">
        <FadeAnimation
          className="absolute"
          style={{ top: -120 }}
          visible={() => found}
        >
          <img src={srcAfter} alt="" draggable={false} />
        </FadeAnimation>
      </div>
    </div>
  );

  const Hint = (
    <div
      className="flex flex-col justify-center p-2 card"
      style={{ height: 300, borderRadius: 32, maxWidth: 400 }}
    >
      <div className="flex flex-row justify-around">
        {makeImageBox(sickImage, curedImage, "Patient", 120)}
        {makeImageBox(match2Image, matchImage, "Match Donor", 120)}
      </div>
      <h2 className="text-xl" style={{ height: 90 }}>
        {found
          ? "Only 25% of patient can find a match within their families, the rest are relying on us for help."
          : "Help us find the perfect match for a patient in need."}
      </h2>
    </div>
  );

  return (
    <div className="vcontainer">
      {Crowd}
      {Hint}
    </div>
  );
};
