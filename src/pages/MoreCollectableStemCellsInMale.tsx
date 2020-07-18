import React, { useState } from "react";
import { VContainer } from "../Layout/VContainer";
import { NextStepButton } from "../components/Share/NextStepButton";
import { ClickableImages } from "../components/Interactions/ClickableImages";

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
        },
      ]}
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
        },
      ]}
    />
  );

  return (
    <VContainer>
      <div className="p-4">
        <div className="flex flex-row justify-around">
          {Female}
          {Male}
        </div>
        <div
          className="card"
          style={{
            visibility: showMaleBg && showFemaleBg ? "visible" : "hidden",
          }}
        >
          On average, more stem cells can be collected from male donors.
        </div>
      </div>
      <NextStepButton to="/peripheral-blood-donation" />
    </VContainer>
  );
};
