import React from "react";

interface ClickImage {
  src: string;
  alt?: string;
  visibility?: () => boolean;
}

interface Props {
  width?: number | string;
  height?: number | string;
  onClick?: () => void;
  imgs?: ClickImage[];
}

export const ClickEvent: React.FC<Props> = ({
  width,
  height,
  onClick,
  imgs = [],
  children,
}) => {
  return (
    <div
      className="relative w-full"
      onClick={onClick}
      style={{ width, height }}
    >
      {imgs.map(({ src, alt, visibility = () => true }) => (
        <img
          className="absolute"
          src={src}
          alt={alt}
          style={{ visibility: visibility() ? "visible" : "hidden" }}
        />
      ))}
      {children}
    </div>
  );
};
