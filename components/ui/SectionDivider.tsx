interface SectionDividerProps {
  variant?: "subtle" | "brand" | "gradient";
  className?: string;
}

export function SectionDivider({ variant = "subtle", className = "" }: SectionDividerProps) {
  if (variant === "brand") {
    return (
      <div className={`relative h-px w-full overflow-hidden ${className}`} aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E50914]/60 to-transparent" />
      </div>
    );
  }

  if (variant === "gradient") {
    return (
      <div className={`relative h-16 w-full overflow-hidden ${className}`} aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#E50914]/5 to-transparent" />
        <div className="absolute left-1/2 top-1/2 h-px w-[80%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      </div>
    );
  }

  return (
    <div className={`relative h-px w-full overflow-hidden ${className}`} aria-hidden>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
    </div>
  );
}
