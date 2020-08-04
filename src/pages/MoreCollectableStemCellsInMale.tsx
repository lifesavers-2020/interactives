import React, { useState, useContext, useEffect } from "react";
import { ClickableImages } from "../components/Interactions/ClickableImages";
import { PopAnimation } from "../components/Animations/PopAnimation";
import { ClickIndicator } from "../components/Shared/ClickIndicator";
import { PageStore } from "../stores/PageStore";

export const MoreCollectableStemCellsInMale: React.FC = () => {
  const [showMaleBg, setShowMaleBg] = useState(false);
  const [showFemaleBg, setShowFemaleBg] = useState(false);
  const pageStore = useContext(PageStore.context());

  useEffect(() => {
    if (showMaleBg && showFemaleBg) pageStore.pushPageLimit();
  }, [showMaleBg, showFemaleBg, pageStore]);

  const Female = (
    <ClickIndicator visible={() => !showFemaleBg && !pageStore.isViewedPage()}>
      <ClickableImages
        width={150}
        height={442.91}
        onClick={() => setShowFemaleBg(true)}
        imgs={[
          {
            src: "/assets/imgs/more-collectable-stem-cells-in-male/female.png",
          },
          {
            src:
              "/assets/imgs/more-collectable-stem-cells-in-male/female-bg.png",
            visibility: () => showFemaleBg || pageStore.isViewedPage(),
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
    <ClickIndicator visible={() => !showMaleBg && !pageStore.isViewedPage()}>
      <ClickableImages
        width={150}
        height={442.91}
        onClick={() => setShowMaleBg(true)}
        imgs={[
          { src: "/assets/imgs/more-collectable-stem-cells-in-male/male.png" },
          {
            src: "/assets/imgs/more-collectable-stem-cells-in-male/male-bg.png",
            visibility: () => showMaleBg || pageStore.isViewedPage(),
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
    <PopAnimation
      className="card"
      visible={() => (showMaleBg && showFemaleBg) || pageStore.isViewedPage()}
    >
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
