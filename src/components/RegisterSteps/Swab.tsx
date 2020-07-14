import React from "react";
import { motion, useMotionValue } from "framer-motion";

export const Swab: React.FC = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <div>
      <div>
        <img src="/assets/imgs/register-steps/swab/bg.png" />
      </div>
      <div
        className="relative"
        style={{ zIndex: -1, width: 180, top: -180, left: 16 }}
      >
        <img src="/assets/imgs/register-steps/swab/head.png" />
      </div>
      <motion.div
        drag
        dragConstraints={{ top: -8, bottom: 5, left: -5, right: 5 }}
        dragElastic={0.01}
        dragMomentum={false}
        style={{ x, y }}
      >
        <div className="relative" style={{ width: 153, top: -290, left: 0 }}>
          <img
            draggable={false}
            src="/assets/imgs/register-steps/swab/hand.png"
          />
        </div>
      </motion.div>
    </div>
  );
};
