import React, { useEffect } from "react";

const bgm = require("../../assets/audio/bgm.ogg");

export const AudioManager: React.FC = () => {
  const audio = new Audio(bgm);

  useEffect(() => {
    document.body.onfocus = () => {
      if (!audio) return;
      audio.loop = true;
      audio.volume = 0.3;

      setTimeout(() => {
        audio.play();
      }, 200);
    };
    document.body.onblur = () => {
      if (!audio) return;
      audio.pause();
    };
  }, [audio]);

  return <></>;
};
