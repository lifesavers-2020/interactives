import React from "react";
import { VContainer } from "../Layout/VContainer";
import { NextStepButton } from "../components/Share/NextStepButton";
import { TreatmentInfo } from "../components/StemCellTreatment/TreatmentInfo";

export const StemCellTreatment: React.FC = () => {
  return (
    <VContainer>
      <TreatmentInfo />
      <NextStepButton to="/#" />
    </VContainer>
  );
};
