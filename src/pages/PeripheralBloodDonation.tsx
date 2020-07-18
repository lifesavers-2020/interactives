import React, { useState } from "react";
import { VContainer } from "../Layout/VContainer";
import { NextStepButton } from "../components/Share/NextStepButton";
import { ClickableImages } from "../components/Interactions/ClickableImages";

export const PeripheralBloodDonation: React.FC = () => {
  const [count, setCount] = useState(0);

  const Donor = (
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
    />
  );

  return (
    <VContainer>
      <div className="p-4">
        {Donor}
        <div
          className="card"
          style={{ visibility: count > 2 ? "visible" : "hidden" }}
        >
          80% of stem cell transplants are done through peripheral blood
          donation.
        </div>
      </div>
      <NextStepButton to="/find-match-takes-time" />
    </VContainer>
  );
};
