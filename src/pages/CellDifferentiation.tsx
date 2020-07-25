import React, { useState } from "react";
import { ClickableImages } from "../components/Interactions/ClickableImages";
import { PopAnimation } from "../components/Animations/PopAnimation";
import { FadeAnimation } from "../components/Animations/FadeAnimation";
import { ClickIndicator } from "../components/Shared/ClickIndicator";

export const CellDifferentiation: React.FC = () => {
  const [regularClicked, setRegularClicked] = useState(false);
  const [stemCellClicked, setStemCellClicked] = useState(false);

  const RegularCell = (
    <FadeAnimation className="flex flex-row justify-around items-center w-full">
      <ClickIndicator visible={() => !regularClicked}>
        <ClickableImages
          width={250}
          height={187}
          onClick={() => setRegularClicked(true)}
          imgs={[{ src: "/assets/imgs/cell-differentiation/regular.png" }]}
          hoverable={true}
          tappable={true}
        />
      </ClickIndicator>
      <h2 className="text-center my-2 text-xl">Regular Cells</h2>
    </FadeAnimation>
  );

  const StemCell = (
    <FadeAnimation className="flex flex-row justify-around items-center w-full">
      <h2 className="text-center my-2 text-xl">Stem Cells</h2>
      <ClickIndicator visible={() => !stemCellClicked}>
        <ClickableImages
          width={200}
          height={200}
          onClick={() => setStemCellClicked(true)}
          imgs={[{ src: "/assets/imgs/cell-differentiation/stem-cell.png" }]}
          hoverable={true}
          tappable={true}
        />
      </ClickIndicator>
    </FadeAnimation>
  );

  const makeInfoCard = (visible: () => boolean, info: string) => (
    <PopAnimation className="card" visible={visible}>
      {info}
    </PopAnimation>
  );

  return (
    <>
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
    </>
  );
};
