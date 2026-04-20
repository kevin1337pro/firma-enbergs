import Image from "next/image";
import Link from "next/link";

import { company, locations, regions } from "@/data/site-content";
import { SponsorGrid } from "@/components/sponsor-grid";

function InstagramIcon() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M13.3 8.2h1.8V5.9h-1.8c-2.1 0-3.3 1.3-3.3 3.5v1.6H8.4v2.3H10v5h2.4v-5h2.1l0.4-2.3h-2.5V9.7c0-.9 0.3-1.5 0.9-1.5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

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

          <div className="footer-socials" aria-label="Social Media">
            <a
              className="footer-social"
              href="https://www.instagram.com/baumdienst_enbergs/"
              rel="noreferrer"
              target="_blank"
            >
              <span className="footer-social__icon">
                <InstagramIcon />
              </span>
              <span>Instagram</span>
            </a>

            <a
              className="footer-social"
              href="https://www.facebook.com/BaumdienstEnbergs/"
              rel="noreferrer"
              target="_blank"
            >
              <span className="footer-social__icon">
                <FacebookIcon />
              </span>
              <span>Facebook</span>
            </a>
          </div>
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
