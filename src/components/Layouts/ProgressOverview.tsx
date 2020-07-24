import React from "react";
import { ProgressBar } from "./ProgressBar";
import { routes } from "../../Router";
import { useLocation } from "wouter";

export const ProgressOverview: React.FC = () => {
  const [location] = useLocation();

  const calcPercentage = () => {
    const currentIndex = routes.findIndex(r => r.path === location);
    return (currentIndex / routes.length) * 100;
  };

  return (
    <div>
      <ProgressBar percentage={calcPercentage()} />
    </div>
  );
};
