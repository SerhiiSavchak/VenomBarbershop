/** Premium entrance / reveal — controlled, non-bouncy */
export const cinematicEase = [0.16, 1, 0.3, 1] as const;

export const viewportReveal = { once: true as const, amount: 0.2 as const };

export const transitionReveal = {
  duration: 0.88,
  ease: cinematicEase,
} as const;
