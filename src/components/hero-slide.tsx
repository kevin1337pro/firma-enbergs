"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

const heroSlides = [
  {
    image: "/assets/back-foto-1.webp",
    alt: "Baumdienst Enbergs mit Fahrzeug und Technik im Einsatz",
    eyebrow: "Baumpflege",
    title: "Baumpflege mit echtem Einsatzbild statt Platzhalteroptik.",
    copy:
      "Das Hero startet mit einem realen Motiv aus dem Einsatzalltag und zeigt Fahrzeug, Zugang und Arbeitsrealitaet direkt im ersten Sichtbereich.",
    facts: ["Vor-Ort-Eindruck", "Technik sichtbar", "Schneller Vertrauensaufbau"],
    objectPosition: "center 26%",
  },
  {
    image: "/assets/raupe_slider-1.jpg",
    alt: "Hebebuehne bei Arbeiten in der Baumkrone",
    eyebrow: "Zugangstechnik",
    title: "Hebebuehne, Reichweite und Kronenarbeit direkt im Fokus.",
    copy:
      "Das neue Slider-Motiv transportiert sofort, dass Enbergs nicht nur faellt, sondern auch kontrolliert in sensiblen und hoeheren Kronenbereichen arbeitet.",
    facts: ["Hebebuehne", "Praeziser Zugang", "Kontrollierte Kronenpflege"],
    objectPosition: "center center",
  },
  {
    image: "/assets/zange_slider-1.webp",
    alt: "Greifzange und Saege bei einer Baumdemontage",
    eyebrow: "Maschinenpower",
    title: "Greifen, sichern und schneiden mit spuerbarer Maschinenpower.",
    copy:
      "Das dritte Slide zeigt die haertere Seite des Einsatzes und macht deutlicher, dass Enbergs auch technische Spezialfaelle und kraftvolle Demontagen sicher abwickelt.",
    facts: ["Greiftechnik", "Spezialfaellung", "Saubere Demontage"],
    objectPosition: "center center",
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
              alt={slide.alt}
              className="hero-slide__image"
              fill
              priority={index === 0}
              sizes="(max-width: 1040px) 100vw, 38vw"
              src={slide.image}
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
