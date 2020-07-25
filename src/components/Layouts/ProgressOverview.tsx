import React, { useContext } from "react";
import { ProgressBar } from "./ProgressBar";
import { PageChangeButton } from "./PageChangeButton";
import { PageStore } from "../../stores/PageStore";
import { useObserver } from "mobx-react-lite";
import { useLocation } from "wouter";

export const ProgressOverview: React.FC = () => {
  const pageStore = useContext(PageStore.context());
  const [, setLocation] = useLocation();

  return useObserver(() => (
    <div className="flex flex-row items-center">
      <div className="flex-none mx-2">
        <PageChangeButton
          backward
          onClick={() => setLocation(pageStore.previousPage())}
          disabled={!pageStore.canGoPrevious()}
        />
      </div>
      <div className="flex-auto">
        <ProgressBar percentage={pageStore.percentage()} />
      </div>
      <div className="flex-none mx-2">
        <PageChangeButton
          onClick={() => setLocation(pageStore.nextPage())}
          disabled={!pageStore.canGoNext()}
        />
      </div>
    </div>
  ));
};
