import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { services } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Uebersicht aller vorbereiteten Leistungsseiten fuer Baumpflege, Baumfaellung, Spezialtechnik, EPS und Beratung.",
};

const serviceHeroHighlights = [
  "Baumpflege bis Spezialfaellung",
  "Technik, Arbeitsbuehnen und Zugangskraft",
  "Ruhrgebiet, Bottrop und Castrop-Rauxel",
];

const serviceGallery = [
  {
    image: "/assets/leistungen-1.webp",
    alt: "Baumdienst Enbergs mit Fahrzeug und Arbeitsbuehne im Einsatz.",
    label: "Spezialfaellung",
    className: "services-media-tile services-media-tile--wide",
    objectPosition: "center center",
  },
  {
    image: "/assets/leistungen-2.webp",
    alt: "Fahrzeug von Baumdienst Enbergs mit Kranaufbau im Einsatzgebiet.",
    label: "Maschinenlogistik",
    className: "services-media-tile services-media-tile--standard",
    objectPosition: "center center",
  },
  {
    image: "/assets/leistungen-3.webp",
    alt: "Mitarbeiter von Baumdienst Enbergs fuehrt Baumpflege an einem Stamm mit Arbeitsbuehne aus.",
    label: "Baumpflege",
    className: "services-media-tile services-media-tile--tall",
    objectPosition: "center center",
  },
  {
    image: "/assets/leistungen-4.webp",
    alt: "Arbeitskorb und Hubsteiger in der Baumkrone bei einem Einsatz.",
    label: "Hubsteiger",
    className: "services-media-tile services-media-tile--tall",
    objectPosition: "center center",
  },
  {
    image: "/assets/leistungen-5.webp",
    alt: "Kronenarbeit aus der Arbeitsbuehne bei Baumdienst Enbergs.",
    label: "Kronenarbeit",
    className: "services-media-tile services-media-tile--standard",
    objectPosition: "center center",
  },
  {
    image: "/assets/leistungen-6.webp",
    alt: "Gelbe Arbeitsbuehne im Gruenbestand bei einem Baumdienst-Einsatz.",
    label: "Zugangstechnik",
    className: "services-media-tile services-media-tile--wide",
    objectPosition: "center center",
  },
] as const;

export default function ServicesPage() {
  return (
    <section className="section">
      <div className="container stack-xl">
        <div className="services-stage">
          <div className="hero-panel hero-panel--wide">
            <p className="eyebrow">Leistungen</p>
            <h1 className="page-title">Alle Leistungsbereiche jetzt mit echten Einsatzbildern im ersten Blick.</h1>
            <p className="page-copy">
              Die Leistungsseite zeigt nicht nur, was Enbergs anbietet, sondern bringt die Arbeit
              mit Technik, Baumkronen, Hubsteigern und echter Einsatzatmosphaere direkt in die
              Flaeche. So wirkt die Uebersicht sofort konkreter und glaubwuerdiger.
            </p>

            <div className="hero-points services-points">
              {serviceHeroHighlights.map((highlight) => (
                <span key={highlight}>{highlight}</span>
              ))}
            </div>

            <div className="button-row">
              <Link className="button" href="/anfrage-vorbereiten">
                Jetzt Anfrage vorbereiten
              </Link>
              <Link className="button button--ghost" href="/kontakt#anfrage">
                Leistung anfragen
              </Link>
            </div>
          </div>

          <div className="services-media-wall" aria-label="Einsatzbilder der Leistungen">
            {serviceGallery.map((item) => (
              <article key={item.image} className={item.className}>
                <Image
                  alt={item.alt}
                  fill
                  sizes="(max-width: 720px) 50vw, (max-width: 1040px) 33vw, 24vw"
                  src={item.image}
                  style={{ objectPosition: item.objectPosition }}
                />
                <span className="services-media-tile__label">{item.label}</span>
              </article>
            ))}
          </div>
        </div>

        <SectionHeading
          eyebrow="Leistungsuebersicht"
          title="Jede Kernleistung ist als eigenstaendige Seite aufgebaut."
          body="Damit lassen sich regionale Keywords, FAQs und Conversion-Elemente pro Thema ausbauen statt alles auf einer Sammelseite zu verstecken."
        />

        <div className="card-grid card-grid--services">
          {services.map((service) => (
            <article key={service.slug} className="card service-card">
              <p className="eyebrow">{service.shortTitle}</p>
              <h2>{service.title}</h2>
              <p>{service.intro}</p>
              <div className="chip-row">
                {service.highlights.map((highlight) => (
                  <span key={highlight} className="chip">
                    {highlight}
                  </span>
                ))}
              </div>
              <Link href={`/leistungen/${service.slug}`}>Details ansehen</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
