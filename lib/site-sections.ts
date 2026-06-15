/** Sections temporarily hidden on the homepage (components remain in the project). */
export const hiddenSections = {
  gallery: true,
  space: true,
} as const;

export type SiteSection = keyof typeof hiddenSections;

export function isSectionVisible(section: SiteSection): boolean {
  return !hiddenSections[section];
}
