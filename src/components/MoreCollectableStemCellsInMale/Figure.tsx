import React from "react";

interface Props {
  src: string;
  bgSrc: string;
  showBg: boolean;
  setShowBg: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Figure: React.FC<Props> = ({ src, bgSrc, showBg, setShowBg }) => {
  return (
    <div style={{ width: "40%" }}>
      <img
        className="absolute"
        src={bgSrc}
        alt=""
        style={{
          visibility: showBg ? "visible" : "hidden",
          width: "40%",
          maxWidth: 220,
        }}
      />
      <img onClick={() => setShowBg(true)} src={src} alt="" />
    </div>
  );
};
