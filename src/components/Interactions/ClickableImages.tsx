import React from "react";
import { motion, TargetAndTransition } from "framer-motion";

interface ClickImage {
  src: string;
  alt?: string;
  visibility?: () => boolean;
  style?: React.CSSProperties;
  hoverable?: boolean;
  tappable?: boolean;
}

interface Props {
  width?: number | string;
  height?: number | string;
  onClick?: () => void;
  imgs?: ClickImage[];
  className?: string;
  style?: React.CSSProperties;
  hoverable?: boolean;
  tappable?: boolean;
}

const WHILE_HOVER: TargetAndTransition = { scale: 1.1 };
const WHILE_TAP: TargetAndTransition = { scale: 0.9 };

export const ClickableImages: React.FC<Props> = ({
  width,
  height,
  onClick,
  imgs = [],
  className,
  style,
  hoverable = false,
  tappable = false,
  children,
}) => {
  return (
    <motion.div
      className={"relative w-full " + className}
      onClick={onClick}
      style={{ width, height, ...style }}
      whileHover={hoverable ? WHILE_HOVER : undefined}
      whileTap={tappable ? WHILE_TAP : undefined}
    >
      {imgs.map(
        ({
          src,
          alt,
          style,
          hoverable = false,
          tappable = false,
          visibility = () => true,
        }) => (
          <motion.img
            key={src}
            className="absolute"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            draggable={false}
            src={src}
            alt={alt}
            style={style}
            initial="hidden"
            whileHover={hoverable ? WHILE_HOVER : undefined}
            whileTap={tappable ? WHILE_TAP : undefined}
            animate={visibility() ? "visible" : "hidden"}
          />
        )
      )}
      {children}
    </motion.div>
  );
};
