"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SymbioteAccent } from "@/components/symbiote/SymbioteLayer";

const services = [
  {
    name: "Haircut",
    price: "$35",
    tag: "Signature",
    duration: "45 MIN",
    blurb: "Bone-structure mapping, weight removal, and a silhouette that holds under studio light.",
    image:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1600&q=88&auto=format&fit=crop",
  },
  {
    name: "Beard Architecture",
    price: "$28",
    tag: "Sculpt",
    duration: "35 MIN",
    blurb: "Lines carved with tension — density control, temperature, and finish that reads on camera.",
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=1600&q=88&auto=format&fit=crop",
  },
  {
    name: "Total Look",
    price: "$58",
    tag: "Ritual",
    duration: "75 MIN",
    blurb: "Cut + beard + thermal sequence. A single narrative from chair to mirror — no compromise.",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1600&q=88&auto=format&fit=crop",
  },
  {
    name: "Straight Razor",
    price: "$32",
    tag: "Classic",
    duration: "40 MIN",
    blurb: "Slow passes, obsidian gloss skin, and silence broken only by steel on strop.",
    image:
      "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=1600&q=88&auto=format&fit=crop",
  },
];

function ServiceBlock({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const imageRight = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] as const }}
      className="relative min-h-[min(88vh,820px)] border-b border-white/[0.06] bg-[#030303]"
    >
      <SymbioteAccent band={index % 2 === 0 ? "top" : "mid"} position={imageRight ? "bottom-left" : "bottom-right"} />

      <div
        className="mx-auto grid h-full max-w-[1600px] lg:min-h-[min(88vh,820px)] lg:grid-cols-12"
      >
        <div
          className={`relative z-[2] flex flex-col justify-end gap-6 px-6 py-16 md:px-10 lg:col-span-5 lg:justify-center lg:py-24 lg:pl-14 xl:pl-20 ${
            imageRight ? "lg:order-1" : "lg:order-2 lg:pl-10"
          }`}
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.38em] text-accent-red">{service.tag}</span>
          <h3 className="font-display text-4xl font-bold uppercase tracking-tight text-white md:text-5xl xl:text-6xl">
            {service.name}
          </h3>
          <p className="max-w-md text-sm leading-relaxed text-white/65 md:text-base">{service.blurb}</p>
          <div className="flex flex-wrap items-baseline gap-6">
            <span className="font-display text-3xl font-bold text-accent-red md:text-4xl">{service.price}</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-foreground-muted">
              {service.duration}
            </span>
          </div>
          <a
            href="#contact"
            className="inline-flex w-max items-center border border-white/25 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:border-white/50 hover:bg-white/[0.06]"
          >
            Reserve
          </a>
        </div>

        <div
          className={`relative min-h-[52vh] lg:col-span-7 lg:min-h-full ${imageRight ? "lg:order-2" : "lg:order-1"}`}
        >
          <motion.div
            initial={{ scale: 1.12, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] as const }}
            className="absolute inset-0"
          >
            <Image
              src={service.image}
              alt={service.name}
              fill
              sizes="(max-width:1024px) 100vw, 58vw"
              className="object-cover contrast-[1.08] saturate-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/55 lg:bg-gradient-to-r lg:from-black/90 lg:via-black/25 lg:to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_70%_50%,rgba(209,18,27,0.16)_0%,transparent_55%)] mix-blend-screen opacity-80" />
          </motion.div>
          <div className="glass absolute bottom-6 left-6 right-6 z-[3] border-white/10 p-4 md:bottom-10 md:left-10 md:right-auto md:max-w-sm">
            <p className="text-[10px] uppercase tracking-[0.25em] text-foreground-muted">Obsidian standard</p>
            <p className="mt-2 text-sm text-white/85">Consultation included · Hot towel finish on request</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Services() {
  return (
    <section id="services" className="relative bg-black">
      <div className="mx-auto max-w-[1600px] px-6 pb-6 pt-24 md:px-10 md:pt-32 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] as const }}
          className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.35em] text-accent-red">
              Services
            </span>
            <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-white md:text-5xl lg:text-6xl">
              Engineered <span className="ml-2 text-stroke-red md:ml-4">Looks</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-foreground-muted md:text-right">
            Full-bleed sessions — not a menu grid. Each block is a campaign frame: light, leather, and tension.
          </p>
        </motion.div>
      </div>

      {/* Mobile: horizontal cinematic rails */}
      <div className="flex gap-4 overflow-x-auto px-5 pb-20 pt-4 scrollbar-hide snap-x snap-mandatory md:hidden">
        {services.map((service, index) => (
          <motion.div
            key={service.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06, duration: 0.6 }}
            className="relative w-[min(88vw,400px)] shrink-0 snap-center overflow-hidden border border-white/10 bg-[#080808]"
          >
            <SymbioteAccent band="mid" position="bottom-right" className="opacity-70" />
            <div className="relative aspect-[4/5] w-full">
              <Image src={service.image} alt={service.name} fill className="object-cover" sizes="90vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            </div>
            <div className="space-y-3 p-5">
              <h3 className="font-display text-2xl font-bold uppercase text-white">{service.name}</h3>
              <p className="text-xs leading-relaxed text-white/65">{service.blurb}</p>
              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <span className="font-display text-2xl font-bold text-accent-red">{service.price}</span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-foreground-muted">{service.duration}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="hidden md:block">{services.map((s, i) => <ServiceBlock key={s.name} service={s} index={i} />)}</div>
    </section>
  );
}
