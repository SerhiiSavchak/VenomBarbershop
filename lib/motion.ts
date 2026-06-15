/** Premium entrance / reveal — controlled, non-bouncy */
export const cinematicEase = [0.16, 1, 0.3, 1] as const;

/** Slightly snappier — works well for short mobile motions */
export const mobilePopEase = [0.22, 1, 0.28, 1] as const;

export const revealLiftEnter = { opacity: 1, y: 0, x: 0 };

/** Shared horizontal inset for section eyebrow + title (same across pages). */
export const sectionTitleInset = "pl-2 md:pl-3 lg:pl-4";
