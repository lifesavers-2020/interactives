import React from "react";

import clickImage from "../../assets/imgs/shared/click.gif";

interface Props {
  right?: string | number;
  bottom?: string | number;
  width?: number;
  visible?: () => boolean;
}

export const ClickIndicator: React.FC<Props> = ({
  right = "15%",
  bottom = "15%",
  width = 50,
  visible = () => true,
  children,
}) => {
  return (
    <div className="relative">
      {children}
      <img
        className="absolute"
        width={width}
        src={clickImage}
        alt=""
        style={{
          width,
          right,
          bottom,
          pointerEvents: "none",
          visibility: visible() ? "visible" : "hidden",
        }}
        draggable={false}
      />
    </div>
  );
};
