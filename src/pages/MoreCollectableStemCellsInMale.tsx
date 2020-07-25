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
    <ClickIndicator visible={() => !showFemaleBg}>
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
        width={150}
        height={442.91}
        onClick={() => setShowMaleBg(true)}
        imgs={[
          { src: "/assets/imgs/more-collectable-stem-cells-in-male/male.png" },
          {
            src: "/assets/imgs/more-collectable-stem-cells-in-male/male-bg.png",
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
      On average, more stem cells can be collected from male donors.
    </PopAnimation>
  );

  return (
    <>
      <div className="p-4">
        <div className="flex flex-row justify-around">
          {Female}
          {Male}
        </div>
        {Info}
      </div>
    </>
  );
};
