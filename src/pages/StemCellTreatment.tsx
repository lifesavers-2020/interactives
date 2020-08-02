import React, { useState, useContext, useEffect } from "react";
import { ClickableImages } from "../components/Interactions/ClickableImages";
import { PopAnimation } from "../components/Animations/PopAnimation";
import { FadeAnimation } from "../components/Animations/FadeAnimation";
import { ClickIndicator } from "../components/Shared/ClickIndicator";
import { PageStore } from "../stores/PageStore";

export const StemCellTreatment: React.FC = () => {
  const [count, setCount] = useState(0);
  const pageStore = useContext(PageStore.context());

  useEffect(() => {
    if (count >= 2) pageStore.pushPageLimit();
  }, [count, pageStore]);

  const StemCell = (
    <ClickIndicator visible={() => count < 2 && !pageStore.isViewedPage()}>
      <ClickableImages
        width={254}
        height={254}
        onClick={() => count < 2 && setCount(count + 1)}
        imgs={[{ src: "/assets/imgs/cell-differentiation/stem-cell.png" }]}
        hoverable={true}
        tappable={true}
      />
    </ClickIndicator>
  );

  const Description = (
    <FadeAnimation>
      <h2>Different diseases stem cells can treat</h2>
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
        () => count > 0 || pageStore.isViewedPage(),
        "Various types of blood cancers such as leukemia, lymphoma or myeloma."
      )}
      {StemCell}
      {Description}
      {makeInfoCard(
        () => count > 1 || pageStore.isViewedPage(),
        "Bone marrow deficiency diseases such as thalassemia or sickle cell disease."
      )}
    </div>
  );
};
