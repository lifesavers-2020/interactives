import React from "react";
import { Link } from "wouter";

interface Props {
  to: string;
}

export const NextStepButton: React.FC<Props> = ({ to }) => {
  return (
    <div className="p-4 w-full">
      <Link to={to}>
        <button className="full">Next Step</button>
      </Link>
    </div>
  );
};
