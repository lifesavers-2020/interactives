import React from "react";
import { motion } from "framer-motion";

export const Banner: React.FC = () => {
  const width = 120;
  return (
    <div className="flex flex-row justify-around items-center w-full">
      <img width={width} src="/assets/imgs/shared/cbs-logo.png" alt="Logo" />
      <a
        target="_blank"
        href="https://www.blood.ca/en"
        rel="noopener noreferrer"
        style={{ width }}
      >
        <motion.button
          className="w-full register-button"
          whileTap={{ scale: 0.9 }}
        >
          Register Now
        </motion.button>
      </a>
    </div>
  );
};
