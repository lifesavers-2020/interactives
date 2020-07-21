import React from "react";
import { Route, Redirect, Switch } from "wouter";
import { MatchInFamily } from "./pages/MatchInFamily";
import { CellDifferentiation } from "./pages/CellDifferentiation";
import { StemCellTreatment } from "./pages/StemCellTreatment";
import { YoungDonorWalking } from "./pages/YoungDonorWalking";
import { MoreCollectableStemCellsInMale } from "./pages/MoreCollectableStemCellsInMale";
import { PeripheralBloodDonation } from "./pages/PeripheralBloodDonation";
import { FindingMatchTakesTime } from "./pages/FindingMatchTakesTime";
import { RegisterSteps } from "./pages/RegisterSteps";
import { FindMatchInFamily } from "./pages/FindMatchInFamily";
import { FindMatchInCrowd } from "./pages/FindMatchInCrowd";

interface RouteDefinition {
  path: string;
  component: React.FC<any>;
}

export const routes: RouteDefinition[] = [
  { path: "/", component: () => <Redirect to="/cell-differentiation" /> },
  { path: "/cell-differentiation", component: CellDifferentiation },
  { path: "/stem-cell-treatment", component: StemCellTreatment },
  { path: "/young-donor", component: YoungDonorWalking },
  { path: "/match-in-family", component: MatchInFamily },
  { path: "/find-match-in-family", component: FindMatchInFamily },
  { path: "/find-match-in-crowd", component: FindMatchInCrowd },
  {
    path: "/more-collectable-stem-cells-in-male",
    component: MoreCollectableStemCellsInMale,
  },
  { path: "/peripheral-blood-donation", component: PeripheralBloodDonation },
  { path: "/find-match-takes-time", component: FindingMatchTakesTime },
  { path: "/register-steps", component: RegisterSteps },
];

export const Router: React.FC = () => {
  return (
    <Switch>
      {routes.map(({ path, component }) => (
        <Route path={path} component={component} key={path} />
      ))}
    </Switch>
  );
};
