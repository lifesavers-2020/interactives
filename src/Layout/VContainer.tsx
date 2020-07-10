import React from "react";

export const VContainer: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col justify-around items-center h-full">
      {children}
    </div>
  );
};
