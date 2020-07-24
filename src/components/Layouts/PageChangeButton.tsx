import React from "react";
import { Link } from "wouter";

interface Props {
  to: string;
  disabled?: boolean;
  backward?: boolean;
}

export const PageChangeButton: React.FC<Props> = ({
  to,
  disabled = false,
  backward = false,
}) => {
  const Arrow = (
    <img
      src={`/assets/imgs/shared/arrow-${
        backward ? "left" : "right"
      }-circle.svg`}
      alt=""
      style={{ opacity: disabled ? 0.2 : undefined }}
    />
  );
  return <>{disabled ? Arrow : <Link to={to}>{Arrow}</Link>}</>;
};
