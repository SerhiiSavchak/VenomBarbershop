"use client";

import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Space } from "@/components/sections/Space";
import { Gallery } from "@/components/sections/Gallery";
import { Reviews } from "@/components/sections/Reviews";
import { Contact } from "@/components/sections/Contact";
import { Masters } from "@/components/sections/Masters";
import { Footer } from "@/components/sections/Footer";
import { SectionDivider } from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      <Header />
      <Hero />

      <SectionDivider variant="brand" />
      <About />
      <SectionDivider variant="subtle" />
      <Process />
      <SectionDivider variant="brand" />
      <Services />
      <SectionDivider variant="gradient" />
      <Space />
      <SectionDivider variant="subtle" />
      <Masters />
      <SectionDivider variant="brand" />
      <Gallery />
      <SectionDivider variant="subtle" />
      <Reviews />
      <SectionDivider variant="gradient" />
      <Contact />

      <Footer />
    </main>
  );
}
