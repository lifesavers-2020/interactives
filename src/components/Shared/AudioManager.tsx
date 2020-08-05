import React from "react";

const bgm = require("../../assets/audio/bgm.ogg");

const audio = new Audio(bgm);

export const AudioManager: React.FC = () => {
  audio.loop = true;
  audio.play();
  return <></>;
};
