import React from "react";
import { motion } from "framer-motion";

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
        <motion.img
          key={src}
          className="absolute"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          draggable={false}
          src={src}
          alt={alt}
          initial="hidden"
          animate={visibility() ? "visible" : "hidden"}
        />
      ))}
      {children}
    </div>
  );
};
