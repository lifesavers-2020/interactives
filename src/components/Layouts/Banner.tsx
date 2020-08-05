import React from "react";
import { motion } from "framer-motion";

import logoImage from "../../assets/imgs/shared/cbs-logo.svg";

export const Banner: React.FC = () => {
  const width = 140;
  return (
    <div className="flex flex-row justify-around items-center w-full">
      <a
        target="_blank"
        href="https://www.blood.ca/en/stemcells/donating-stemcells/stemcell-eligibility-and-registration"
        rel="noopener noreferrer"
      >
        <img width={width} src={logoImage} alt="Logo" />
      </a>
      <a
        target="_blank"
        href="https://www.blood.ca/en/stemcells/donating-stemcells/stemcell-eligibility-and-registration"
        rel="noopener noreferrer"
      >
        <motion.button className="register-button" whileTap={{ scale: 0.9 }}>
          Join the Registry
        </motion.button>
      </a>
    </div>
  );
};
