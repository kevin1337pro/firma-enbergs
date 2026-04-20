"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

const heroSlides = [
  {
    eyebrow: "Baumpflege",
    title: "Reale Einsaetze statt Platzhalteroptik.",
    copy:
      "Das neue Hero-Motiv zeigt Fahrzeug, Zugang und Arbeitsrealitaet direkt im ersten Sichtbereich der Startseite.",
    facts: ["Vor-Ort-Eindruck", "Technik sichtbar", "Schneller Vertrauensaufbau"],
    objectPosition: "center 26%",
  },
  {
    eyebrow: "Spezialfaellung",
    title: "Zugang, Logistik und Sicherheit sofort im Blick.",
    copy:
      "Die Slide transportiert schneller, dass Enbergs nicht nur pflegt, sondern auch anspruchsvolle Lagen mit Maschinenpower loest.",
    facts: ["Enge Zufahrten", "Sensible Flaechen", "Sauberer Ablauf"],
    objectPosition: "center 40%",
  },
  {
    eyebrow: "Ruhrgebiet",
    title: "Vom Privatgarten bis zur Gewerbeflaeche klar lesbar.",
    copy:
      "Bild, Aussagen und CTA arbeiten zusammen und fuehren Besucher direkter zur vorbereiteten Anfrage.",
    facts: ["Bottrop", "Kirchhellen", "Castrop-Rauxel"],
    objectPosition: "center 54%",
  },
] as const;

export function HeroSlide() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length);
    }, 5200);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  const activeSlide = heroSlides[activeIndex];

  return (
    <aside className="hero-slide" aria-label="Bildbereich der Startseite">
      <div className="hero-slide__media" aria-hidden="true">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.title}
            className={`hero-slide__item${index === activeIndex ? " is-active" : ""}`}
          >
            <Image
              alt="Baumdienst Enbergs mit Fahrzeug und Technik im Einsatz"
              className="hero-slide__image"
              fill
              priority={index === 0}
              sizes="(max-width: 1040px) 100vw, 38vw"
              src="/assets/back-foto-1.webp"
              style={{ objectPosition: slide.objectPosition }}
            />
            <div className="hero-slide__scrim" />
          </div>
        ))}
      </div>

      <div className="hero-slide__top">
        <span className="hero-slide__badge">Im Einsatz vor Ort</span>
        <div className="hero-slide__dots" aria-label="Hero-Slides">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.title}
              aria-label={`Slide ${index + 1}: ${slide.title}`}
              aria-pressed={index === activeIndex}
              className={`hero-slide__dot${index === activeIndex ? " is-active" : ""}`}
              onClick={() => setActiveIndex(index)}
              type="button"
            />
          ))}
        </div>
      </div>

      <div className="hero-slide__content" aria-live="polite">
        <p className="eyebrow hero-slide__eyebrow">{activeSlide.eyebrow}</p>
        <h2>{activeSlide.title}</h2>
        <p>{activeSlide.copy}</p>
        <div className="hero-slide__facts">
          {activeSlide.facts.map((fact) => (
            <span key={fact}>{fact}</span>
          ))}
        </div>
        <Link className="button button--small hero-slide__cta" href="/anfrage-vorbereiten">
          Jetzt Anfrage vorbereiten
        </Link>
      </div>
    </aside>
  );
}
