/** Local optimized images for service category cards. */
export const SERVICE_CATEGORY_IMAGES = {
  haircuts: "/services/haircuts.jpg",
  beard: "/services/beard.jpg",
  combo: "/services/combo.jpg",
  toning: "/services/toning.jpg",
  care: "/services/care.jpg",
  hairTattoo: "/services/hair-tattoo.jpg",
} as const;

type ImageFocus = { mobile: string; desktop: string };

/** Per-card focal point — mobile portrait crops differ from desktop tiles. */
export const SERVICE_CATEGORY_IMAGE_FOCUS: Record<keyof typeof SERVICE_CATEGORY_IMAGES, ImageFocus> = {
  haircuts: {
    mobile: "object-[50%_18%]",
    desktop: "object-[50%_24%]",
  },
  beard: {
    mobile: "object-[50%_34%]",
    desktop: "object-[50%_38%]",
  },
  combo: {
    mobile: "object-[50%_22%]",
    desktop: "object-[50%_28%]",
  },
  toning: {
    mobile: "object-[50%_30%]",
    desktop: "object-[50%_32%]",
  },
  care: {
    mobile: "object-[50%_40%]",
    desktop: "object-[50%_45%]",
  },
  hairTattoo: {
    mobile: "object-[50%_36%]",
    desktop: "object-[50%_40%]",
  },
};

export function getServiceCategoryImageFocus(
  id: keyof typeof SERVICE_CATEGORY_IMAGES,
  isDesktop: boolean,
): string {
  const focus = SERVICE_CATEGORY_IMAGE_FOCUS[id];
  return isDesktop ? focus.desktop : focus.mobile;
}

export type ServiceCategoryId = keyof typeof SERVICE_CATEGORY_IMAGES;
