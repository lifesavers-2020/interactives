import React, { useState } from "react";

export const PeripheralBloodDonor: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div
      className="relative w-full"
      onClick={() => count < 3 && setCount(count + 1)}
    >
      <img
        className="absolute"
        src="/assets/imgs/peripheral-blood-donation/chair.png"
        alt=""
      />
      <img
        className="absolute"
        src="/assets/imgs/peripheral-blood-donation/donor.png"
        alt=""
      />
      <img
        className="absolute"
        src="/assets/imgs/peripheral-blood-donation/chair2.png"
        alt=""
      />
      <img
        className="absolute"
        src="/assets/imgs/peripheral-blood-donation/b1.png"
        alt=""
        style={{ visibility: count > 0 ? "visible" : "hidden" }}
      />
      <img
        className="absolute"
        src="/assets/imgs/peripheral-blood-donation/b2.png"
        alt=""
        style={{ visibility: count > 1 ? "visible" : "hidden" }}
      />
      <img
        className="absolute"
        src="/assets/imgs/peripheral-blood-donation/b3.png"
        alt=""
        style={{ visibility: count > 2 ? "visible" : "hidden" }}
      />
    </div>
  );
};
