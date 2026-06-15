/** Прибирає пробіл перед символом гривні: `750 ₴` → `750₴`. */
export function formatPriceDisplay(price: string): string {
  return price.replace(/\s+₴/g, "₴");
}
