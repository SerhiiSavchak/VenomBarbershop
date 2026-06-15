"use client";

import { motion } from "framer-motion";
import { ExternalLink, MapPin, Clock, Phone } from "lucide-react";
import { useI18n } from "@/components/providers/I18nProvider";
import { cinematicEase, mobilePopEase, revealLiftEnter, sectionTitleInset } from "@/lib/motion";
import { SectionEyebrow, sectionHeadingVariants } from "@/components/ui/SectionEyebrow";
import { SiteCta } from "@/components/ui/SiteCta";
import { SiteContainer } from "@/components/ui/SiteContainer";
import { siteSectionYContactClass } from "@/lib/site-layout";
import { altegioBookingLink } from "@/lib/altegio";
import { useLgUp } from "@/lib/useLgUp";

const contactCardVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

function contactItemVariants(lg: boolean) {
  return {
    hidden: lg ? { opacity: 0, y: 20, x: 0 } : { opacity: 0, y: 18, x: -12 },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.65, ease: lg ? cinematicEase : mobilePopEase },
    },
  };
}

export function Contact() {
  const { t } = useI18n();
  const c = t.contact;
  const lg = useLgUp();

  const rows = [
    { icon: MapPin, label: c.addressLabel, text: c.address, href: c.googleMapsOpenUrl },
    { icon: Clock, label: c.hoursLabel, text: c.hours, href: null },
    { icon: Phone, label: c.phoneLabel, text: c.phone, href: c.phoneHref },
  ];

  return (
    <section id="contact" className={`relative overflow-hidden bg-black ${siteSectionYContactClass}`}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_120%,rgba(209,18,27,0.35)_0%,transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_10%_0%,rgba(209,18,27,0.12)_0%,transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_90%_50%,rgba(209,18,27,0.08)_0%,transparent_50%)]" />

      <SiteContainer className="relative z-[10] box-border min-w-0 pb-[env(safe-area-inset-bottom,0px)]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.15 }}
          className={`max-w-5xl ${sectionTitleInset}`}
        >
          <SectionEyebrow text={c.eyebrow} className="mb-6" />
          <motion.h2
            variants={sectionHeadingVariants}
            className="hero-display text-[clamp(3rem,10vw,6.5rem)] text-white"
          >
            {c.title}
          </motion.h2>
          <p className="mt-10 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">{c.lead}</p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-stretch lg:justify-start">
            <SiteCta
              {...altegioBookingLink}
              className="order-1 w-full sm:order-1 sm:w-auto"
            >
              {c.bookAppointment}
            </SiteCta>
            <SiteCta
              href={c.phoneHref}
              variant="outline"
              className="order-2 w-full sm:order-2 sm:w-auto"
            >
              {c.callNow}
            </SiteCta>
          </div>
        </motion.div>

        <motion.div
          initial={lg ? { opacity: 0, y: 32, x: 0 } : { opacity: 0, y: 26, x: -14 }}
          whileInView={revealLiftEnter}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.85, ease: lg ? cinematicEase : mobilePopEase }}
          className="mt-24 grid min-w-0 gap-10 border-t border-white/[0.08] pt-16 lg:grid-cols-12 lg:items-center lg:gap-12"
        >
          <motion.div
            className="flex min-w-0 flex-col space-y-6 lg:col-span-5 lg:space-y-8"
            variants={contactCardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.15 }}
          >
            {rows.map((row) => {
              const content = (
                <div className="group flex min-w-0 w-full gap-3 rounded-sm border border-white/[0.06] bg-gradient-to-br from-[#0a0a0a] to-[#050505] p-4 transition-all duration-300 hover:border-[#E50914]/30 hover:bg-gradient-to-br hover:from-[#0c0c0c] hover:to-[#060606] sm:gap-5 sm:p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-white/[0.08] bg-white/[0.02] transition-all duration-300 group-hover:border-[#E50914]/40 group-hover:bg-[#E50914]/10 sm:h-14 sm:w-14">
                    <row.icon className="h-5 w-5 text-[#E50914] sm:h-6 sm:w-6" strokeWidth={1.5} aria-hidden />
                  </div>
                  <div className="min-w-0 flex-1 overflow-hidden">
                    <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-foreground-muted sm:text-[11px]">
                      {row.label}
                    </p>
                    <p className="mt-2.5 whitespace-pre-line break-words text-base leading-relaxed text-white/90 [overflow-wrap:anywhere] sm:text-[17px] sm:leading-relaxed">
                      {row.text}
                    </p>
                  </div>
                </div>
              );

              return (
                <motion.div key={row.label} variants={contactItemVariants(lg)} className="min-w-0">
                  {row.href ? (
                    <a
                      href={row.href}
                      className="block min-w-0"
                      target={row.href.startsWith("http") ? "_blank" : undefined}
                      rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="min-w-0">{content}</div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          <div className="flex min-w-0 flex-col gap-4 lg:col-span-7">
            <div className="relative aspect-[16/10] w-full min-w-0 min-h-[300px] overflow-hidden border border-white/[0.08] bg-[#0a0a0a] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)] sm:min-h-[360px] md:min-h-[420px] lg:min-h-[480px]">
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

              <iframe
                title={c.mapIframeTitle}
                src={c.googleMapsEmbedSrc}
                className="absolute inset-0 h-full w-full border-0 [color-scheme:light]"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a
              href={c.googleMapsOpenUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex max-w-full min-w-0 shrink-0 items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/60 transition-colors hover:text-[#E50914]"
            >
              <MapPin className="h-3.5 w-3.5 shrink-0 text-[#E50914]" aria-hidden />
              <span>{c.openInGoogleMaps}</span>
              <ExternalLink className="h-3 w-3 shrink-0 opacity-70 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
            </a>
          </div>
        </motion.div>
      </SiteContainer>
    </section>
  );
}
