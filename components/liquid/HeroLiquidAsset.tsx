"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const HERO_LIQUID_SRC = "/symbiote/hero-liquid-new-main.png";

const LIQUID_MAIN = "/symbiote/hero-liquid-new-main.png";
const LIQUID_HIGHLIGHTS = "/symbiote/hero-liquid-cew-highlights.png";

const IMG_W = 1024;
const IMG_H = 682;

/** Fade PNG canvas edges — softens asset bounds without animating a dark layer */
const MAIN_EDGE_MASK: CSSProperties = {
  WebkitMaskImage:
    "radial-gradient(ellipse 92% 86% at 74% 82%, black 48%, transparent 82%)",
  maskImage:
    "radial-gradient(ellipse 92% 86% at 74% 82%, black 48%, transparent 82%)",
};

type Variant = "desktop" | "mobile";

function liquidGroupStyle(variant: Variant): CSSProperties {
  if (variant === "desktop") {
    return {
      position: "absolute",
      right: "-4vw",
      bottom: "-7vh",
      width: "62vw",
      height: "auto",
      overflow: "visible",
      pointerEvents: "none",
      background: "transparent",
      backgroundColor: "transparent",
    };
  }
  return {
    position: "absolute",
    right: "-58vw",
    bottom: "6vh",
    width: "145vw",
    height: "auto",
    overflow: "visible",
    pointerEvents: "none",
    background: "transparent",
    backgroundColor: "transparent",
    opacity: 0.9,
  };
}

const ORIGIN: CSSProperties = {
  transformOrigin: "100% 100%",
};

function LiquidStackVariant({ variant }: { variant: Variant }) {
  const desktop = variant === "desktop";
  const visibility = desktop ? "hidden lg:block" : "lg:hidden";
  const sizes = desktop ? "62vw" : "145vw";
  const box = liquidGroupStyle(variant);

  const imgBase =
    "!m-0 block h-auto w-full bg-transparent object-contain object-right-bottom p-0";

  return (
    <div
      className={`pointer-events-none z-[3] select-none overflow-visible bg-transparent ${visibility}`}
      style={box}
    >
      <div
        className="relative h-auto w-full overflow-visible bg-transparent"
        style={{ backgroundColor: "transparent" }}
      >
        <motion.div
          className="relative z-[4] overflow-visible bg-transparent"
          style={{ ...ORIGIN, backgroundColor: "transparent" }}
          animate={{
            x: [0, -8, 0],
            y: [0, 5, 0],
            scale: [1, 1.015, 1],
            opacity: [0.92, 1, 0.92],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="relative bg-transparent" style={MAIN_EDGE_MASK}>
            <Image
              src={LIQUID_MAIN}
              alt=""
              width={IMG_W}
              height={IMG_H}
              sizes={sizes}
              priority={desktop}
              className={`${imgBase} contrast-[1.08] brightness-[1.06]`}
            />
          </div>
        </motion.div>

        <motion.div
          className="pointer-events-none absolute left-0 top-0 z-[5] w-full overflow-visible bg-transparent"
          style={{ ...ORIGIN, backgroundColor: "transparent" }}
          animate={{
            x: [0, 12, 0],
            y: [0, -6, 0],
            opacity: [0.55, 0.85, 0.55],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="relative bg-transparent" style={MAIN_EDGE_MASK}>
            <Image
              src={LIQUID_HIGHLIGHTS}
              alt=""
              width={IMG_W}
              height={IMG_H}
              sizes={sizes}
              className={`${imgBase} contrast-[1.06] brightness-[1.08]`}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function HeroLiquidStack({ variant }: { variant: Variant }) {
  return <LiquidStackVariant variant={variant} />;
}
