import React from "react";
import { PageTransition } from "../Animations/PageTransition";
import { Banner } from "./Banner";
import { Divider } from "./Divider";
import { ProgressOverview } from "./ProgressOverview";

export const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col justify-between w-full h-full overflow-hidden relative">
      <div className="flex-none p-4 z-10 relative">
        <ProgressOverview />
      </div>
      <div className="flex-none flex flex-row justify-center z-10 relative">
        <Divider />
      </div>
      <div className="relative flex-auto flex flex-col justify-around items-center h-full w-full">
        <PageTransition>{children}</PageTransition>
      </div>
      <div className="flex-none flex flex-row justify-center py-1 z-10 relative">
        <Divider />
      </div>
      <div className="flex-none p-4 bg-white z-10 relative">
        <Banner />
      </div>
    </div>
  );
};
