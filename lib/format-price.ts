const CURRENCY = "₴";
const EN_DASH = "–";

function stripCurrencySpacing(price: string): string {
  return price.replace(/\s+₴/g, CURRENCY);
}

function stripThousandSeparators(price: string): string {
  return price.replace(/(\d)\s+(?=\d)/g, "$1");
}

function normalizeNumericToken(value: string): string {
  return stripThousandSeparators(value.replace(CURRENCY, "").trim());
}

/** Category cards: starting price only, e.g. `від 500₴`. */
export function formatCategoryPrice(price: string): string {
  let result = stripCurrencySpacing(price);
  result = stripThousandSeparators(result);
  result = result.replace(/\s+до\s+[\d\s]+(?:₴)?/gi, "");
  return result.trim();
}

/** Modal line items: `700 – 900₴`, single prices as `300₴`. */
export function formatModalPrice(price: string): string {
  const normalized = stripThousandSeparators(stripCurrencySpacing(price));
  const rangeMatch = normalized.match(/^(.+?)\s*[-–]\s*(.+)$/);

  if (rangeMatch) {
    const low = normalizeNumericToken(rangeMatch[1]);
    const high = normalizeNumericToken(rangeMatch[2]);
    return `${low} ${EN_DASH} ${high}${CURRENCY}`;
  }

  const single = normalizeNumericToken(normalized);
  return `${single}${CURRENCY}`;
}
