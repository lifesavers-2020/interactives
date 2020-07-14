import React from "react";
import { VContainer } from "../Layout/VContainer";
import { NextStepButton } from "../components/Share/NextStepButton";
import { TreatmentInfo } from "../components/StemCellTreatment/TreatmentInfo";

export const StemCellTreatment: React.FC = () => {
  return (
    <VContainer>
      <div className="p-4 w-full h-full">
        <TreatmentInfo />
      </div>
      <NextStepButton to="/young-donor" />
    </VContainer>
  );
};
