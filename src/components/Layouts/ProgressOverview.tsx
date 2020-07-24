import React from "react";
import { ProgressBar } from "./ProgressBar";
import { routes } from "../../Router";
import { useLocation } from "wouter";
import { PageChangeButton } from "./PageChangeButton";

export const ProgressOverview: React.FC = () => {
  const [location] = useLocation();

  const currentIndex = () => {
    return routes.findIndex(r => r.path === location);
  };

  const calcPercentage = () => {
    return (currentIndex() / (routes.length - 1)) * 100;
  };

  const nextRoute = () => {
    const i = currentIndex();
    if (i === routes.length - 1) return undefined;
    return routes[i + 1].path;
  };

  const previousRoute = () => {
    const i = currentIndex();
    if (i <= 1) return undefined;
    return routes[i - 1].path;
  };

  return (
    <div className="flex flex-row items-center">
      <div className="flex-none mx-2">
        <PageChangeButton
          backward
          to={previousRoute() || ""}
          disabled={previousRoute() === undefined}
        />
      </div>
      <div className="flex-auto">
        <ProgressBar percentage={calcPercentage()} />
      </div>
      <div className="flex-none mx-2">
        <PageChangeButton
          to={nextRoute() || ""}
          disabled={nextRoute() === undefined}
        />
      </div>
    </div>
  );
};
