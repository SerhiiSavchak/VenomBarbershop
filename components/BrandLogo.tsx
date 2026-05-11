"use client";

type BrandLogoProps = {
  /** Більший акцент і слово на мобільному (< lg). */
  emphasizeMobile?: boolean;
  /** Без посилання (наприклад, лоадер). */
  asStatic?: boolean;
  href?: string;
  wordmark: string;
  ariaLabel: string;
  size?: "header" | "footer";
  wordmarkClassName?: string;
};

export function BrandLogo({
  emphasizeMobile = false,
  asStatic = false,
  href = "#hero",
  wordmark,
  ariaLabel,
  size = "header",
  wordmarkClassName,
}: BrandLogoProps) {
  const isFooter = size === "footer";

  const barClass = isFooter
    ? "h-11 w-[3px] rounded-full bg-gradient-to-b from-[#ff2a32] via-[#E50914] to-[#3a0609] shadow-[0_0_22px_rgba(229,9,20,0.48)] md:h-12 md:w-[3px]"
    : emphasizeMobile
      ? "h-9 w-[3px] rounded-full bg-gradient-to-b from-[#ff2a32] via-[#E50914] to-[#2a0508] shadow-[0_0_22px_rgba(229,9,20,0.42)] md:h-10 max-lg:h-[52px] max-lg:w-1 max-lg:shadow-[0_0_32px_rgba(229,9,20,0.55)]"
      : "h-9 w-[3px] rounded-full bg-gradient-to-b from-[#ff2a32] via-[#E50914] to-[#2a0508] shadow-[0_0_22px_rgba(229,9,20,0.42)] md:h-10";

  const wordmarkSizeClass = isFooter
    ? "text-[15px] font-semibold uppercase tracking-[0.22em] md:text-[17px] md:tracking-[0.2em]"
    : emphasizeMobile
      ? "text-[14px] font-semibold uppercase tracking-[0.26em] text-white md:text-[16px] max-lg:text-[19px] max-lg:tracking-[0.2em]"
      : "text-[14px] md:text-[16px]";

  const inner = (
    <>
      <span
        className={`relative shrink-0 transition-[box-shadow,filter] duration-500 group-hover:shadow-[0_0_28px_rgba(229,9,20,0.55)] group-hover:brightness-110 ${barClass}`}
        aria-hidden
      />
      <span
        className={`font-display font-semibold uppercase text-white antialiased transition-colors duration-300 group-hover:text-white ${wordmarkSizeClass} ${wordmarkClassName ?? ""}`}
      >
        {wordmark}
      </span>
    </>
  );

  const className = [
    "group inline-flex shrink-0 items-center outline-none transition-opacity focus-visible:ring-2 focus-visible:ring-[#E50914]/55 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
    isFooter ? "gap-4 md:gap-5" : "gap-3 max-lg:gap-4 lg:gap-3 md:gap-3.5",
  ].join(" ");

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
