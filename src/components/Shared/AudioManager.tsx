import React, { useEffect } from "react";

const bgm = require("../../assets/audio/bgm.ogg");

export const AudioManager: React.FC = () => {
  const audio = new Audio(bgm);

  useEffect(() => {
    document.body.onfocus = () => {
      audio.loop = true;
      audio.volume = 0.3;
      audio.play();
    };
    document.body.onblur = () => {
      audio.pause();
    };
  }, [audio]);

  return <></>;
};
