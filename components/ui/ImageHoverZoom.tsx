"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const IMAGE_HOVER_TRANSITION = { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const };

type ImageHoverZoomProps = {
  hoverScale?: number;
  active?: boolean;
  isHovered?: boolean;
  className?: string;
  children: ReactNode;
};

export function ImageHoverZoom({
  hoverScale = 1.04,
  active = false,
  isHovered,
  className = "",
  children,
}: ImageHoverZoomProps) {
  const reduce = useReducedMotion() ?? false;
  const parentControlsHover = isHovered !== undefined;

  return (
    <motion.div
      className={`absolute inset-0 origin-center${className ? ` ${className}` : ""}`}
      initial={false}
      animate={
        parentControlsHover
          ? { scale: active || (!reduce && isHovered) ? hoverScale : 1 }
          : active
            ? { scale: hoverScale }
            : undefined
      }
      whileHover={
        parentControlsHover || reduce ? undefined : { scale: hoverScale }
      }
      transition={reduce ? { duration: 0 } : IMAGE_HOVER_TRANSITION}
    >
      {children}
    </motion.div>
  );
}
