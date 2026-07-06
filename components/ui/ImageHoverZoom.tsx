"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useFinePointer } from "@/lib/useFinePointer";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";

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
  const reduce = useReducedMotionSafe();
  const finePointer = useFinePointer();
  const parentControlsHover = isHovered !== undefined;
  const hoverEnabled = finePointer && !reduce;
  const transition = reduce ? { duration: 0 } : IMAGE_HOVER_TRANSITION;

  const restScale =
    parentControlsHover
      ? active || (hoverEnabled && isHovered)
        ? hoverScale
        : 1
      : active && finePointer
        ? hoverScale
        : 1;

  return (
    <motion.div
      className={`absolute inset-0 origin-center${className ? ` ${className}` : ""}`}
      initial={false}
      animate={{ scale: restScale }}
      whileHover={
        parentControlsHover || !hoverEnabled ? undefined : { scale: hoverScale }
      }
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
