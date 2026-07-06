/** Мінімальний горизонтальний зсув (px) для «карусельного» жесту. */
export const HORIZONTAL_SWIPE_THRESHOLD_PX = 10;

/** Горизонтальний жест: dx має перевищувати dy у це число разів. */
export const HORIZONTAL_SWIPE_DOMINANCE = 1.25;

export function isHorizontalSwipeIntent(
  startX: number,
  startY: number,
  currentX: number,
  currentY: number,
): boolean {
  const dx = Math.abs(currentX - startX);
  const dy = Math.abs(currentY - startY);
  return dx >= HORIZONTAL_SWIPE_THRESHOLD_PX && dx > dy * HORIZONTAL_SWIPE_DOMINANCE;
}
