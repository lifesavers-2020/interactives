import React, { useState } from "react";
import { PersonHoldingPhone } from "../components/RegisterSteps/PersonHoldingPhone";
import { FillInDocument } from "../components/RegisterSteps/FillInDocument";
import { ReceiveTestKit } from "../components/RegisterSteps/ReceiveTestKit";
import { Swab } from "../components/RegisterSteps/Swab";
import { FadeAnimation } from "../components/Animations/FadeAnimation";
import { Layout } from "../Layout/Layout";

export const RegisterSteps: React.FC = () => {
  const [step, setStep] = useState(0);

  return (
    <Layout>
      <div
        className="absolute"
        onClick={() => step === 0 && setStep(step + 1)}
        style={{ top: 16, left: 16, width: 180 }}
      >
        <FadeAnimation>
          <FillInDocument />
        </FadeAnimation>
      </div>
      <div
        className="absolute"
        onClick={() => step === 1 && setStep(step + 1)}
        style={{
          top: 128,
          right: 16,
          width: 180,
        }}
      >
        <FadeAnimation visible={() => step > 0}>
          <ReceiveTestKit />
        </FadeAnimation>
      </div>
      <div
        className="absolute"
        style={{
          top: 296,
          right: 120,
          width: 180,
        }}
      >
        <FadeAnimation visible={() => step > 1}>
          <Swab />
        </FadeAnimation>
      </div>
      <div className="absolute" style={{ bottom: 64, left: 32, width: 180 }}>
        <FadeAnimation>
          <PersonHoldingPhone />
        </FadeAnimation>
      </div>
    </Layout>
  );
};
