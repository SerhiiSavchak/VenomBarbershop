import type { Metadata } from "next";
import Script from "next/script";
import { Bebas_Neue, Montserrat, Geist } from "next/font/google";
import { I18nProvider } from "@/components/providers/I18nProvider";
import "./globals.css";

const GTM_ID = "GTM-5GCQJ75F";

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
  title: "VENOM | Барбершоп у Львові",
  description:
    "Стрижка, борода та догляд у Львові. Онлайн-запис, зручний сервіс і команда, яка чітко формує образ.",
  keywords: ["barbershop", "haircut", "beard", "grooming", "VENOM", "Lviv", "Львів"],
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
      lang="uk"
      suppressHydrationWarning
      className={`${geistSans.variable} ${montserrat.variable} ${bebasNeue.variable} bg-background`}
    >
      {/* Google Tag Manager: strategy="beforeInteractive" инжектит скрипт в <head> */}
      <Script id="gtm" strategy="beforeInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>
      <body className="min-h-screen bg-background font-[family-name:var(--font-montserrat)] text-foreground antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
