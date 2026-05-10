"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export type SymbioteBand = "top" | "mid" | "bottom";

const SRC = "/symbiote/variants.png";

const bandPosition: Record<SymbioteBand, string> = {
  top: "50% 16%",
  mid: "50% 50%",
  bottom: "50% 84%",
};

type SymbioteLayerProps = {
  band: SymbioteBand;
  className?: string;
  blend?: "screen" | "lighten" | "normal" | "overlay";
  opacity?: number;
  priority?: boolean;
  drift?: boolean;
  scrollTargetRef?: React.RefObject<HTMLElement | null>;
  parallaxRange?: [number, number];
  scale?: number;
  style?: React.CSSProperties;
};

export function SymbioteLayer({
  band,
  className = "",
  blend = "screen",
  opacity = 0.92,
  priority = false,
  drift = true,
  scrollTargetRef,
  parallaxRange = [40, -56],
  scale = 1.08,
  style,
}: SymbioteLayerProps) {
  const { scrollYProgress } = useScroll(
    scrollTargetRef
      ? { target: scrollTargetRef, offset: ["start end", "end start"] }
      : { offset: ["start end", "end start"] },
  );
  const yParallax = useTransform(scrollYProgress, [0, 1], parallaxRange);
  const useParallax = Boolean(scrollTargetRef);

  const needsRelative = !className.includes("absolute");

  return (
    <motion.div
      className={needsRelative ? `relative ${className}` : className}
      style={{ ...style, y: useParallax ? yParallax : undefined }}
    >
      <motion.div
        className="absolute inset-0"
        animate={
          drift
            ? {
                x: [0, 5, -3, 0],
                scale: [scale, scale * 1.012, scale * 0.996, scale],
              }
            : undefined
        }
        transition={drift ? { duration: 26, repeat: Infinity, ease: "easeInOut" as const } : undefined}
      >
        <Image
          src={SRC}
          alt=""
          fill
          priority={priority}
          sizes="(max-width:768px) 120vw, 90vw"
          className="object-cover"
          style={{
            objectPosition: bandPosition[band],
            transform: `scale(${scale})`,
            mixBlendMode: blend,
            opacity,
          }}
          aria-hidden
        />
      </motion.div>
    </motion.div>
  );
}

export function SymbioteHeroForeground({
  sectionRef,
  className = "",
}: {
  sectionRef: React.RefObject<HTMLElement | null>;
  className?: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-[14] overflow-hidden ${className}`}
      aria-hidden
    >
      <div className="absolute -right-[10%] -bottom-[16%] h-[min(94vh,940px)] w-[min(118vw,1080px)] lg:-right-[3%] lg:-bottom-[12%] lg:h-[min(90vh,920px)] lg:w-[min(96vw,1020px)]">
        <div className="relative h-full w-full">
          <SymbioteLayer
            band="top"
            blend="screen"
            opacity={0.5}
            drift
            scrollTargetRef={sectionRef}
            parallaxRange={[56, -72]}
            scale={1.2}
            className="absolute inset-0"
            priority
          />
          <SymbioteLayer
            band="mid"
            blend="lighten"
            opacity={0.36}
            drift
            scrollTargetRef={sectionRef}
            parallaxRange={[32, -44]}
            scale={1.14}
            className="absolute inset-0"
          />
          <SymbioteLayer
            band="bottom"
            blend="screen"
            opacity={0.22}
            drift
            scrollTargetRef={sectionRef}
            parallaxRange={[20, -32]}
            scale={1.08}
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-tl from-black via-black/45 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_72%_58%_at_82%_70%,rgba(209,18,27,0.28)_0%,transparent_58%)] mix-blend-multiply" />
        </div>
      </div>
    </div>
  );
}

export function SymbioteAccent({
  band = "bottom",
  position = "bottom-right",
  className = "",
}: {
  band?: SymbioteBand;
  position?: "bottom-right" | "bottom-left" | "top-right";
  className?: string;
}) {
  const pos =
    position === "bottom-right"
      ? "-right-2 bottom-0 md:-right-6"
      : position === "bottom-left"
        ? "-left-2 bottom-0 md:-left-5 scale-x-[-1]"
        : "-right-1 top-0 scale-y-[-1]";

  return (
    <div className={`pointer-events-none absolute ${pos} z-[4] h-28 w-40 md:h-40 md:w-56 ${className}`} aria-hidden>
      <SymbioteLayer band={band} blend="screen" opacity={0.7} drift scale={1.2} className="h-full w-full" />
    </div>
  );
}

export function SymbioteSectionBreak({ flip = false }: { flip?: boolean }) {
  return (
    <div
      className={`relative h-20 w-full overflow-hidden bg-black md:h-28 ${flip ? "rotate-180" : ""}`}
      aria-hidden
    >
      <div className="absolute inset-x-0 bottom-0 top-1/3 opacity-90">
        <SymbioteLayer
          band="mid"
          blend="screen"
          opacity={0.32}
          drift={false}
          scale={1.02}
          parallaxRange={[0, 0]}
          className="mx-auto h-full w-[min(140%,1200px)]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60" />
    </div>
  );
}
