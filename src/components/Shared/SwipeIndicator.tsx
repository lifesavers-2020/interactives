import React from "react";

import swipeImage from "../../assets/imgs/shared/swipe.gif";

interface Props {
  className?: string;
  horizontal?: boolean;
  left?: string | number;
  top?: string | number;
  style?: React.CSSProperties;
  visible?: () => boolean;
}

export const SwipeIndicator: React.FC<Props> = ({
  className,
  style,
  horizontal,
  left = "15%",
  top = "15%",
  visible = () => true,
  children,
}) => {
  return (
    <div className={`relative ${className}`} style={style}>
      {children}
      <img
        className="absolute"
        width={50}
        src={swipeImage}
        alt=""
        style={{
          width: 50,
          left,
          top,
          pointerEvents: "none",
          visibility: visible() ? "visible" : "hidden",
          transform: horizontal ? "rotate(90deg)" : undefined,
          zIndex: 10,
        }}
        draggable={false}
      />
    </div>
  );
};
