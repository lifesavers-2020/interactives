import React from "react";
import { motion } from "framer-motion";

interface ClickImage {
  src: string;
  alt?: string;
  visibility?: () => boolean;
  style?: React.CSSProperties;
}

interface Props {
  width?: number | string;
  height?: number | string;
  onClick?: () => void;
  imgs?: ClickImage[];
  className?: string;
  style?: React.CSSProperties;
}

export const ClickableImages: React.FC<Props> = ({
  width,
  height,
  onClick,
  imgs = [],
  className,
  style,
  children,
}) => {
  return (
    <div
      className={"relative w-full " + className}
      onClick={onClick}
      style={{ width, height, ...style }}
    >
      {imgs.map(({ src, alt, style, visibility = () => true }) => (
        <motion.img
          key={src}
          className="absolute"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          draggable={false}
          src={src}
          alt={alt}
          style={style}
          initial="hidden"
          animate={visibility() ? "visible" : "hidden"}
        />
      ))}
      {children}
    </div>
  );
};
