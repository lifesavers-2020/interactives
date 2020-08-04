import React from "react";
import { Route, Switch, useLocation } from "wouter";
import { pages } from "./stores/PageStore";

export const Router: React.FC = () => {
  const [location] = useLocation();

  return (
    <Switch location={location} key={location}>
      {pages.map(({ path, component }) => (
        <Route path={path} component={component} key={path} />
      ))}
    </Switch>
  );
};
