import React, { useState, useContext, useEffect } from "react";
import { ClickableImages } from "../components/Interactions/ClickableImages";
import { PopAnimation } from "../components/Animations/PopAnimation";
import { ClickIndicator } from "../components/Shared/ClickIndicator";
import { PageStore } from "../stores/PageStore";

import femaleImage from "../assets/imgs/more-collectable-stem-cells-in-male/female.png";
import femaleBgImage from "../assets/imgs/more-collectable-stem-cells-in-male/female-bg.png";
import maleImage from "../assets/imgs/more-collectable-stem-cells-in-male/male.png";
import maleBgImage from "../assets/imgs/more-collectable-stem-cells-in-male/male-bg.png";

export const MoreCollectableStemCellsInMale: React.FC = () => {
  const pageStore = useContext(PageStore.context());
  const [showMaleBg, setShowMaleBg] = useState(() => pageStore.isViewedPage());
  const [showFemaleBg, setShowFemaleBg] = useState(() =>
    pageStore.isViewedPage()
  );

  useEffect(() => {
    if (showMaleBg && showFemaleBg) pageStore.pushPageLimit();
  }, [showMaleBg, showFemaleBg, pageStore]);

  const Female = (
    <ClickIndicator visible={() => !showFemaleBg}>
      <ClickableImages
        width={120}
        height={354}
        onClick={() => setShowFemaleBg(true)}
        imgs={[
          { src: femaleImage },
          {
            src: femaleBgImage,
            visibility: () => showFemaleBg,
            tappable: false,
            hoverable: false,
          },
        ]}
        hoverable={true}
        tappable={true}
      />
    </ClickIndicator>
  );

  const Male = (
    <ClickIndicator visible={() => !showMaleBg}>
      <ClickableImages
        width={120}
        height={354}
        onClick={() => setShowMaleBg(true)}
        imgs={[
          { src: maleImage },
          {
            src: maleBgImage,
            visibility: () => showMaleBg,
            tappable: false,
            hoverable: false,
          },
        ]}
        hoverable={true}
        tappable={true}
      />
    </ClickIndicator>
  );

  const Info = (
    <PopAnimation className="card" visible={() => showMaleBg && showFemaleBg}>
      On average, a male donor can provide more stem cells than a female donor.
    </PopAnimation>
  );

  return (
    <div className="vcontainer">
      <div className="flex flex-row justify-around content-end">
        {Female}
        {Male}
      </div>
      {Info}
    </div>
  );
};
