import type { Metadata } from "next";
import { Barlow_Condensed, IBM_Plex_Sans } from "next/font/google";

import { MobileCtaBar } from "@/components/mobile-cta-bar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { company, siteUrl } from "@/data/site-content";

import "./globals.css";

const displayFont = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const bodyFont = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} | Baumdienst im Ruhrgebiet`,
    template: `%s | ${company.name}`,
  },
  description:
    "Modernes Website-Grundgeruest fuer Baumdienst Enbergs mit Leistungen, Projekten, Maschinenpark, Karriere, Einsatzgebieten und Kontakt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        <div className="page-chrome">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <MobileCtaBar />
        </div>
      </body>
    </html>
  );
}
