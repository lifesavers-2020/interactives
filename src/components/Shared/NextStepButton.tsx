import React from "react";
import { Link, useLocation } from "wouter";
import { routes } from "../../Router";

const nextRoute = (location: string) => {
  const currentIndex = routes.findIndex(r => r.path === location);
  if (currentIndex === routes.length - 1) return undefined;
  return routes[currentIndex + 1].path;
};

export const NextStepButton: React.FC = () => {
  const [location] = useLocation();
  const to = nextRoute(location);

  return to === undefined ? (
    <></>
  ) : (
    <div className="w-full">
      <Link to={to}>
        <button className="full">Next Step</button>
      </Link>
    </div>
  );
};
