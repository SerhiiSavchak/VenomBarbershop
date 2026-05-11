"use client";

import { useEffect } from "react";

/**
 * Горизонтальний overflow часто «їсть» колесо/трекпад при скролі сторінки.
 * Якщо жест переважно вертикальний — прокручуємо `window`, не залишаючи подію на рельсі.
 */
export function useHorizontalRailVerticalWheelPassthrough(
  el: HTMLElement | null,
  enabled: boolean,
) {
  useEffect(() => {
    if (!el || !enabled) return;

    const onWheel = (e: WheelEvent) => {
      const dy = e.deltaY;
      const dx = e.deltaX;
      if (Math.abs(dy) < 0.5) return;
      /* Переважно горизонтальний жест — залишаємо прокрутку самого рельса */
      if (Math.abs(dx) > Math.abs(dy) * 1.15) return;

      e.preventDefault();
      window.scrollBy({ top: dy, left: 0, behavior: "auto" });
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [el, enabled]);
}
