"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useFinePointer } from "@/lib/useFinePointer";

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
  const finePointer = useFinePointer();
  const parentControlsHover = isHovered !== undefined;
  const hoverEnabled = finePointer && !reduce;

  return (
    <motion.div
      className={`absolute inset-0 origin-center${className ? ` ${className}` : ""}`}
      initial={false}
      animate={
        parentControlsHover
          ? { scale: active || (hoverEnabled && isHovered) ? hoverScale : 1 }
          : active && finePointer
            ? { scale: hoverScale }
            : undefined
      }
      whileHover={
        parentControlsHover || !hoverEnabled ? undefined : { scale: hoverScale }
      }
      transition={reduce ? { duration: 0 } : IMAGE_HOVER_TRANSITION}
    >
      {children}
    </motion.div>
  );
}
