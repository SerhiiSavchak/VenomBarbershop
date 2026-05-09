"use client";

import { motion } from "framer-motion";
import { RevealSection, LiquidStain, RedGlow, LiquidImageFrame } from "@/components/liquid/LiquidElements";
import { Button } from "@/components/ui/Button";
import { MapPin, Clock, Phone, Instagram } from "lucide-react";
import Image from "next/image";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-black overflow-hidden">
      {/* Background liquid stain */}
      <LiquidStain position="center" className="opacity-50" />
      <RedGlow intensity="high" position="center" />
      
      {/* Additional red ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-red/15 rounded-full blur-[200px]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Powerful CTA - Second Hero */}
          <RevealSection>
            <span className="inline-block px-4 py-1.5 bg-accent-red text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              Book Now
            </span>
            
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black leading-[0.85] tracking-tight mb-6">
              READY FOR A<br />
              <span className="text-stroke-red">SHARPER LOOK?</span>
            </h2>
            
            <p className="text-foreground-muted text-base md:text-lg mb-8 max-w-md leading-relaxed">
              Experience the difference of premium grooming. Book your appointment today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button variant="primary" size="lg">
                Book Appointment
              </Button>
              <Button variant="secondary" size="lg">
                Call Us Now
              </Button>
            </div>

            {/* Contact details - compact */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-accent-red" />
                </div>
                <div>
                  <p className="text-[10px] text-foreground-muted uppercase tracking-wider">Location</p>
                  <p className="text-sm">Downtown District</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
                  <Clock className="w-4 h-4 text-accent-red" />
                </div>
                <div>
                  <p className="text-[10px] text-foreground-muted uppercase tracking-wider">Hours</p>
                  <p className="text-sm">10AM - 9PM</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4 text-accent-red" />
                </div>
                <div>
                  <p className="text-[10px] text-foreground-muted uppercase tracking-wider">Phone</p>
                  <p className="text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
                  <Instagram className="w-4 h-4 text-accent-red" />
                </div>
                <div>
                  <p className="text-[10px] text-foreground-muted uppercase tracking-wider">Instagram</p>
                  <p className="text-sm">@venombarber</p>
                </div>
              </div>
            </div>
          </RevealSection>

          {/* Right: Image with liquid frame */}
          <RevealSection delay={0.2}>
            <LiquidImageFrame className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-[4/5] max-w-md mx-auto lg:ml-auto"
              >
                <Image
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=700&q=80"
                  alt="Venom Barbershop"
                  fill
                  className="object-cover rounded"
                />
                {/* Dark vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/40" />
                
                {/* Red accent overlay */}
                <div className="absolute inset-0 bg-accent-red/15 mix-blend-overlay" />

                {/* Cyan edge accents */}
                <div className="absolute -top-2 left-8 w-20 h-0.5 bg-gradient-to-r from-accent-cyan/60 to-transparent" />
                <div className="absolute top-8 -left-2 w-0.5 h-16 bg-gradient-to-b from-accent-cyan/50 to-transparent" />
              </motion.div>
            </LiquidImageFrame>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
