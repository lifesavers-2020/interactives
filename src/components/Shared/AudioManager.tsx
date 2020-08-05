import React from "react";

const bgm = require("../../assets/audio/bgm.ogg");

export const AudioManager: React.FC = () => {
  return <audio autoPlay src={bgm} />;
};
