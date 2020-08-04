import React, { useState, useContext, useEffect } from "react";
import { ClickableImages } from "../components/Interactions/ClickableImages";
import { PopAnimation } from "../components/Animations/PopAnimation";
import { ClickIndicator } from "../components/Shared/ClickIndicator";
import { PageStore } from "../stores/PageStore";

import chairImage from "../assets/imgs/peripheral-blood-donation/chair.png";
import donorImage from "../assets/imgs/peripheral-blood-donation/donor.png";
import chair2Image from "../assets/imgs/peripheral-blood-donation/chair2.png";
import b1Image from "../assets/imgs/peripheral-blood-donation/b1.png";
import b2Image from "../assets/imgs/peripheral-blood-donation/b2.png";
import b3Image from "../assets/imgs/peripheral-blood-donation/b3.png";

export const PeripheralBloodDonation: React.FC = () => {
  const pageStore = useContext(PageStore.context());
  const [count, setCount] = useState(() => (pageStore.isViewedPage() ? 3 : 0));

  useEffect(() => {
    if (count >= 3) pageStore.pushPageLimit();
  }, [count, pageStore]);

  const Donor = (
    <div className="flex justify-center">
      <ClickIndicator visible={() => count < 3}>
        <ClickableImages
          width={250}
          height={306}
          onClick={() => count < 3 && setCount(count + 1)}
          imgs={[
            { src: chairImage },
            { src: donorImage },
            { src: chair2Image },
            { src: b1Image, visibility: () => count > 0 },
            { src: b2Image, visibility: () => count > 1 },
            { src: b3Image, visibility: () => count > 2 },
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
