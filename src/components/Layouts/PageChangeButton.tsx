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
      src={`/assets/imgs/shared/arrow-${
        backward ? "left" : "right"
      }-circle.svg`}
      alt=""
      style={{ opacity: disabled ? 0.2 : undefined }}
    />
  );
};
