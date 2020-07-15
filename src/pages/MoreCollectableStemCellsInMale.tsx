import React, { useState } from "react";
import { VContainer } from "../Layout/VContainer";
import { NextStepButton } from "../components/Share/NextStepButton";
import { Figure } from "../components/MoreCollectableStemCellsInMale/Figure";

export const MoreCollectableStemCellsInMale: React.FC = () => {
  const [showMaleBg, setShowMaleBg] = useState(false);
  const [showFemaleBg, setShowFemaleBg] = useState(false);

  const male = {
    src: "/assets/imgs/more-collectable-stem-cells-in-male/male.png",
    bgSrc: "/assets/imgs/more-collectable-stem-cells-in-male/male-bg.png",
    showBg: showMaleBg,
    setShowBg: setShowMaleBg,
  };

  const female = {
    src: "/assets/imgs/more-collectable-stem-cells-in-male/female.png",
    bgSrc: "/assets/imgs/more-collectable-stem-cells-in-male/female-bg.png",
    showBg: showFemaleBg,
    setShowBg: setShowFemaleBg,
  };

  return (
    <VContainer>
      <div className="flex flex-row justify-between">
        <Figure {...female} />
        <Figure {...male} />
      </div>
      <div
        className="p-4"
        style={{
          visibility: showMaleBg && showFemaleBg ? "visible" : "hidden",
        }}
      >
        <div className="rounded shadow border border-gray-400 w-full p-4 my-2">
          On average, more stem cells can be collected from male donors.
        </div>
      </div>
      <NextStepButton to="/peripheral-blood-donation" />
    </VContainer>
  );
};
