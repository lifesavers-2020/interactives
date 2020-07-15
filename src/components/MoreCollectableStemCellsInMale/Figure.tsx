import React, { useState } from "react";

interface Props {
  src: string;
  bgSrc: string;
  showBg: boolean;
  setShowBg: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Figure: React.FC<Props> = ({ src, bgSrc, showBg, setShowBg }) => {
  return (
    <div style={{ width: "40%" }}>
      <div className="absolute">
        <img
          src={bgSrc}
          alt=""
          style={{ visibility: showBg ? "visible" : "hidden" }}
        />
      </div>
      <div
        onClick={() => setShowBg(true)}
        className="relative"
        style={{ zIndex: 1, bottom: 0 }}
      >
        <img src={src} alt="" />
      </div>
    </div>
  );
};
