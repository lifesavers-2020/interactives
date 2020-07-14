import React from "react";
import { Link } from "wouter";

interface Props {
  to: string;
}

export const NextStepButton: React.FC<Props> = ({ to }) => {
  return (
    <div className="p-4 w-full">
      <Link to={to}>
        <button className="w-full sm:w-64 mx-auto bg-white hover:bg-gray-100 py-3 text-gray-800 border border-gray-400 font-semibold rounded shadow">
          Next Step
        </button>
      </Link>
    </div>
  );
};
