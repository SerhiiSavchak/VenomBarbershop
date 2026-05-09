"use client";

import { motion } from "framer-motion";
import { RevealSection, LiquidDivider, LiquidImageFrame, RedGlow } from "@/components/liquid/LiquidElements";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export function Space() {
  return (
    <section id="space" className="relative py-20 md:py-28 bg-black overflow-hidden">
      {/* Background elements */}
      <RedGlow intensity="medium" position="left" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-accent-cyan/5 rounded-full blur-[200px]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section header - editorial split */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-12 md:mb-16">
          <RevealSection>
            <span className="text-accent-red text-xs font-bold uppercase tracking-[0.2em] mb-3 block">Our Story</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[0.9]">
              NIU YOUR<br />STORY
            </h2>
          </RevealSection>
          
          <RevealSection delay={0.1} className="lg:pb-2">
            <p className="text-foreground-muted text-sm md:text-base leading-relaxed max-w-md">
              More than a barbershop. We craft experiences in a cinematic atmosphere where every detail speaks of mastery and precision.
            </p>
            <Button variant="primary" className="mt-6">
              Explore Our Space
            </Button>
          </RevealSection>
        </div>

        {/* Asymmetric editorial image layout with liquid frame */}
        <LiquidImageFrame className="relative">
          <div className="grid md:grid-cols-12 gap-3 md:gap-4">
            {/* Large main image - takes 7 columns */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-7"
            >
              <div className="relative aspect-[4/5] md:aspect-[4/5] overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=900&q=80"
                  alt="Cinematic barbershop interior"
                  fill
                  className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                />
                {/* Red volumetric overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent-red/25 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                
                {/* Floating label */}
                <div className="absolute bottom-6 left-6">
                  <span className="text-[10px] text-accent-red font-bold uppercase tracking-[0.15em]">Main Hall</span>
                  <h3 className="font-display text-xl md:text-2xl font-bold mt-1">Premium Experience</h3>
                </div>

                {/* Cyan edge accent */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent-cyan/50 via-transparent to-transparent" />
              </div>
            </motion.div>

            {/* Right column - 2 stacked images taking 5 columns */}
            <div className="md:col-span-5 flex flex-col gap-3 md:gap-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="flex-1"
              >
                <div className="relative h-full min-h-[200px] md:min-h-0 aspect-[4/3] md:aspect-auto overflow-hidden group">
                  <Image
                    src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&q=80"
                    alt="Barber chair detail"
                    fill
                    className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-bl from-accent-red/20 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[9px] text-foreground-muted uppercase tracking-wider">Vintage Chairs</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="flex-1"
              >
                <div className="relative h-full min-h-[200px] md:min-h-0 aspect-[4/3] md:aspect-auto overflow-hidden group">
                  <Image
                    src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=80"
                    alt="Styling products"
                    fill
                    className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tl from-accent-red/20 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[9px] text-foreground-muted uppercase tracking-wider">Premium Products</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </LiquidImageFrame>
      </div>

      {/* Liquid divider to next section */}
      <LiquidDivider className="mt-16 md:mt-24" />
    </section>
  );
}
