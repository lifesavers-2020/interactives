import React from "react";
import { NextStepButton } from "../components/Shared/NextStepButton";
import { PageTransition } from "../components/Animations/PageTransition";
import { Banner } from "../components/Shared/Banner";

export const Layout: React.FC = ({ children }) => {
  return (
    <PageTransition>
      <div className="flex-none p-4">
        <NextStepButton />
      </div>
      <div className="flex-auto flex flex-col justify-around items-center h-full w-full">
        {children}
      </div>
      <div className="flex-none p-4">
        <Banner />
      </div>
    </PageTransition>
  );
};
