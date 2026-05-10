"use client";

import type { ReactNode } from "react";

type ClassName = string | undefined;

/** Section-scale organic fade — bottom or top edge of a block. */
export function LiquidSectionWave({
  position = "bottom",
  className,
}: {
  position?: "bottom" | "top";
  className?: ClassName;
}) {
  const flip = position === "top" ? "rotate-180" : "";
  return (
    <div
      className={`pointer-events-none absolute left-0 right-0 z-[5] h-[min(28vw,200px)] overflow-hidden ${position === "bottom" ? "bottom-0" : "top-0"} ${flip} ${className ?? ""}`}
      aria-hidden
    >
      <div className="liquid-section-wave-body" />
      <div className="liquid-section-wave-spec" />
    </div>
  );
}

/** Tight glossy corner — for cards (structural depth, no flat SVG waves). */
export function LiquidCardCorner({
  position = "bottom-left",
  className,
}: {
  position?: "bottom-left" | "bottom-right" | "top-left" | "top-right";
  className?: ClassName;
}) {
  const pos =
    position === "bottom-left"
      ? "bottom-0 left-0"
      : position === "bottom-right"
        ? "bottom-0 right-0 scale-x-[-1]"
        : position === "top-left"
          ? "top-0 left-0 scale-y-[-1]"
          : "top-0 right-0 scale-[-1]";

  return (
    <div
      className={`pointer-events-none absolute z-[4] h-16 w-16 md:h-20 md:w-20 ${pos} ${className ?? ""}`}
      aria-hidden
    >
      <div className="liquid-card-corner-blob" />
      <div className="liquid-card-corner-gloss" />
    </div>
  );
}

/** Soft volumetric stain for backgrounds (smoke + depth). */
export function LiquidBackgroundStain({
  variant = "red",
  className,
  children,
}: {
  variant?: "red" | "neutral";
  className?: ClassName;
  children?: ReactNode;
}) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`} aria-hidden>
      <div className={variant === "red" ? "liquid-stain-red" : "liquid-stain-neutral"} />
      {children}
    </div>
  );
}
