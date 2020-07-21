import React from "react";
import { NextStepButton } from "../components/Share/NextStepButton";
import { AnimatedContainer } from "./AnimatedContainer";

export const Layout: React.FC = ({ children }) => {
  return (
    <AnimatedContainer>
      <div className="flex-auto flex flex-col justify-around items-center h-full w-full">
        {children}
      </div>
      <div className="flex-none p-4">
        <NextStepButton />
      </div>
    </AnimatedContainer>
  );
};
