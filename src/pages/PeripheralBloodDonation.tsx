import React, { useState, useContext, useEffect } from "react";
import { ClickableImages } from "../components/Interactions/ClickableImages";
import { PopAnimation } from "../components/Animations/PopAnimation";
import { ClickIndicator } from "../components/Shared/ClickIndicator";
import { PageStore } from "../stores/PageStore";

export const PeripheralBloodDonation: React.FC = () => {
  const [count, setCount] = useState(0);
  const pageStore = useContext(PageStore.context());

  useEffect(() => {
    if (count >= 3) pageStore.pushPageLimit();
  }, [count, pageStore]);

  const Donor = (
    <div className="flex justify-center">
      <ClickIndicator visible={() => count < 3}>
        <ClickableImages
          width={300}
          height={367.19}
          onClick={() => count < 3 && setCount(count + 1)}
          imgs={[
            { src: "/assets/imgs/peripheral-blood-donation/chair.png" },
            { src: "/assets/imgs/peripheral-blood-donation/donor.png" },
            { src: "/assets/imgs/peripheral-blood-donation/chair2.png" },
            {
              src: "/assets/imgs/peripheral-blood-donation/b1.png",
              visibility: () => count > 0,
            },
            {
              src: "/assets/imgs/peripheral-blood-donation/b2.png",
              visibility: () => count > 1,
            },
            {
              src: "/assets/imgs/peripheral-blood-donation/b3.png",
              visibility: () => count > 2,
            },
          ]}
          hoverable={true}
          tappable={true}
        />
      </ClickIndicator>
    </div>
  );

  const Info = (
    <PopAnimation className="card" visible={() => count > 2}>
      80% of stem cell transplants are done through peripheral blood donation.
    </PopAnimation>
  );

  return (
    <div className="vcontainer">
      {Donor}
      {Info}
    </div>
  );
};
