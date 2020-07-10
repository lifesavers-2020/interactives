import React from "react";

interface Props {
  xOffset?: number;
  yOffset?: number;
}

export const ClickIndicator: React.FC<Props> = ({
  xOffset = 0,
  yOffset = 0,
}) => {
  return (
    <div className="absolute" style={{ pointerEvents: "none" }}>
      <img
        className="relative"
        width={45}
        src="/assets/imgs/shared/click.gif"
        alt=""
        style={{ left: xOffset, top: yOffset }}
      />
    </div>
  );
};
