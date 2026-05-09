"use client";

import { motion } from "framer-motion";
import { RevealSection, LiquidFrame } from "@/components/liquid/LiquidElements";
import { Button } from "@/components/ui/Button";
import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from "lucide-react";
import Image from "next/image";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "123 Premium Street, Downtown District",
    link: "#",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Sat: 9AM - 8PM | Sun: 10AM - 6PM",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    link: "tel:+15551234567",
  },
  {
    icon: Mail,
    label: "Email",
    value: "book@venombarbershop.com",
    link: "mailto:book@venombarbershop.com",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-[700px] h-[700px] bg-accent-red/10 rounded-full blur-[250px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent-cyan/5 rounded-full blur-[200px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - CTA */}
          <RevealSection>
            <span className="inline-block px-4 py-2 bg-accent-red text-white text-xs font-bold uppercase tracking-widest mb-6">
              Book Now
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-[0.9]">
              READY FOR A<br />
              <span className="text-stroke-red">SHARPER LOOK?</span>
            </h2>
            <p className="text-foreground-muted text-lg mb-8 max-w-lg leading-relaxed">
              Experience the difference of premium grooming. Book your appointment today and 
              discover why we are the choice of discerning gentlemen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg">
                Book Appointment
              </Button>
              <Button variant="secondary" size="lg">
                Call Us Now
              </Button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 mt-8 pt-8 border-t border-foreground/10">
              <span className="text-sm text-foreground-muted">Follow us:</span>
              <a href="#" className="w-10 h-10 bg-background-card rounded-full flex items-center justify-center hover:bg-accent-red transition-colors group">
                <Instagram className="w-5 h-5 text-foreground-muted group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 bg-background-card rounded-full flex items-center justify-center hover:bg-accent-red transition-colors group">
                <Facebook className="w-5 h-5 text-foreground-muted group-hover:text-white transition-colors" />
              </a>
            </div>
          </RevealSection>

          {/* Right side - Image + Contact info */}
          <RevealSection delay={0.2}>
            <div className="relative">
              {/* Liquid frame around image */}
              <LiquidFrame className="absolute -inset-6 md:-inset-8" />
              
              <div className="relative glass rounded-lg overflow-hidden">
                {/* Cinematic image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80"
                    alt="Venom Barbershop interior"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-card via-background-card/50 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-red/20 to-transparent" />
                </div>

                {/* Contact details */}
                <div className="p-6 md:p-8 space-y-4">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 bg-accent-red/10 rounded-full flex-shrink-0 flex items-center justify-center group-hover:bg-accent-red transition-colors">
                        <item.icon className="w-5 h-5 text-accent-red group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-xs text-foreground-muted uppercase tracking-wider mb-1">
                          {item.label}
                        </p>
                        {item.link ? (
                          <a href={item.link} className="text-foreground hover:text-accent-red transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
