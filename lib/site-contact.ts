/** Актуальні контактні дані та посилання VENOM Barbershop. */
export const SITE_PHONE_E164 = "+380638067071";

export const SITE_PHONE_HREF = `tel:${SITE_PHONE_E164}`;

export const SITE_PHONE_DISPLAY = "+380 63 806 70 71";

export const SITE_ADDRESS_UK = "вулиця Героїв Майдану, 17в, Сокільники, Львів";

export const SITE_ADDRESS_EN = "17v Heroiv Maidanu St., Sokilnyky, Lviv";

export const SITE_HOURS_UK = "Щодня | 10:00 — 21:00";

export const SITE_HOURS_EN = "Daily | 10:00 — 21:00";

export const SITE_INSTAGRAM_URL = "https://www.instagram.com/venom.barbershop.lviv/";

export const SITE_FACEBOOK_URL =
  "https://www.facebook.com/people/VENOM-Barbershop/61560790833026/";

export const SITE_GOOGLE_MAPS_OPEN_URL =
  "https://www.google.com/maps/place/VENOM+%D0%91%D0%B0%D1%80%D0%B1%D0%B5%D1%80%D1%88%D0%BE%D0%BF/@49.7903887,24.0103768,17z/data=!3m1!4b1!4m6!3m5!1s0x473ae7b8421fa14b:0x665b9dd78b988848!8m2!3d49.7903887!4d24.0103768!16s%2Fg%2F11njlk3b2d";

const MAP_LAT = 49.7903887;
const MAP_LNG = 24.0103768;
const MAP_ZOOM = 17;

/** Embed по координатах — без білої плашки; підпис POI біля маркера зʼявляється на tiles Google Maps. */
export function siteGoogleMapsEmbedSrc(lang: "uk" | "en"): string {
  const hl = lang === "uk" ? "uk" : "en";
  return `https://maps.google.com/maps?q=${MAP_LAT},${MAP_LNG}&hl=${hl}&z=${MAP_ZOOM}&output=embed`;
}
