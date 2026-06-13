/** Секции, которые временно скрыты с главной (компоненты остаются в проекте). */
export const hiddenSections = {
  gallery: true,
  space: true,
} as const;

export type SiteSection = keyof typeof hiddenSections;

export function isSectionVisible(section: SiteSection): boolean {
  return !hiddenSections[section];
}
