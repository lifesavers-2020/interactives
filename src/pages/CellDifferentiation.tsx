import React from "react";
import { NextStepButton } from "../components/Share/NextStepButton";
import { Cell } from "../components/CellDifferentiation/Cell";
import { VContainer } from "../Layout/VContainer";

export const CellDifferentiation: React.FC = () => {
  const regular = {
    src: "/assets/imgs/cell-differentiation/regular.png",
    info:
      "Regular cells have specific jobs that are assigned to them. They cannot develop into any cell present in the bloodstream.",
    name: "Regular Cells",
  };

  const stemCell = {
    src: "/assets/imgs/cell-differentiation/stem-cell.png",
    info:
      "Stem cells, specifically blood stem cells, are immature cells that can develop into any cell present in the bloodstream.",
    name: "Stem Cells",
    reverse: true,
  };

  return (
    <VContainer>
      <div className="flex flex-col justify-around h-full p-4">
        <Cell {...regular} />
        <Cell {...stemCell} />
      </div>
      <NextStepButton to="/stem-cell-treatment" />
    </VContainer>
  );
};
