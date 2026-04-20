import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import {
  machineAdvantages,
  machines,
  machineUseCases,
} from "@/data/site-content";

export const metadata: Metadata = {
  title: "Maschinenpark",
  description:
    "Maschinenpark-Seite mit echten Einsatzbildern, Hochkant-Video und technischer Positionierung fuer Baumdienst Enbergs.",
};

const machineHighlights = [
  "Hubsteiger und Arbeitsbuehnen",
  "Spezialfaellung mit Greiftechnik",
  "Wurzelstockfraesen und Rodung",
  "Sicherer Zugang in engen Lagen",
];

const machineGallery = [
  {
    eyebrow: "Arbeitsbuehne",
    title: "Schnittarbeiten direkt am starken Stamm mit kontrolliertem Zugang.",
    text:
      "Das Bild zeigt klar, wie Enbergs bei grossen Staerken nicht improvisiert, sondern mit sicherer Hebetechnik und sauberem Arbeitsraum arbeitet.",
    image: "/assets/baumarbeiten-2.jpg",
    alt: "Mitarbeiter von Baumdienst Enbergs arbeitet von einer Arbeitsbuehne aus an einem grossen Baum.",
    objectPosition: "center center",
    featured: true,
  },
  {
    eyebrow: "Raupenlift",
    title: "Zugangstechnik fuer Kronenbereiche, wenn Standflaeche und Reichweite zaehlen.",
    text:
      "Der Raupenlift macht sichtbar, dass auch empfindliche oder schwer erreichbare Einsatzorte mit passender Technik vorbereitet werden koennen.",
    image: "/assets/raupe_slider-1.jpg",
    alt: "Gelbe Raupen-Arbeitsbuehne im Einsatzbereich unter Baeumen.",
    objectPosition: "center center",
    featured: false,
  },
  {
    eyebrow: "Greiftechnik",
    title: "Maschinenpower fuer Demontage, Materialhandling und saubere Abwicklung.",
    text:
      "Die Greifzange transportiert direkt, dass Enbergs auch technische Spezialfaelle mit Lasten, Abschnitten und engen Zonen kontrolliert umsetzt.",
    image: "/assets/zange_slider-1.webp",
    alt: "Greifzange bei einer Baumdemontage im Maschinenpark von Baumdienst Enbergs.",
    objectPosition: "center center",
    featured: false,
  },
] as const;

export default function MachinesPage() {
  return (
    <section className="section">
      <div className="container stack-xl">
        <div className="machine-stage">
          <div className="hero-panel hero-panel--wide">
            <p className="eyebrow">Maschinenpark</p>
            <h1 className="page-title">
              Technik, Bilder und echte Einsatzmomente statt abstrakter Leistungsversprechen.
            </h1>
            <p className="page-copy">
              Der Maschinenpark wird hier nicht nur beschrieben, sondern mit realen Eindruecken
              sichtbar gemacht. Das schafft Vertrauen fuer Spezialfaellungen, enge Wohnlagen,
              kommunale Einsaetze und Flaechenprojekte.
            </p>
            <div className="hero-points machine-points">
              {machineHighlights.map((highlight) => (
                <span key={highlight}>{highlight}</span>
              ))}
            </div>
          </div>

          <article className="machine-video-card">
            <div className="stack">
              <p className="eyebrow">Einsatzclip</p>
              <h2>Hochkant-Video fuer mobile Nutzer direkt auf der Seite.</h2>
              <p>
                Der neue 9:16-Clip bringt Hoehe, Bestand und Einsatzumfeld in Bewegung. Gerade auf
                dem Smartphone wirkt der Maschinenpark damit deutlich echter und praesentabler.
              </p>
            </div>

            <div className="machine-video-shell">
              <video
                autoPlay
                className="machine-video"
                controls
                loop
                muted
                playsInline
                poster="/assets/baumansicht-1-poster.png"
                preload="metadata"
              >
                <source src="/assets/baumansicht-1.mp4" type="video/mp4" />
              </video>
            </div>

            <p className="card-note">
              Echter Vertikalclip aus dem Bestand fuer eine glaubwuerdige Mobile-Darstellung.
            </p>
          </article>
        </div>

        <div className="stack-lg">
          <SectionHeading
            eyebrow="Einsatzbilder"
            title="Maschinenpark mit echten Bildern statt reiner Textflaeche"
            body="Die Bilder zeigen Zugangstechnik, Arbeitsbuehne und Greiftechnik direkt im Einsatz und machen die Seite im Maschinenpark sofort konkreter."
          />

          <div className="machine-media-grid">
            {machineGallery.map((item) => (
              <article
                key={item.title}
                className={`machine-media-card${item.featured ? " machine-media-card--feature" : ""}`}
              >
                <div className="machine-media-card__image">
                  <Image
                    alt={item.alt}
                    fill
                    sizes={
                      item.featured
                        ? "(max-width: 1040px) 100vw, 52vw"
                        : "(max-width: 1040px) 100vw, 32vw"
                    }
                    src={item.image}
                    style={{ objectPosition: item.objectPosition }}
                  />
                </div>
                <div className="machine-media-card__content">
                  <p className="eyebrow">{item.eyebrow}</p>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="split-layout">
          <article className="card">
            <SectionHeading
              eyebrow="Kundenvorteil"
              title="Warum der Maschinenpark auf der Website eine tragende Rolle spielt"
            />
            <ul className="list">
              {machineAdvantages.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}:</strong> {item.text}
                </li>
              ))}
            </ul>
          </article>

          <article className="card">
            <SectionHeading
              eyebrow="Einsatzbilder"
              title="Typische Situationen, in denen Technik den Unterschied macht"
            />
            <ul className="list">
              {machineUseCases.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}:</strong> {item.text}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="card-grid machine-card-grid">
          {machines.map((machine) => (
            <article key={machine.name} className="card">
              <p className="eyebrow">Maschine</p>
              <h2>{machine.name}</h2>
              <p>{machine.purpose}</p>
              <p className="card-highlight">{machine.benefit}</p>
              <ul className="list">
                {machine.specs.map((spec) => (
                  <li key={spec}>{spec}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="cta-banner">
          <div>
            <p className="eyebrow">Technik anfragen</p>
            <h2>Die Seite verweist jetzt sichtbar auf Technik, Einsatzbilder und einen echten Clip aus dem Bestand.</h2>
            <p>
              Damit wirkt der Maschinenpark nicht mehr wie ein Textblock, sondern wie ein echter
              Leistungsbereich mit nachvollziehbaren Einsatzsituationen.
            </p>
          </div>
          <Link className="button" href="/kontakt#anfrage">
            Einsatz mit Technik anfragen
          </Link>
        </div>
      </div>
    </section>
  );
}
