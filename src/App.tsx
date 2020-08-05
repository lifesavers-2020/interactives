import React from "react";
import { Router } from "./Router";
import { AudioManager } from "./components/Shared/AudioManager";

export const App: React.FC = () => {
  return (
    <>
      <Router />
      <AudioManager />
    </>
  );
};
