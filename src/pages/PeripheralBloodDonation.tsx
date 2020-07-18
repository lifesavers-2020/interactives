import React from "react";
import { VContainer } from "../Layout/VContainer";
import { NextStepButton } from "../components/Share/NextStepButton";
import { PeripheralBloodDonor } from "../components/PeripheralBloodDonation/PeripheralBloodDonor";

export const PeripheralBloodDonation: React.FC = () => {
  return (
    <VContainer>
      <div style={{ width: 300 }}>
        <PeripheralBloodDonor />
      </div>
      <NextStepButton to="/find-match-takes-time" />
    </VContainer>
  );
};
