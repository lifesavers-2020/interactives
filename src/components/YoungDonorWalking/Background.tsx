import React from "react";
import { motion } from "framer-motion";

export const Background: React.FC = () => {
  const width = 1500;

  return (
    <div style={{ width: "100vw", overflowX: "scroll" }}>
      <div style={{ width }}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: window.innerWidth - width }}
        >
          <img
            src="/assets/imgs/young-donor-walking/tree+road.png"
            alt="background"
          />
        </motion.div>
      </div>
    </div>
  );
};
