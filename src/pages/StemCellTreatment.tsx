import React, { useState, useContext, useEffect } from "react";
import { ClickableImages } from "../components/Interactions/ClickableImages";
import { PopAnimation } from "../components/Animations/PopAnimation";
import { FadeAnimation } from "../components/Animations/FadeAnimation";
import { ClickIndicator } from "../components/Shared/ClickIndicator";
import { PageStore } from "../stores/PageStore";

export const StemCellTreatment: React.FC = () => {
  const pageStore = useContext(PageStore.context());
  const [count, setCount] = useState(() => (pageStore.isViewedPage() ? 2 : 0));

  useEffect(() => {
    if (count >= 2) pageStore.pushPageLimit();
  }, [count, pageStore]);

  const StemCell = (
    <ClickIndicator visible={() => count < 2}>
      <ClickableImages
        width={180}
        height={180}
        onClick={() => count < 2 && setCount(count + 1)}
        imgs={[{ src: "/assets/imgs/cell-differentiation/stem-cell.png" }]}
        hoverable={true}
        tappable={true}
      />
    </ClickIndicator>
  );

  const Description = (
    <FadeAnimation>
      <h2>Different treatable by stem cells transplant</h2>
    </FadeAnimation>
  );

  const makeInfoCard = (visible: () => boolean, info: string) => (
    <PopAnimation className="card" visible={visible}>
      {info}
    </PopAnimation>
  );

  return (
    <div className="vcontainer">
      {makeInfoCard(
        () => count > 0,
        "Various types of blood cancers such as leukemia, lymphoma and myeloma."
      )}
      {StemCell}
      {Description}
      {makeInfoCard(
        () => count > 1,
        "Bone marrow deficiency diseases such as thalassemia and sickle cell disease."
      )}
    </div>
  );
};
