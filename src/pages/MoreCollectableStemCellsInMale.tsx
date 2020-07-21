import React, { useState } from "react";
import { Layout } from "../Layout/Layout";
import { ClickableImages } from "../components/Interactions/ClickableImages";
import { PopAnimation } from "../components/Animations/PopAnimation";

export const MoreCollectableStemCellsInMale: React.FC = () => {
  const [showMaleBg, setShowMaleBg] = useState(false);
  const [showFemaleBg, setShowFemaleBg] = useState(false);

  const Female = (
    <ClickableImages
      width={150}
      height={442.91}
      onClick={() => setShowFemaleBg(true)}
      imgs={[
        { src: "/assets/imgs/more-collectable-stem-cells-in-male/female.png" },
        {
          src: "/assets/imgs/more-collectable-stem-cells-in-male/female-bg.png",
          visibility: () => showFemaleBg,
          tappable: false,
          hoverable: false,
        },
      ]}
      hoverable={true}
      tappable={true}
    />
  );

  const Male = (
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
  );

  const Info = (
    <PopAnimation className="card" visible={() => showMaleBg && showFemaleBg}>
      On average, more stem cells can be collected from male donors.
    </PopAnimation>
  );

  return (
    <Layout>
      <div className="p-4">
        <div className="flex flex-row justify-around">
          {Female}
          {Male}
        </div>
        {Info}
      </div>
    </Layout>
  );
};
