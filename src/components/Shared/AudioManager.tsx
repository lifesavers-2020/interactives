import React, { useEffect } from "react";

const bgm = require("../../assets/audio/bgm.ogg");

const audio = new Audio(bgm);

export const AudioManager: React.FC = () => {
  useEffect(() => {
    document.body.onfocus = () => {
      audio.loop = true;
      audio.play();
    };
    document.body.onblur = () => {
      audio.pause();
    };
  }, []);

  return <></>;
};
