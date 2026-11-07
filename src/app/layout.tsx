import type { Metadata } from "next";
import "@fontsource/barlow-condensed/400.css";
import "@fontsource/barlow-condensed/500.css";
import "@fontsource/barlow-condensed/600.css";
import "@fontsource/barlow-condensed/700.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";

import { MobileCtaBar } from "@/components/mobile-cta-bar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { company, siteUrl } from "@/data/site-content";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} | Baumdienst im Ruhrgebiet`,
    template: `%s | ${company.name}`,
  },
  description:
    "Baumpflege, Baumfällung und Spezialtechnik von Baumdienst Enbergs in Bottrop, Castrop-Rauxel und im Ruhrgebiet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
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
