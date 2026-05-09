import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Space } from "@/components/sections/Space";
import { Process } from "@/components/sections/Process";
import { Masters } from "@/components/sections/Masters";
import { Standards } from "@/components/sections/Standards";
import { Gallery } from "@/components/sections/Gallery";
import { Reviews } from "@/components/sections/Reviews";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { LiquidSectionDivider } from "@/components/liquid/LiquidElements";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <LiquidSectionDivider />
      <Services />
      <LiquidSectionDivider inverted />
      <Space />
      <LiquidSectionDivider />
      <Process />
      <LiquidSectionDivider inverted />
      <Masters />
      <LiquidSectionDivider />
      <Standards />
      <LiquidSectionDivider inverted />
      <Gallery />
      <LiquidSectionDivider />
      <Reviews />
      <LiquidSectionDivider inverted />
      <Contact />
      <Footer />
    </main>
  );
}
