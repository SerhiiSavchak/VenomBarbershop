"use client";

import { forwardRef } from "react";
import { ChevronRight } from "lucide-react";

export type SiteCtaProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "outline";
  size?: "default" | "compact";
  /** Стрілка для навігаційних outline-кнопок (Детальніше, Послуги тощо). */
  showArrow?: boolean;
};

export const SiteCta = forwardRef<HTMLAnchorElement, SiteCtaProps>(
  ({ variant = "primary", size = "default", showArrow = false, className = "", children, ...props }, ref) => {
    const classes = [
      variant === "primary" ? "site-cta-primary" : "site-cta-outline",
      size === "compact" && "site-cta--compact",
      showArrow && "group",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <a ref={ref} className={classes} {...props}>
        {children}
        {showArrow ? (
          <ChevronRight className="site-cta-arrow h-4 w-4 shrink-0" strokeWidth={2.25} aria-hidden />
        ) : null}
      </a>
    );
  },
);

SiteCta.displayName = "SiteCta";
