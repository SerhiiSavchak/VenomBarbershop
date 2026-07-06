"use client";

import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ImageHoverZoom } from "@/components/ui/ImageHoverZoom";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { useI18n } from "@/components/providers/I18nProvider";
import { cinematicEase, mobilePopEase, sectionTitleInset, sectionViewport } from "@/lib/motion";
import { SectionEyebrow, sectionHeadingVariants } from "@/components/ui/SectionEyebrow";
import { SiteCta } from "@/components/ui/SiteCta";
import { SiteContainer } from "@/components/ui/SiteContainer";
import { siteSectionYClass } from "@/lib/site-layout";
import { useLgUp } from "@/lib/useLgUp";
import { altegioBookingLink } from "@/lib/altegio";
import { MASTER_PHOTO_SRC } from "@/lib/masters";
import type { Messages } from "@/lib/i18n";

type MasterItem = Messages["masters"]["items"][number];

function cardVariants(lg: boolean) {
  return {
    hidden: lg ? { opacity: 0, y: 50, x: 0 } : { opacity: 0, y: 40, x: -20 },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.75, ease: lg ? cinematicEase : mobilePopEase },
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: { duration: 0.4, ease: cinematicEase },
    },
  };
}

function isInteractiveCardTarget(target: EventTarget | null): boolean {
  return Boolean((target as HTMLElement | null)?.closest("a, button"));
}

function MasterCard({
  master,
  isActive,
  onTouchActivate,
  lg,
  bookLabel,
}: {
  master: MasterItem;
  isActive: boolean;
  onTouchActivate: (cardId: string) => void;
  lg: boolean;
  bookLabel: string;
}) {
  const handlePointerUp = (event: React.PointerEvent<HTMLElement>) => {
    if (event.pointerType === "mouse") return;
    if (isInteractiveCardTarget(event.target)) return;
    onTouchActivate(master.name);
  };

  return (
    <motion.article
      variants={cardVariants(lg)}
      initial="hidden"
      whileInView="show"
      exit="exit"
      viewport={sectionViewport(lg)}
      onPointerUp={handlePointerUp}
      className={`group relative w-full max-w-[380px] overflow-hidden border border-white/[0.06] bg-gradient-to-b from-[#0a0a0a] to-[#030303] transition-[border-color,box-shadow] duration-500 ease-out md:max-w-[420px] fine-group-hover:border-[#E50914]/40 [.is-active]:border-[#E50914]/40${isActive ? " is-active" : ""}`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_top,rgba(229,9,20,0.1)_0%,transparent_60%)] opacity-0 transition-opacity duration-500 fine-group-hover:opacity-100 group-[.is-active]:opacity-100" />

      <div className="relative aspect-[3/4.2] overflow-hidden">
        <ImageHoverZoom active={isActive}>
          <OptimizedImage
            src={MASTER_PHOTO_SRC}
            alt={master.imageAlt}
            fill
            fadeIn={false}
            sizes="(max-width:768px) 90vw, 420px"
            quality={85}
            className="hover-filter-img object-cover object-[center_18%] grayscale fine-group-hover:grayscale-0 group-[.is-active]:grayscale-0"
          />
        </ImageHoverZoom>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-accent-red/0 mix-blend-multiply transition-colors duration-500 ease-out fine-group-hover:bg-accent-red/12 group-[.is-active]:bg-accent-red/12" />
      </div>

      <div className="absolute inset-x-0 bottom-0 z-[3] flex flex-col gap-4 bg-gradient-to-t from-black via-black/95 to-transparent p-5 pt-12 md:p-6 md:pt-16">
        <div>
          <p className="font-display text-xl font-bold uppercase leading-none tracking-tight text-white drop-shadow-md md:text-2xl">
            {master.name}
          </p>
          <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#E50914] md:text-[11px]">
            {master.role}
          </p>
        </div>

        <SiteCta {...altegioBookingLink} size="compact" className="w-full">
          {bookLabel}
        </SiteCta>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-transparent via-[#E50914] to-transparent transition-transform duration-500 fine-group-hover:scale-x-100 group-[.is-active]:scale-x-100" />
    </motion.article>
  );
}

export function Masters() {
  const { t } = useI18n();
  const lg = useLgUp();
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const masters = t.masters.items;

  const handleTouchActivate = useCallback((cardId: string) => {
    setActiveCardId(cardId);
  }, []);

  if (masters.length === 0) return null;

  return (
    <section ref={sectionRef} id="masters" className={`relative overflow-hidden bg-black ${siteSectionYClass}`}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_0%,rgba(209,18,27,0.12)_0%,transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_100%_100%,rgba(209,18,27,0.06)_0%,transparent_50%)]" />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <span className="select-none font-display text-[25vw] font-black uppercase leading-none tracking-tighter text-white/[0.012] md:text-[18vw]">
          TEAM
        </span>
      </div>

      <SiteContainer className="relative z-[2]">
        <motion.div
          className={`mb-14 ${sectionTitleInset}`}
          initial="hidden"
          whileInView="show"
          viewport={sectionViewport(lg, 0.3)}
        >
          <SectionEyebrow text={t.masters.eyebrow} />
          <motion.h2
            variants={sectionHeadingVariants}
            className="font-display text-4xl font-bold uppercase tracking-tight text-white md:text-6xl"
          >
            {t.masters.title}
          </motion.h2>
        </motion.div>

        <div className="flex justify-start gap-4">
          {masters.map((master) => (
            <MasterCard
              key={master.name}
              master={master}
              isActive={activeCardId === master.name}
              onTouchActivate={handleTouchActivate}
              lg={lg}
              bookLabel={t.contact.bookAppointment}
            />
          ))}
        </div>

        <motion.div
          initial={lg ? { opacity: 0, y: 28, x: 0 } : { opacity: 0, y: 36, x: -14 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={sectionViewport(lg, 0.5)}
          transition={{ duration: 0.8, ease: lg ? cinematicEase : mobilePopEase, delay: 0.08 }}
          className={`mt-14 flex flex-col gap-6 border-t border-white/[0.08] pt-10 md:mt-16 md:flex-row md:items-center md:justify-between md:gap-10 md:pt-12 ${sectionTitleInset}`}
        >
          <p className="max-w-xl text-sm leading-relaxed text-foreground-muted md:text-base">{t.masters.ctaLead}</p>
          <div className="flex w-full shrink-0 flex-col gap-3 sm:ml-auto sm:w-auto sm:flex-row sm:items-stretch sm:justify-end sm:gap-3">
            <SiteCta
              {...altegioBookingLink}
              aria-label={t.masters.bookCtaAria}
              className="sm:min-w-[12.5rem]"
            >
              {t.contact.bookAppointment}
            </SiteCta>
            <SiteCta href="#services" variant="outline" showArrow className="sm:min-w-[10rem]">
              {t.hero.ctaSecondaryShort}
            </SiteCta>
          </div>
        </motion.div>
      </SiteContainer>
    </section>
  );
}
