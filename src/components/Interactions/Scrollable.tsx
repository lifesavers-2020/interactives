import React from "react";
import { motion } from "framer-motion";

interface Props {
  containerWidth?: number | string;
  imageWidth?: number;
  drag?: boolean | "x" | "y";
  dragConstraints?:
    | false
    | {
        top?: number | undefined;
        right?: number | undefined;
        bottom?: number | undefined;
        left?: number | undefined;
      }
    | React.RefObject<Element>;
}

export const Scrollable: React.FC<Props> = ({
  containerWidth = "100vw",
  imageWidth,
  drag,
  dragConstraints,
  children,
}) => {
  return (
    <div className="relative">
      <div style={{ width: containerWidth, overflowX: "hidden" }}>
        <div style={{ width: imageWidth }}>
          <motion.div drag={drag} dragConstraints={dragConstraints}>
            {children}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
