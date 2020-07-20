import React from "react";
import { motion, MotionStyle } from "framer-motion";

interface Props {
  className?: string;
  visible?: () => boolean;
  style?: MotionStyle;
}

export const FadeAnimation: React.FC<Props> = ({
  className,
  visible = () => true,
  style,
  children,
}) => {
  return (
    <motion.div
      className={className}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      initial="hidden"
      animate={visible() ? "visible" : "hidden"}
      style={style}
    >
      {children}
    </motion.div>
  );
};
