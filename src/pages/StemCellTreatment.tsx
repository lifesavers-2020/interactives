import React, { useState } from "react";
import { VContainer } from "../Layout/VContainer";
import { NextStepButton } from "../components/Share/NextStepButton";
import { ClickableImages } from "../components/Interactions/ClickableImages";
import { PopAnimation } from "../components/Animations/PopAnimation";
import { FadeAnimation } from "../components/Animations/FadeAnimation";

export const StemCellTreatment: React.FC = () => {
  const [count, setCount] = useState(0);

  const StemCell = (
    <ClickableImages
      width={254}
      height={254}
      onClick={() => count < 2 && setCount(count + 1)}
      imgs={[{ src: "/assets/imgs/cell-differentiation/stem-cell.png" }]}
    />
  );

  const makeInfoCard = (visible: () => boolean, info: string) => (
    <PopAnimation className="card" visible={visible}>
      {info}
    </PopAnimation>
  );

  return (
    <VContainer>
      <div className="flex flex-col justify-around items-center p-4 w-full h-full">
        {makeInfoCard(
          () => count > 0,
          "Various types of blood cancers such as leukemia, lymphoma or myeloma."
        )}
        {StemCell}
        <FadeAnimation>Different diseases stem cells can treat</FadeAnimation>
        {makeInfoCard(
          () => count > 1,
          "Bone marrow deficiency diseases such as thalassemia or sickle cell disease."
        )}
      </div>
      <NextStepButton />
    </VContainer>
  );
};
