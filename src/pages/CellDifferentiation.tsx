import React, { useState } from "react";
import { NextStepButton } from "../components/Share/NextStepButton";
import { VContainer } from "../Layout/VContainer";
import { ClickEvent } from "../components/Interactions/ClickEvent";

export const CellDifferentiation: React.FC = () => {
  const [regularClicked, setRegularClicked] = useState(false);
  const [stemCellClicked, setStemCellClicked] = useState(false);

  const RegularCell = (
    <div className="flex flex-row justify-around items-center w-full">
      <ClickEvent
        width={250}
        height={187}
        onClick={() => setRegularClicked(true)}
        imgs={[{ src: "/assets/imgs/cell-differentiation/regular.png" }]}
      />
      <h2 className="text-center my-2 text-xl">Regular Cells</h2>
    </div>
  );

  const StemCell = (
    <div className="flex flex-row justify-around items-center w-full">
      <h2 className="text-center my-2 text-xl">Stem Cells</h2>
      <ClickEvent
        width={200}
        height={200}
        onClick={() => setStemCellClicked(true)}
        imgs={[{ src: "/assets/imgs/cell-differentiation/stem-cell.png" }]}
      />
    </div>
  );

  const makeInfoCard = (visible: () => boolean, info: string) => (
    <div
      className="card"
      style={{ visibility: visible() ? "visible" : "hidden" }}
    >
      {info}
    </div>
  );

  return (
    <VContainer>
      <div className="flex flex-col justify-around items-center h-full w-full p-4">
        {RegularCell}
        {makeInfoCard(
          () => regularClicked,
          "Regular cells have specific jobs that are assigned to them. They cannot develop into any cell present in the bloodstream."
        )}
        {StemCell}
        {makeInfoCard(
          () => stemCellClicked,
          "Stem cells, specifically blood stem cells, are immature cells that can develop into any cell present in the bloodstream."
        )}
      </div>
      <NextStepButton to="/stem-cell-treatment" />
    </VContainer>
  );
};
