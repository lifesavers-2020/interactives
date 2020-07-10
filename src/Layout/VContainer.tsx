import React from "react";

export const VContainer: React.FC = ({ children }) => {
  return <div className="flex flex-col justify-around h-full">{children}</div>;
};
