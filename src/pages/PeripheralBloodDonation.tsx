import React from "react";
import { VContainer } from "../Layout/VContainer";
import { NextStepButton } from "../components/Share/NextStepButton";

export const PeripheralBloodDonation: React.FC = () => {
  return (
    <VContainer>
      <NextStepButton to="/find-match-takes-time" />
    </VContainer>
  );
};
