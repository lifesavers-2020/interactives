import React, { useContext, useState } from "react";
import { ProgressBar } from "./ProgressBar";
import { PageChangeButton } from "./PageChangeButton";
import { PageStore } from "../../stores/PageStore";
import { useObserver } from "mobx-react-lite";
import { ClickIndicator } from "../Shared/ClickIndicator";

export const ProgressOverview: React.FC = () => {
  const pageStore = useContext(PageStore.context());

  /* Teach how to go to the next page */
  const [clickedNextPage, setClickedNextPage] = useState(false);

  return useObserver(() => (
    <ClickIndicator
      right={-10}
      bottom={-30}
      width={40}
      visible={() =>
        pageStore.pageLimit - pageStore.page === 1 && !clickedNextPage
      }
    >
      <div className="flex flex-row items-center">
        <div className="flex-none mx-2">
          <PageChangeButton
            backward
            onClick={() => pageStore.previousPage()}
            disabled={!pageStore.canGoPrevious()}
          />
        </div>
        <div className="flex-auto">
          <ProgressBar percentage={pageStore.percentage()} />
        </div>
        <div className="flex-none mx-2">
          <PageChangeButton
            onClick={() => {
              pageStore.nextPage();
              setClickedNextPage(true);
            }}
            disabled={!pageStore.canGoNext()}
          />
        </div>
      </div>
    </ClickIndicator>
  ));
};
