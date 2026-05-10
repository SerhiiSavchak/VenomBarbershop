import type { Metadata } from "next";
import { Bebas_Neue, Montserrat, Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OBSIDIAN | Sharp Looks. Bold Ink.",
  description:
    "Premium cinematic barbershop. Precision cuts, editorial atmosphere, and a luxury grooming ritual.",
  keywords: ["barbershop", "haircut", "beard trim", "grooming", "premium", "luxury"],
};

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${montserrat.variable} ${bebasNeue.variable} bg-background`}
    >
      <body className="min-h-screen bg-background font-[family-name:var(--font-montserrat)] text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
