import React from "react";
import { Link, useLocation } from "wouter";
import { routes } from "../../Router";

const nextRoute = (location: string) => {
  const currentIndex = routes.findIndex(r => r.path === location);
  return routes[currentIndex + 1].path;
};

export const NextStepButton: React.FC = () => {
  const [location] = useLocation();
  const to = nextRoute(location);

  return (
    <div className="p-4 w-full">
      <Link to={to}>
        <button className="full">Next Step</button>
      </Link>
    </div>
  );
};
