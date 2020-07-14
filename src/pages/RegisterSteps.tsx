import React, { useState } from "react";
import { PersonHoldingPhone } from "../components/RegisterSteps/PersonHoldingPhone";
import { FillInDocument } from "../components/RegisterSteps/FillInDocument";
import { ReceiveTestKit } from "../components/RegisterSteps/ReceiveTestKit";
import { Swab } from "../components/RegisterSteps/Swab";

export const RegisterSteps: React.FC = () => {
  const [step, setStep] = useState(0);

  return (
    <>
      <div
        className="absolute"
        onClick={() => step === 0 && setStep(step + 1)}
        style={{ top: 16, left: 16, width: 180 }}
      >
        <FillInDocument />
      </div>
      <div
        className="absolute"
        onClick={() => step === 1 && setStep(step + 1)}
        style={{
          top: 128,
          right: 16,
          width: 180,
          visibility: step > 0 ? "visible" : "hidden",
        }}
      >
        <ReceiveTestKit />
      </div>
      <div
        className="absolute"
        style={{
          top: 296,
          right: 120,
          width: 180,
          visibility: step > 1 ? "visible" : "hidden",
        }}
      >
        <Swab />
      </div>
      <div className="absolute" style={{ bottom: 64, left: 32, width: 180 }}>
        <PersonHoldingPhone />
      </div>
    </>
  );
};
