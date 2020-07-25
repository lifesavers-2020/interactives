import React, { useState, useContext, useEffect } from "react";
import { ClickableImages } from "../components/Interactions/ClickableImages";
import { PopAnimation } from "../components/Animations/PopAnimation";
import { ClickIndicator } from "../components/Shared/ClickIndicator";
import { PageStore } from "../stores/PageStore";

export const MatchInFamily: React.FC = () => {
  const [clicked, setClicked] = useState<Set<number>>(new Set());
  const pageStore = useContext(PageStore.context());

  useEffect(() => {
    if (clicked.size >= 3) pageStore.pushPageLimit();
  }, [clicked, pageStore]);

  const makePerson = (i: number, src: string, bw: string) => (
    <ClickIndicator
      right={0}
      bottom={0}
      visible={() => !clicked.has(i) && clicked.size < 3}
    >
      <ClickableImages
        className="m-auto"
        width={150}
        height={150}
        imgs={[{ src }, { src: bw, visibility: () => clicked.has(i) }]}
        onClick={() => clicked.size < 3 && setClicked(new Set(clicked).add(i))}
        tappable={true}
        hoverable={true}
      />
    </ClickIndicator>
  );

  const Info = (
    <PopAnimation className="card" visible={() => clicked.size >= 3}>
      Only 25% of people will find the donor in their family.
    </PopAnimation>
  );

  return (
    <div className="vcontainer">
      <div className="grid grid-cols-2 gap-4 my-2">
        {[1, 2, 3, 4].map(i => (
          <React.Fragment key={i}>
            {makePerson(
              i,
              `/assets/imgs/match-in-family/i3-${i}.png`,
              `/assets/imgs/match-in-family/i3-${i}-bw.png`
            )}
          </React.Fragment>
        ))}
      </div>
      {Info}
    </div>
  );
};
