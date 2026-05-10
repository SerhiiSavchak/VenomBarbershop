"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useI18n } from "@/components/providers/I18nProvider";
import { cinematicEase, mobilePopEase, revealLiftEnter, revealLiftInitial, viewportReveal, sectionTitleInset } from "@/lib/motion";
import { useLgUp } from "@/lib/useLgUp";

const serviceImages = [
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1600&q=88&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=1600&q=88&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1600&q=88&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=1600&q=88&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1600&q=88&auto=format&fit=crop",
];

const mobileRailVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const mobileCardVariants = {
  hidden: { opacity: 0, y: 34, x: -14, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: { duration: 0.82, ease: mobilePopEase },
  },
};

function ServiceBlock({
  service,
  image,
  index,
  isLg,
}: {
  service: {
    name: string;
    tag: string;
    duration: string;
    blurb: string;
    price: string;
  };
  image: string;
  index: number;
  isLg: boolean;
}) {
  const { t } = useI18n();
  const imageRight = index % 2 === 0;

  return (
    <motion.article
      initial={isLg ? { opacity: 0, y: 46, x: 0 } : { opacity: 0, y: 32, x: -22 }}
      whileInView={revealLiftEnter}
      viewport={viewportReveal}
      transition={{ duration: 0.88, ease: cinematicEase }}
      className="relative min-h-[min(88vh,820px)] border-b border-white/[0.04] bg-[#030303]"
    >
      <div className="mx-auto grid h-full max-w-[1600px] lg:min-h-[min(88vh,820px)] lg:grid-cols-12">
        <div
          className={`relative z-[2] flex flex-col justify-end gap-6 px-6 py-16 md:px-10 lg:col-span-5 lg:justify-center lg:py-24 lg:pl-14 xl:pl-20 ${
            imageRight ? "lg:order-1" : "lg:order-2 lg:pl-10"
          }`}
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.38em] text-[#E50914]">{service.tag}</span>
          <h3 className="font-display text-4xl font-bold uppercase tracking-tight text-white md:text-5xl xl:text-6xl">{service.name}</h3>
          <p className="max-w-md text-sm leading-relaxed text-white/65 md:text-base">{service.blurb}</p>
          <div className="flex flex-wrap items-baseline gap-6">
            <span className="font-display text-3xl font-bold text-[#E50914] md:text-4xl">{service.price}</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-foreground-muted">{service.duration}</span>
          </div>
          <a
            href="#contact"
            className="site-cta-outline site-cta--compact self-start"
          >
            <span className="md:hidden">{t.services.reserveShort}</span>
            <span className="hidden md:inline">{t.services.reserve}</span>
          </a>
        </div>

        <div className={`relative min-h-[52vh] lg:col-span-7 lg:min-h-full ${imageRight ? "lg:order-2" : "lg:order-1"}`}>
          <motion.div
            initial={isLg ? { scale: 1.06, opacity: 0, y: 0 } : { scale: 1.09, opacity: 0, y: 24 }}
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            viewport={viewportReveal}
            transition={{ duration: 0.95, ease: cinematicEase }}
            className="absolute inset-0"
          >
            <Image
              src={image}
              alt={service.name}
              fill
              sizes="(max-width:1024px) 100vw, 58vw"
              className="object-cover contrast-[1.08] saturate-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/55 lg:bg-gradient-to-r lg:from-black/90 lg:via-black/25 lg:to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_70%_50%,rgba(209,18,27,0.16)_0%,transparent_55%)] opacity-80 mix-blend-screen" />
          </motion.div>
          <div className="absolute bottom-6 left-6 right-6 z-[3] border border-white/[0.05] bg-black/75 p-4 backdrop-blur-md md:bottom-10 md:left-10 md:right-auto md:max-w-sm">
            <p className="text-[10px] uppercase tracking-[0.25em] text-foreground-muted">{t.services.cardStandard}</p>
            <p className="mt-2 text-sm text-white/85">{t.services.cardStandardSub}</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Services() {
  const { t } = useI18n();
  const isLg = useLgUp();
  const services = t.services.items.map((item, i) => ({
    ...item,
    image: serviceImages[i] ?? serviceImages[0],
  }));

  return (
    <section id="services" className="relative bg-black">
      <div className="mx-auto max-w-[1600px] px-6 pb-6 pt-24 md:px-10 md:pt-32 lg:px-14">
        <motion.div
          initial={revealLiftInitial(isLg)}
          whileInView={revealLiftEnter}
          viewport={viewportReveal}
          transition={{ duration: 0.88, ease: cinematicEase }}
          className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div className={sectionTitleInset}>
            <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.35em] text-[#E50914]">{t.services.sectionEyebrow}</span>
            <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-white md:text-5xl lg:text-6xl">{t.services.sectionTitle}</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-foreground-muted md:text-right">{t.services.sectionLead}</p>
        </motion.div>
      </div>

      <motion.div
        className="flex gap-4 overflow-x-auto px-5 pb-20 pt-4 scrollbar-hide snap-x snap-mandatory md:hidden"
        initial="hidden"
        whileInView="show"
        viewport={viewportReveal}
        variants={mobileRailVariants}
      >
        {services.map((service) => (
          <motion.div
            key={service.name}
            variants={mobileCardVariants}
            className="relative w-[min(88vw,400px)] shrink-0 snap-center overflow-hidden bg-[#060606] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]"
          >
            <div className="relative aspect-[4/5] w-full">
              <Image src={service.image} alt={service.name} fill className="object-cover" sizes="90vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            </div>
            <div className="space-y-3 p-5">
              <h3 className="font-display text-2xl font-bold uppercase text-white">{service.name}</h3>
              <p className="text-xs leading-relaxed text-white/65">{service.blurb}</p>
              <div className="flex items-center justify-between border-t border-white/[0.06] pt-4">
                <span className="font-display text-2xl font-bold text-[#E50914]">{service.price}</span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-foreground-muted">{service.duration}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="hidden md:block">
        {services.map((s, i) => (
          <ServiceBlock key={s.name} service={s} image={s.image} index={i} isLg={isLg} />
        ))}
      </div>
    </section>
  );
}
