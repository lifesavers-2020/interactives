import React from "react";

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
        <button className="w-full">Register</button>
      </a>
    </div>
  );
};
