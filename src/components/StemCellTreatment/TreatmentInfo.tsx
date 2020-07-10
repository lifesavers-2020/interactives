import React, { useState } from "react";
import { ClickIndicator } from "../Share/ClickIndicator";

export const TreatmentInfo: React.FC = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="flex flex-col justify-around items-center h-full">
      <div
        className="rounded shadow border border-gray-400 w-full p-4 my-2"
        style={{ visibility: showInfo ? "visible" : "hidden" }}
      >
        Various types of blood cancers such as leukemia, lymphoma or myeloma.
      </div>
      <div onClick={() => setShowInfo(true)}>
        <img
          src="/assets/imgs/cell-differentiation/stem-cell.png"
          alt="Stem Cell"
        />
      </div>
      <ClickIndicator xOffset={75} yOffset={45} />
      <p>Different diseases stem cells can treat</p>
      <div
        className="rounded shadow border border-gray-400 w-full p-4 my-2"
        style={{ visibility: showInfo ? "visible" : "hidden" }}
      >
        Bone marrow deficiency diseases such as thalassemia or sickle cell
        disease.
      </div>
    </div>
  );
};
