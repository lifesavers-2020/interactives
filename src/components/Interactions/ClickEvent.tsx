import React from "react";

interface ClickImage {
  src: string;
  alt?: string;
  visibility?: () => boolean;
}

interface Props {
  onClick?: () => void;
  imgs?: ClickImage[];
}

export const ClickEvent: React.FC<Props> = ({ onClick, imgs = [] }) => {
  return (
    <div className="relative w-full" onClick={onClick}>
      {imgs.map(({ src, alt, visibility = () => true }) => (
        <img
          className="absolute"
          src={src}
          alt={alt}
          style={{ visibility: visibility() ? "visible" : "hidden" }}
        />
      ))}
    </div>
  );
};
