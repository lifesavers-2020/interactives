import React from "react";
import { PageTransition } from "../components/Animations/PageTransition";
import { Banner } from "../components/Layouts/Banner";
import { Divider } from "../components/Layouts/Divider";
import { ProgressOverview } from "../components/Layouts/ProgressOverview";

export const Layout: React.FC = ({ children }) => {
  return (
    <PageTransition>
      <div className="flex-none p-4">
        <ProgressOverview />
      </div>
      <div className="flex flex-row justify-center">
        <Divider />
      </div>
      <div className="flex-auto flex flex-col justify-around items-center h-full w-full">
        {children}
      </div>
      <div className="flex flex-row justify-center">
        <Divider />
      </div>
      <div className="flex-none p-4">
        <Banner />
      </div>
    </PageTransition>
  );
};
