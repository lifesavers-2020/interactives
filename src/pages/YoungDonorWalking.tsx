import React from "react";
import { NextStepButton } from "../components/Share/NextStepButton";
import { Background } from "../components/YoungDonorWalking/Background";
import { WalkingDonor } from "../components/YoungDonorWalking/WalkingDonor";

export const YoungDonorWalking: React.FC = () => {
  return (
    <>
      <div className="py-12">
        <NextStepButton to="/match-in-family" />
      </div>
      <div>
        <div
          className="absolute"
          style={{
            zIndex: 1,
            bottom: 36,
            left: "25%",
            right: "25%",
            pointerEvents: "none",
          }}
        >
          <WalkingDonor />
        </div>
        <div className="absolute" style={{ bottom: 16 }}>
          <Background />
        </div>
      </div>
    </>
  );
};
