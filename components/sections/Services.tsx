"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useInView, useScroll, useTransform } from "framer-motion";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { Clock, X } from "lucide-react";
import { useI18n } from "@/components/providers/I18nProvider";
import { SectionEyebrow, sectionHeadingVariants } from "@/components/ui/SectionEyebrow";
import { cinematicEase, mobilePopEase, sectionTitleInset } from "@/lib/motion";
import { useBelowMd } from "@/lib/useBelowMd";
import { useLgUp } from "@/lib/useLgUp";
import { useHorizontalRailVerticalWheelPassthrough } from "@/lib/useHorizontalRailVerticalWheelPassthrough";
import { SiteCta } from "@/components/ui/SiteCta";
import { SiteContainer } from "@/components/ui/SiteContainer";
import { altegioBookingLink } from "@/lib/altegio";
import { siteSectionYClass } from "@/lib/site-layout";
import {
  SERVICES_AUTOPLAY_INTERVAL_MS,
  SERVICES_INTERACTION_PAUSE_MS,
  useSnapCarouselAutoplay,
} from "@/lib/useSnapCarouselAutoplay";
import {
  getServiceCategoryImageFocus,
  SERVICE_CATEGORY_IMAGES,
} from "@/lib/service-categories";
import { formatCategoryPrice, formatModalPrice } from "@/lib/format-price";
import { lockBodyScroll } from "@/lib/body-scroll-lock";
import type { Messages } from "@/lib/i18n";

type ServiceCategory = Messages["services"]["categories"][number];

const desktopGridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

function desktopCardVariants(index: number) {
  return {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: cinematicEase, delay: index * 0.08 },
    },
  };
}

const cardBorderClass =
  "pointer-events-none absolute inset-0 z-20 shadow-[inset_0_0_0_1px_rgba(229,9,20,0.28)] transition-[box-shadow] duration-500 group-hover:shadow-[inset_0_0_0_1px_rgba(229,9,20,0.72)]";

function ServiceCardContent({
  category,
  isDesktop,
  onDetails,
  detailsLabel,
  reserveLabel,
}: {
  category: ServiceCategory;
  isDesktop: boolean;
  onDetails: () => void;
  detailsLabel: string;
  reserveLabel: string;
}) {
  const image = SERVICE_CATEGORY_IMAGES[category.id];
  const imageFocus = getServiceCategoryImageFocus(category.id, isDesktop);

  return (
    <>
      <button
        type="button"
        onClick={onDetails}
        aria-label={`${detailsLabel}: ${category.name}`}
        className="absolute inset-0 z-[5] cursor-pointer"
      />

      <div className="pointer-events-none absolute inset-0">
        <OptimizedImage
          src={image}
          alt={category.imageAlt}
          fill
          quality={80}
          sizes={isDesktop ? "(max-width:1024px) 50vw, 33vw" : "85vw"}
          className={`${imageFocus} object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-110`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-[#E50914]/0 mix-blend-multiply transition-colors duration-500 group-hover:bg-[#E50914]/20" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-transparent via-[#E50914] to-transparent transition-transform duration-500 group-hover:scale-x-100" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className={cardBorderClass} aria-hidden />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex flex-col p-5 md:p-6">
        <div>
          <h3 className="font-display text-2xl font-bold uppercase leading-tight tracking-tight text-white drop-shadow-lg md:text-3xl">
            {category.name}
          </h3>
          <p className="mt-1.5 text-[13px] leading-snug text-white/70 md:mt-2 md:text-sm md:leading-relaxed">
            {category.blurb}
          </p>
        </div>

        <p className="mt-2.5 min-h-[1.75rem] font-display text-2xl font-bold tracking-tight text-white md:mt-3 md:min-h-[2rem] md:text-3xl">
          {formatCategoryPrice(category.priceRange)}
        </p>

        <div className="mt-3 h-px bg-gradient-to-r from-white/10 via-white/20 to-white/10 md:mt-3.5" />

        <div className="service-card-cta-row relative z-20 mt-3 flex flex-col gap-2.5 pointer-events-none sm:flex-row md:mt-3.5">
          <span className="service-card-cta service-card-cta--outline">{detailsLabel}</span>
          <a
            {...altegioBookingLink}
            className="service-card-cta service-card-cta--primary pointer-events-auto"
          >
            {reserveLabel}
          </a>
        </div>
      </div>
    </>
  );
}

function ServiceCard({
  category,
  index,
  isDesktop,
  onDetails,
  detailsLabel,
  reserveLabel,
}: {
  category: ServiceCategory;
  index: number;
  isDesktop: boolean;
  onDetails: () => void;
  detailsLabel: string;
  reserveLabel: string;
}) {
  const aspectClass = isDesktop
    ? "aspect-[3/4]"
    : "aspect-[4/5] w-[min(85vw,340px)] shrink-0 snap-center";

  const contentProps = {
    category,
    isDesktop,
    onDetails,
    detailsLabel,
    reserveLabel,
  };

  if (!isDesktop) {
    return (
      <article className={`group relative overflow-hidden ${aspectClass}`}>
        <ServiceCardContent {...contentProps} />
      </article>
    );
  }

  return (
    <motion.article
      variants={desktopCardVariants(index)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className={`group relative overflow-hidden ${aspectClass}`}
    >
      <ServiceCardContent {...contentProps} />
    </motion.article>
  );
}

function ServiceCategoryModal({
  category,
  onClose,
  reserveLabel,
  closeLabel,
}: {
  category: ServiceCategory;
  onClose: () => void;
  reserveLabel: string;
  closeLabel: string;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const belowMd = useBelowMd();
  const [isClosing, setIsClosing] = useState(false);
  const modalImageFocus = getServiceCategoryImageFocus(category.id, !belowMd);

  const requestClose = useCallback(() => {
    setIsClosing(true);
    onClose();
  }, [onClose]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") requestClose();
    },
    [requestClose],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    panelRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const modal = (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: cinematicEase }}
      className={`fixed inset-0 z-[100] flex items-center justify-center overscroll-none p-3 sm:p-6${isClosing ? " pointer-events-none" : ""}`}
      style={{
        paddingTop: "max(0.75rem, env(safe-area-inset-top, 0px))",
        paddingBottom: "max(0.75rem, env(safe-area-inset-bottom, 0px))",
      }}
    >
      <motion.button
        type="button"
        aria-label={closeLabel}
        className="absolute inset-0 cursor-pointer bg-black/88 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: cinematicEase }}
        onClick={requestClose}
      />

      <motion.div
        ref={panelRef}
        tabIndex={-1}
        initial={{ opacity: 0, y: 48, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 32, scale: 0.95 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-[1] flex w-[calc(100vw-24px)] max-h-[min(88dvh,calc(100dvh-1.5rem))] cursor-default flex-col overflow-hidden rounded-sm border border-white/[0.08] bg-gradient-to-b from-[#0c0c0c] to-black shadow-[0_24px_80px_-20px_rgba(0,0,0,0.9)] md:max-h-[85vh] md:w-full md:max-w-[min(90vw,52rem)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E50914]/75 to-transparent" aria-hidden />

        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: cinematicEase, delay: 0.04 }}
          className="relative h-24 shrink-0 overflow-hidden md:h-32"
        >
          <OptimizedImage
            src={SERVICE_CATEGORY_IMAGES[category.id]}
            alt={category.imageAlt}
            fill
            quality={80}
            sizes="(max-width: 768px) 328px, 832px"
            className={`${modalImageFocus} object-cover`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/20" />
          <button
            type="button"
            onClick={requestClose}
            className="absolute right-3 top-3 flex h-9 w-9 cursor-pointer items-center justify-center rounded-sm border border-white/15 bg-black/60 text-white backdrop-blur-sm transition-colors hover:border-[#E50914]/50 hover:text-[#E50914]"
            aria-label={closeLabel}
          >
            <X className="h-4 w-4" strokeWidth={2} aria-hidden />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.38, ease: cinematicEase, delay: 0.08 }}
          className="flex min-h-0 flex-1 flex-col"
        >
          <div className="shrink-0 border-b border-white/[0.06] px-4 py-4 md:px-6 md:py-5">
            <h3
              id="service-modal-title"
              className="font-display text-xl font-bold uppercase tracking-tight text-white md:text-2xl"
            >
              {category.name}
            </h3>
            <p className="mt-1.5 text-[13px] leading-relaxed text-white/65 md:text-sm">
              {category.blurb}
            </p>
            <p className="mt-2 font-display text-lg font-bold text-[#E50914] md:text-xl">
              {formatCategoryPrice(category.priceRange)}
            </p>
          </div>

          <ul className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-3 md:px-6 md:py-4">
            {category.items.map((item) => (
              <li
                key={item.name}
                className="border-b border-white/[0.06] py-3.5 first:pt-0 last:border-b-0 last:pb-0 md:py-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="min-w-0 flex-1 font-display text-[13px] font-bold uppercase leading-snug tracking-tight text-white md:text-base">
                    {item.name}
                  </p>
                  <p className="shrink-0 whitespace-nowrap pl-2 text-right font-display text-[13px] font-bold tabular-nums text-white md:min-w-[7.5rem] md:text-lg">
                    {formatModalPrice(item.price)}
                  </p>
                </div>
                {item.blurb ? (
                  <p className="mt-1.5 text-[13px] leading-relaxed text-white/55">{item.blurb}</p>
                ) : null}
                <span className="mt-2 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/45">
                  <Clock className="h-3 w-3 shrink-0" strokeWidth={2} aria-hidden />
                  {item.duration}
                </span>
              </li>
            ))}
          </ul>

          <div className="shrink-0 border-t border-white/[0.06] p-4 md:p-6">
            <SiteCta {...altegioBookingLink} className="w-full">
              {reserveLabel}
            </SiteCta>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );

  if (typeof document === "undefined") {
    return null;
  }

  return createPortal(modal, document.body);
}

export function Services() {
  const { t } = useI18n();
  const isLg = useLgUp();
  const belowMd = useBelowMd();
  const [servicesRail, setServicesRail] = useState<HTMLDivElement | null>(null);
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const categories = t.services.categories;

  const activeCategory =
    categories.find((category) => category.id === activeCategoryId) ?? null;

  useEffect(() => {
    if (!activeCategoryId) return;
    return lockBodyScroll();
  }, [activeCategoryId]);

  useSnapCarouselAutoplay(servicesRail, categories.length, belowMd, {
    intervalMs: SERVICES_AUTOPLAY_INTERVAL_MS,
    interactionPauseMs: SERVICES_INTERACTION_PAUSE_MS,
  });
  useHorizontalRailVerticalWheelPassthrough(servicesRail, belowMd);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={sectionRef} id="services" className={`relative overflow-hidden bg-black ${siteSectionYClass}`}>
      <motion.div className="pointer-events-none absolute inset-0" style={{ y: bgY }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(209,18,27,0.12)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_100%,rgba(209,18,27,0.08)_0%,transparent_50%)]" />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <span className="select-none font-display text-[20vw] font-black uppercase leading-none tracking-tighter text-white/[0.015] md:text-[15vw]">
          VENOM
        </span>
      </div>

      <SiteContainer className="relative z-[2]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className={`mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between ${sectionTitleInset}`}
        >
          <div>
            <SectionEyebrow text={t.services.sectionEyebrow} />
            <motion.h2
              variants={sectionHeadingVariants}
              className="font-display text-4xl font-bold uppercase tracking-tight text-white md:text-5xl lg:text-6xl"
            >
              {t.services.sectionTitle}
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: cinematicEase, delay: 0.4 }}
            className="max-w-sm text-sm leading-relaxed text-foreground-muted md:text-right md:text-base"
          >
            {t.services.sectionLead}
          </motion.p>
        </motion.div>

        <div
          ref={setServicesRail}
          className="flex gap-4 overflow-x-auto overflow-y-hidden overscroll-x-contain px-1 pb-8 scrollbar-hide snap-x snap-mandatory md:hidden"
        >
          {categories.map((category, index) => (
            <ServiceCard
              key={category.id}
              category={category}
              index={index}
              isDesktop={false}
              detailsLabel={t.services.detailsCta}
              reserveLabel={t.services.reserveCta}
              onDetails={() => setActiveCategoryId(category.id)}
            />
          ))}
        </div>

        <motion.div
          className="hidden gap-5 md:grid md:grid-cols-2 lg:grid-cols-3 xl:gap-6"
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={desktopGridVariants}
        >
          {categories.map((category, index) => (
            <ServiceCard
              key={category.id}
              category={category}
              index={index}
              isDesktop
              detailsLabel={t.services.detailsCta}
              reserveLabel={t.services.reserveCta}
              onDetails={() => setActiveCategoryId(category.id)}
            />
          ))}
        </motion.div>

        <motion.div
          initial={isLg ? { opacity: 0, y: 28 } : { opacity: 0, y: 22, x: -12 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: isLg ? cinematicEase : mobilePopEase, delay: 0.2 }}
          className={`mt-12 flex flex-col items-center justify-center gap-3 border-t border-white/[0.06] pt-10 text-center md:mt-16 md:flex-row md:gap-4 md:pt-12 ${sectionTitleInset}`}
        >
          <p className="text-sm text-white/50 md:text-base">{t.services.priceNote}</p>
          <span className="hidden h-1 w-1 rounded-full bg-white/20 md:block" />
          <a
            {...altegioBookingLink}
            className="cursor-pointer text-sm font-semibold text-[#E50914] transition-colors hover:text-white md:text-base"
          >
            {t.services.reserveCta} &rarr;
          </a>
        </motion.div>
      </SiteContainer>

      <AnimatePresence mode="wait">
        {activeCategory ? (
          <ServiceCategoryModal
            key={activeCategory.id}
            category={activeCategory}
            onClose={() => setActiveCategoryId(null)}
            reserveLabel={t.services.reserveCta}
            closeLabel={t.services.modalClose}
          />
        ) : null}
      </AnimatePresence>
    </section>
  );
}
