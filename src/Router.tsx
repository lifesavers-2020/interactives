import React, { useContext } from "react";
import { Route, Switch, useLocation } from "wouter";
import { pages, PageStore } from "./stores/PageStore";
import { Layout } from "./components/Layouts/Layout";
import { Intro } from "./pages/Intro";
import { useObserver } from "mobx-react-lite";

export const Router: React.FC = () => {
  const [location] = useLocation();
  const pageStore = useContext(PageStore.context());

  return useObserver(() => (
    <>
      {pageStore.afterIntro ||
      pageStore.pageLimit > 0 ||
      window.location.pathname !== "/" ? (
        <Layout>
          <Switch location={location} key={location}>
            {pages.map(({ path, component }) => (
              <Route path={path} component={component} key={path} />
            ))}
          </Switch>
        </Layout>
      ) : (
        <Route path="/" component={Intro} />
      )}
    </>
  ));
};
