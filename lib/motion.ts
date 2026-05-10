/** Premium entrance / reveal — controlled, non-bouncy */
export const cinematicEase = [0.16, 1, 0.3, 1] as const;

/** Чуть резче — хорошо на мобайле для коротких движений */
export const mobilePopEase = [0.22, 1, 0.28, 1] as const;

export const viewportReveal = { once: true as const, amount: 0.2 as const };

export const transitionReveal = {
  duration: 0.88,
  ease: cinematicEase,
} as const;

/** На мобайле лёгкий сдвиг по X — ощущение «карточки», на десктопе классический lift по Y */
export function revealLiftInitial(lg: boolean) {
  return lg
    ? { opacity: 0, y: 36, x: 0 }
    : { opacity: 0, y: 20, x: -22 };
}

export const revealLiftEnter = { opacity: 1, y: 0, x: 0 };

/** Shared horizontal inset for section eyebrow + title (same across pages). */
export const sectionTitleInset = "pl-2 md:pl-3 lg:pl-4";
