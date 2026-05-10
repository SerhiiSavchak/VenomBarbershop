"use client";

type BrandLogoProps = {
  /** Без посилання (наприклад, лоадер). */
  asStatic?: boolean;
  href?: string;
  wordmark: string;
  ariaLabel: string;
  size?: "header" | "footer";
  wordmarkClassName?: string;
};

export function BrandLogo({
  asStatic = false,
  href = "#hero",
  wordmark,
  ariaLabel,
  size = "header",
  wordmarkClassName,
}: BrandLogoProps) {
  const isFooter = size === "footer";

  const barClass = isFooter
    ? "h-6 w-[2px] rounded-full bg-gradient-to-b from-[#ff2a32] via-[#E50914] to-[#3a0609] shadow-[0_0_14px_rgba(229,9,20,0.4)]"
    : "h-9 w-[3px] rounded-full bg-gradient-to-b from-[#ff2a32] via-[#E50914] to-[#2a0508] shadow-[0_0_22px_rgba(229,9,20,0.42)] md:h-10";

  const inner = (
    <>
      <span
        className={`relative shrink-0 transition-[box-shadow,filter] duration-500 group-hover:shadow-[0_0_28px_rgba(229,9,20,0.55)] group-hover:brightness-110 ${barClass}`}
        aria-hidden
      />
      <span
        className={`font-display font-semibold uppercase tracking-[0.26em] text-white antialiased transition-colors duration-300 group-hover:text-white ${isFooter ? "text-[11px] md:text-xs" : "text-[14px] md:text-[16px]"} ${wordmarkClassName ?? ""}`}
      >
        {wordmark}
      </span>
    </>
  );

  const className =
    "group inline-flex shrink-0 items-center gap-3 outline-none transition-opacity md:gap-3.5 focus-visible:ring-2 focus-visible:ring-[#E50914]/55 focus-visible:ring-offset-2 focus-visible:ring-offset-black";

  if (asStatic) {
    return (
      <span className={className} aria-label={ariaLabel}>
        {inner}
      </span>
    );
  }

  if (href) {
    return (
      <a href={href} aria-label={ariaLabel} className={className}>
        {inner}
      </a>
    );
  }

  return (
    <span className={className} aria-label={ariaLabel}>
      {inner}
    </span>
  );
}
