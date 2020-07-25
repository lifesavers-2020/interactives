import React, { useState } from "react";
import { ClickableImages } from "../components/Interactions/ClickableImages";
import { PopAnimation } from "../components/Animations/PopAnimation";
import { ClickIndicator } from "../components/Shared/ClickIndicator";

export const MatchInFamily: React.FC = () => {
  const [clicked, setClicked] = useState<Set<number>>(new Set());

  const makePerson = (i: number, src: string, bw: string) => (
    <ClickIndicator
      right={0}
      bottom={0}
      visible={() => !clicked.has(i) && clicked.size < 3}
    >
      <ClickableImages
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
    <div className="p-4">
      <PopAnimation className="card" visible={() => clicked.size >= 3}>
        Only 25% of people will find the donor in their family.
      </PopAnimation>
    </div>
  );

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
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
    </>
  );
};
