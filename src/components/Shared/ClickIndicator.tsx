import React from "react";

interface Props {
  right?: string | number;
  bottom?: string | number;
  visible?: () => boolean;
}

export const ClickIndicator: React.FC<Props> = ({
  right = "15%",
  bottom = "15%",
  visible = () => true,
  children,
}) => {
  return (
    <div className="relative">
      {children}
      <img
        className="absolute"
        width={50}
        src="/assets/imgs/shared/click.gif"
        alt=""
        style={{
          width: 50,
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
