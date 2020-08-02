import React from "react";

interface Props {
  className?: string;
  horizontal?: boolean;
  left?: string | number;
  top?: string | number;
  visible?: () => boolean;
}

export const SwipeIndicator: React.FC<Props> = ({
  className,
  horizontal,
  left = "15%",
  top = "15%",
  visible = () => true,
  children,
}) => {
  return (
    <div className={`relative ${className}`}>
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
          zIndex: 10,
        }}
        draggable={false}
      />
    </div>
  );
};
