import React, { useState } from "react";
import { ClickIndicator } from "../Share/ClickIndicator";

interface Props {
  src: string;
  name: string;
  info: string;
  reverse?: boolean;
}

export const Cell: React.FC<Props> = ({ src, name, info, reverse }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="flex flex-col justify-around items-center">
      <div
        className={`flex flex-row${
          reverse && "-reverse"
        } justify-between my-1 items-center`}
        onClick={() => setShowInfo(true)}
      >
        <div className="w-1/2 flex flex-row justify-center items-center">
          <img src={src} alt="" />
          <ClickIndicator xOffset={45} yOffset={45} />
        </div>
        <h2 className="text-center my-2 text-xl">{name}</h2>
      </div>
      <div
        className="rounded shadow border border-gray-400 w-full p-4 my-2"
        style={{ visibility: showInfo ? "visible" : "hidden" }}
      >
        {info}
      </div>
    </div>
  );
};
