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
  style?: React.CSSProperties;
}

export const ClickableImages: React.FC<Props> = ({
  width,
  height,
  onClick,
  imgs = [],
  style,
  children,
}) => {
  return (
    <div
      className="relative w-full"
      onClick={onClick}
      style={{ width, height, ...style }}
    >
      {imgs.map(({ src, alt, visibility = () => true }) => (
        <img
          key={src}
          className="absolute"
          draggable={false}
          src={src}
          alt={alt}
          style={{ visibility: visibility() ? "visible" : "hidden" }}
        />
      ))}
      {children}
    </div>
  );
};
