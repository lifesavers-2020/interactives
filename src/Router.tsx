import React from "react";
import { Route } from "wouter";
import { MatchInFamily } from "./pages/MatchInFamily";

export const Router: React.FC = () => {
  return <Route path="/match-in-family" component={MatchInFamily} />;
};
