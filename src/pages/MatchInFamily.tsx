import React, { useState } from "react";
import { Layout } from "../Layout/Layout";
import { ClickableImages } from "../components/Interactions/ClickableImages";
import { PopAnimation } from "../components/Animations/PopAnimation";

export const MatchInFamily: React.FC = () => {
  const [clicked, setClicked] = useState<Set<number>>(new Set());

  const makePerson = (i: number, src: string, bw: string) => (
    <ClickableImages
      width={150}
      height={150}
      imgs={[{ src }, { src: bw, visibility: () => clicked.has(i) }]}
      onClick={() => clicked.size < 3 && setClicked(new Set(clicked).add(i))}
      tappable={true}
      hoverable={true}
    />
  );

  const Info = (
    <div className="p-4">
      <PopAnimation className="card" visible={() => clicked.size >= 3}>
        Only 25% of people will find the donor in their family.
      </PopAnimation>
    </div>
  );

  return (
    <Layout>
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
    </Layout>
  );
};
