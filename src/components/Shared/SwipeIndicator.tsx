import React from "react";

interface Props {
  horizontal?: boolean;
  left?: string | number;
  top?: string | number;
  visible?: () => boolean;
}

export const SwipeIndicator: React.FC<Props> = ({
  horizontal,
  left = "15%",
  top = "15%",
  visible = () => true,
  children,
}) => {
  return (
    <div className="relative">
      {children}
      <img
        className="absolute"
        width={50}
        src="/assets/imgs/shared/swipe.gif"
        alt=""
        style={{
          width: 50,
          left,
          top,
          pointerEvents: "none",
          visibility: visible() ? "visible" : "hidden",
          transform: horizontal ? "rotate(90deg)" : undefined,
        }}
        draggable={false}
      />
    </div>
  );
};
