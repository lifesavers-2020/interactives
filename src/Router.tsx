import React, { useState, useContext } from "react";
import { Layout } from "./components/Layouts/Layout";
import { useObserver } from "mobx-react-lite";
import { PageStore } from "./stores/PageStore";
import { Intro } from "./pages/Intro";

export const Router: React.FC = () => {
  const pageStore = useContext(PageStore.context());
  const [isIntro, setIsIntro] = useState(true);
  const [component, setComponent] = useState(
    <Intro
      onIntroEnd={() => {
        setIsIntro(false);
        setComponent(pageStore.currentPage());
      }}
    />
  );
  pageStore.setComponent = setComponent;

  return useObserver(() =>
    isIntro ? <>{component}</> : <Layout>{component}</Layout>
  );
};
