"use client";

import { motion } from "framer-motion";
import { RevealSection, LiquidBackgroundStain } from "@/components/liquid/LiquidElements";
import { Button } from "@/components/ui/Button";
import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from "lucide-react";

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
      <LiquidBackgroundStain className="-bottom-40 -left-40 opacity-30" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent-red/10 rounded-full blur-[200px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - CTA */}
          <RevealSection>
            <span className="inline-block px-4 py-1.5 bg-accent-red/10 border border-accent-red/30 text-accent-red text-xs font-semibold uppercase tracking-widest mb-6">
              Book Now
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              READY FOR A<br />
              <span className="text-accent-red">SHARPER LOOK?</span>
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
              <a href="#" className="w-10 h-10 bg-background-card rounded-full flex items-center justify-center hover:bg-accent-red/20 transition-colors group">
                <Instagram className="w-5 h-5 text-foreground-muted group-hover:text-accent-red transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 bg-background-card rounded-full flex items-center justify-center hover:bg-accent-red/20 transition-colors group">
                <Facebook className="w-5 h-5 text-foreground-muted group-hover:text-accent-red transition-colors" />
              </a>
            </div>
          </RevealSection>

          {/* Right side - Contact info + Map */}
          <RevealSection delay={0.2}>
            <div className="glass rounded-lg p-6 md:p-8">
              {/* Map placeholder */}
              <div className="relative aspect-video rounded-lg overflow-hidden mb-6 bg-gradient-to-br from-background-tertiary to-background-card">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 mx-auto mb-2 text-accent-red" />
                    <p className="text-foreground-muted text-sm">Interactive Map</p>
                  </div>
                </div>
                {/* Red accent overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-accent-red/10 to-transparent" />
              </div>

              {/* Contact details */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 bg-background-card rounded-full flex-shrink-0 flex items-center justify-center group-hover:bg-accent-red/10 transition-colors">
                      <item.icon className="w-5 h-5 text-accent-red" />
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
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
