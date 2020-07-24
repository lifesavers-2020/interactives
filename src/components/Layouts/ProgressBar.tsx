import React from "react";

interface Props {
  percentage: number;
}

const ProgressBackground = `linear-gradient(86deg, rgba(77,77,77,1) 0%, rgba(140,140,140,1) 100%)`;
const ProgressColor = `linear-gradient(90deg, rgba(237,28,36,1) 0%, rgba(81,144,139,1) 54%, rgba(84,195,187,1) 100%)`;

export const ProgressBar: React.FC<Props> = ({ percentage }) => {
  const padding = 2;
  const height = 11;
  const dotDim = 22;

  return (
    <div className="relative flex items-center" style={{ height }}>
      <div
        className="absolute w-full h-full rounded-full"
        style={{ background: ProgressBackground, padding }}
      >
        <div
          className="h-full rounded-full"
          style={{ width: `${percentage}%`, background: ProgressColor }}
        />
      </div>
      <div
        className="relative bg-white"
        style={{
          borderWidth: 3,
          borderColor: "#54C3BB",
          height: dotDim,
          width: dotDim,
          borderRadius: "50%",
          left: `calc(${percentage}% - ${dotDim / 2}px)`,
        }}
      />
    </div>
  );
};
