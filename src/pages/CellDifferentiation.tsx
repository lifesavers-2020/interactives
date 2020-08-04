import React, { useState, useEffect, useContext } from "react";
import { ClickableImages } from "../components/Interactions/ClickableImages";
import { PopAnimation } from "../components/Animations/PopAnimation";
import { FadeAnimation } from "../components/Animations/FadeAnimation";
import { ClickIndicator } from "../components/Shared/ClickIndicator";
import { PageStore } from "../stores/PageStore";

import regularCellImage from "../assets/imgs/cell-differentiation/regular.png";
import stemCellImage from "../assets/imgs/cell-differentiation/stem-cell.png";

export const CellDifferentiation: React.FC = () => {
  const pageStore = useContext(PageStore.context());
  const [regularClicked, setRegularClicked] = useState(() =>
    pageStore.isViewedPage()
  );
  const [stemCellClicked, setStemCellClicked] = useState(() =>
    pageStore.isViewedPage()
  );

  useEffect(() => {
    if (regularClicked && stemCellClicked) pageStore.pushPageLimit();
  }, [regularClicked, stemCellClicked, pageStore]);

  const RegularCell = (
    <FadeAnimation className="flex flex-row justify-around items-center w-full">
      <ClickIndicator visible={() => !regularClicked}>
        <ClickableImages
          width={160}
          height={127}
          onClick={() => setRegularClicked(true)}
          imgs={[{ src: regularCellImage }]}
          hoverable={true}
          tappable={true}
        />
      </ClickIndicator>
      <h2>Regular Cells</h2>
    </FadeAnimation>
  );

  const StemCell = (
    <FadeAnimation className="flex flex-row justify-around items-center w-full">
      <h2>Stem Cells</h2>
      <ClickIndicator visible={() => !stemCellClicked}>
        <ClickableImages
          width={120}
          height={120}
          onClick={() => setStemCellClicked(true)}
          imgs={[{ src: stemCellImage }]}
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
    <div className="vcontainer">
      {RegularCell}
      {makeInfoCard(
        () => regularClicked,
        "Regular human cells have specific jobs that are assigned to them."
      )}
      {StemCell}
      {makeInfoCard(
        () => stemCellClicked,
        "Stem cells, specifically blood stem cells, are immature cells that can develop into any type of cell present in the bloodstream."
      )}
    </div>
  );
};
