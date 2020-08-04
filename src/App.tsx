import React from "react";
import { Router } from "./Router";
import { Layout } from "./components/Layouts/Layout";

export const App: React.FC = () => {
  return (
    <Layout>
      <Router />
    </Layout>
  );
};
