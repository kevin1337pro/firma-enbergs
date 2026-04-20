import Image from "next/image";
import Link from "next/link";

import { company, locations, regions } from "@/data/site-content";
import { SponsorGrid } from "@/components/sponsor-grid";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__transport-shell">
        <div className="site-footer__transport-frame">
          <Image
            alt="Baumdienst Enbergs Transporter im Einsatz"
            className="site-footer__transport-image"
            height={1678}
            sizes="(max-width: 1200px) 100vw, 1200px"
            src="/assets/transporter-1.webp"
            width={3018}
          />
        </div>
      </div>

      <div className="container site-footer__grid">
        <div className="stack-sm">
          <p className="eyebrow">Standorte</p>
          <Image
            alt="Baumdienst Enbergs"
            className="footer-logo"
            height={367}
            src="/assets/logo_baumdienst_enbergs.png"
            width={300}
          />
          <h2 className="footer-title">{company.name}</h2>
          <p className="footer-note">
            Baumpflege, Baumfaellung und Spezialtechnik mit zwei Standorten im
            Ruhrgebiet.
          </p>
          {locations.map((location) => (
            <div key={location.title} className="footer-block">
              <strong>{location.title}</strong>
              <p>
                {location.address}
                <br />
                {location.city}
              </p>
            </div>
          ))}
        </div>

        <div className="stack-sm">
          <p className="eyebrow">Schnellzugriff</p>
          <div className="footer-links">
            <Link href="/leistungen">Leistungen</Link>
            <Link href="/projekte">Projekte</Link>
            <Link href="/maschinenpark">Maschinenpark</Link>
            <Link href="/karriere">Karriere</Link>
            <Link href="/kontakt">Kontakt</Link>
          </div>
        </div>

        <div className="stack-sm">
          <p className="eyebrow">Einsatzgebiete</p>
          <div className="footer-links">
            {regions.map((region) => (
              <Link key={region.slug} href={`/einsatzgebiete/${region.slug}`}>
                {region.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="stack-sm">
          <p className="eyebrow">Sponsornetz</p>
          <SponsorGrid compact />
          <p className="footer-note">{company.contactNotice}</p>
          <div className="footer-links">
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
