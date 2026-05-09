"use client";

import { motion } from "framer-motion";
import { RevealSection, LiquidImageFrame } from "@/components/liquid/LiquidElements";
import { Button } from "@/components/ui/Button";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import Image from "next/image";

export function Contact() {
  return (
    <section id="contact" className="relative py-16 md:py-24 bg-[#050505] overflow-hidden">
      {/* Red ambient glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-accent-red/10 rounded-full blur-[200px]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: CTA Content */}
          <div className="lg:col-span-4">
            <RevealSection>
              <span className="text-accent-red text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
                Book Your Experience
              </span>
              
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black leading-[0.9] tracking-tight mb-4">
                READY FOR A<br />
                <span className="text-accent-red">SHARPER LOOK?</span>
              </h2>
              
              <p className="text-foreground-muted text-sm md:text-base mb-6 leading-relaxed">
                Experience the difference of premium grooming. Book your appointment today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="primary" size="lg">
                  Book Appointment
                </Button>
                <Button variant="secondary" size="lg">
                  Call Us Now
                </Button>
              </div>
            </RevealSection>
          </div>

          {/* Center: Image with liquid frame */}
          <div className="lg:col-span-4">
            <RevealSection delay={0.1}>
              <LiquidImageFrame>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative aspect-[3/4] max-w-xs mx-auto"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80"
                    alt="Barbershop interior"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/30" />
                  <div className="absolute inset-0 bg-accent-red/10 mix-blend-overlay" />
                  
                  {/* Red glow at top */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-2/3 h-16 bg-accent-red/30 blur-[50px]" />
                </motion.div>
              </LiquidImageFrame>
            </RevealSection>
          </div>

          {/* Right: Contact details + Map placeholder */}
          <div className="lg:col-span-4">
            <RevealSection delay={0.2}>
              {/* Contact details */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-accent-red mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[10px] text-foreground-muted uppercase tracking-wider mb-0.5">Address</p>
                    <p className="text-sm">123 Premium Street<br />Downtown District</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-accent-red mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[10px] text-foreground-muted uppercase tracking-wider mb-0.5">Hours</p>
                    <p className="text-sm">Mon - Sat: 9AM - 9PM<br />Sun: 10AM - 6PM</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-accent-red mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[10px] text-foreground-muted uppercase tracking-wider mb-0.5">Phone</p>
                    <p className="text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-accent-red mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[10px] text-foreground-muted uppercase tracking-wider mb-0.5">Email</p>
                    <p className="text-sm">book@obsidianbarbershop.com</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="relative aspect-video bg-[#0a0a0a] rounded overflow-hidden border border-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] to-[#111]">
                  {/* Grid lines */}
                  <div className="absolute inset-0 opacity-10">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div key={i} className="absolute w-full h-px bg-white" style={{ top: `${(i + 1) * 12.5}%` }} />
                    ))}
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div key={i} className="absolute w-px h-full bg-white" style={{ left: `${(i + 1) * 12.5}%` }} />
                    ))}
                  </div>
                  
                  {/* Map pin */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <MapPin className="w-8 h-8 text-accent-red" />
                      <div className="absolute -inset-4 bg-accent-red/20 rounded-full animate-ping" />
                    </div>
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </div>
    </section>
  );
}
