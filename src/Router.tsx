import React from "react";
import { Route, Redirect } from "wouter";
import { MatchInFamily } from "./pages/MatchInFamily";
import { CellDifferentiation } from "./pages/CellDifferentiation";
import { StemCellTreatment } from "./pages/StemCellTreatment";
import { YoungDonorWalking } from "./pages/YoungDonorWalking";
import { MoreCollectableStemCellsInMale } from "./pages/MoreCollectableStemCellsInMale";
import { PeripheralBloodDonation } from "./pages/PeripheralBloodDonation";
import { FindingMatchTakesTime } from "./pages/FindingMatchTakesTime";
import { RegisterSteps } from "./pages/RegisterSteps";
import { FindMatchInFamily } from "./pages/FindMatchInFamily";

export const Router: React.FC = () => {
  return (
    <>
      <Route
        path="/"
        component={() => <Redirect to="/cell-differentiation" />}
      />
      <Route path="/cell-differentiation" component={CellDifferentiation} />
      <Route path="/stem-cell-treatment" component={StemCellTreatment} />
      <Route path="/young-donor" component={YoungDonorWalking} />
      <Route path="/match-in-family" component={MatchInFamily} />
      <Route path="/find-match-in-family" component={FindMatchInFamily} />
      <Route
        path="/more-collectable-stem-cells-in-male"
        component={MoreCollectableStemCellsInMale}
      />
      <Route
        path="/peripheral-blood-donation"
        component={PeripheralBloodDonation}
      />
      <Route path="/find-match-takes-time" component={FindingMatchTakesTime} />
      <Route path="/register-steps" component={RegisterSteps} />
    </>
  );
};
