import React, { useState } from "react";
import { VContainer } from "../Layout/VContainer";
import { NextStepButton } from "../components/Share/NextStepButton";
import { ClickEvent } from "../components/Interactions/ClickEvent";

export const StemCellTreatment: React.FC = () => {
  const [count, setCount] = useState(0);

  const StemCell = (
    <ClickEvent
      width={254}
      height={254}
      onClick={() => count < 2 && setCount(count + 1)}
      imgs={[{ src: "/assets/imgs/cell-differentiation/stem-cell.png" }]}
    />
  );

  const makeInfoCard = (visible: () => boolean, info: string) => (
    <div
      className="card"
      style={{
        visibility: visible() ? "visible" : "hidden",
      }}
    >
      {info}
    </div>
  );

  return (
    <VContainer>
      <div className="flex flex-col justify-around items-center p-4 w-full h-full">
        {makeInfoCard(
          () => count > 0,
          "Various types of blood cancers such as leukemia, lymphoma or myeloma."
        )}
        {StemCell}
        <p>Different diseases stem cells can treat</p>
        {makeInfoCard(
          () => count > 1,
          "Bone marrow deficiency diseases such as thalassemia or sickle cell disease."
        )}
      </div>
      <NextStepButton to="/young-donor" />
    </VContainer>
  );
};
