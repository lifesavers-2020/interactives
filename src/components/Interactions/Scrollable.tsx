import React from "react";
import { motion, PanInfo } from "framer-motion";

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
  dragElastic?: number;
  dragMomentum?: boolean;
  onDrag?: (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => void;
  onDragEnd?: (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => void;
}

export const Scrollable: React.FC<Props> = ({
  containerWidth = "100vw",
  imageWidth,
  drag,
  dragConstraints,
  dragElastic = 0.5,
  dragMomentum = true,
  onDrag,
  onDragEnd,
  children,
}) => {
  return (
    <div className="relative">
      <div style={{ width: containerWidth, overflowX: "hidden" }}>
        <div style={{ width: imageWidth }}>
          <motion.div
            drag={drag}
            dragConstraints={dragConstraints}
            onDrag={onDrag}
            onDragEnd={onDragEnd}
            dragElastic={dragElastic}
            dragMomentum={dragMomentum}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
