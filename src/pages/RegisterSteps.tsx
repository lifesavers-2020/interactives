import React from "react";
import { PersonHoldingPhone } from "../components/RegisterSteps/PersonHoldingPhone";
import { FillInDocument } from "../components/RegisterSteps/FillInDocument";
import { ReceiveTestKit } from "../components/RegisterSteps/ReceiveTestKit";
import { Swab } from "../components/RegisterSteps/Swab";

export const RegisterSteps: React.FC = () => {
  return (
    <>
      <div className="absolute" style={{ top: 16, left: 16, width: 180 }}>
        <FillInDocument />
      </div>
      <div className="absolute" style={{ top: 128, right: 16, width: 180 }}>
        <ReceiveTestKit />
      </div>
      <div className="absolute" style={{ top: 296, right: 120, width: 180 }}>
        <Swab />
      </div>
      <div className="absolute" style={{ bottom: 64, left: 32, width: 180 }}>
        <PersonHoldingPhone />
      </div>
    </>
  );
};
