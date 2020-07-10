import React from "react";
import { Route, Redirect } from "wouter";
import { MatchInFamily } from "./pages/MatchInFamily";
import { CellDifferentiation } from "./pages/CellDifferentiation";
import { StemCellTreatment } from "./pages/StemCellTreatment";

export const Router: React.FC = () => {
  return (
    <>
      <Route
        path="/"
        component={() => <Redirect to="/cell-differentiation" />}
      />
      <Route path="/cell-differentiation" component={CellDifferentiation} />
      <Route path="/stem-cell-treatment" component={StemCellTreatment} />
      <Route path="/match-in-family" component={MatchInFamily} />
    </>
  );
};
