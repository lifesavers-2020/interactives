import React from "react";

interface Props {
  disabled?: boolean;
  backward?: boolean;
  onClick?: () => void;
}

export const PageChangeButton: React.FC<Props> = ({
  disabled = false,
  backward = false,
  onClick = () => {},
}) => {
  return (
    <img
      onClick={onClick}
      src={`/assets/imgs/shared/arrow-right.png`}
      alt=""
      width={24}
      style={{
        opacity: disabled ? 0.2 : undefined,
        transform: `scaleX(${backward ? "-1" : "1"})`,
      }}
    />
  );
};
