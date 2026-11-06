"use client";

import Image from "next/image";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import "./hero-slide.css";

const slides = [
  { image: "/assets/einsatz-01.jpg", alt: "Baumpflege mit einer Hubarbeitsbühne in einer großen Baumkrone", label: "Baumpflege mit Weitblick" },
  { image: "/assets/einsatz-02.jpg", alt: "Hubarbeitsbühne bei der Arbeit unter einem großen Laubbaum", label: "Arbeiten in der Baumkrone" },
  { image: "/assets/einsatz-03.jpg", alt: "Gelbes Einsatzfahrzeug des Baumdienstes Enbergs", label: "Unser Team im Einsatz" },
  { image: "/assets/einsatz-04.jpg", alt: "Baumpfleger schneidet einen starken Ast von einer Arbeitsbühne aus", label: "Präzision am Baum" },
  { image: "/assets/einsatz-05.jpg", alt: "Arbeitsbühne zwischen den Ästen einer hohen Baumkrone", label: "Einblicke in unsere Arbeit" },
  { image: "/assets/einsatz-06.jpg", alt: "Baumpfleger in einer Arbeitsbühne an einer hohen Baumkrone", label: "Arbeiten mit Perspektive" },
  { image: "/assets/einsatz-07.jpg", alt: "Sonnenlicht fällt durch das Blätterdach auf eine Hubarbeitsbühne", label: "Leidenschaft für Bäume" },
] as const;

export function HeroSlide() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const previous = useRef(0);
  const touchStart = useRef(0);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || interacting || reducedMotion) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setActive((index) => (index + 1) % slides.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [paused, interacting, reducedMotion]);

  useEffect(() => {
    const incoming = imageRefs.current[active];
    const outgoing = imageRefs.current[previous.current];
    if (!incoming || !outgoing || active === previous.current) return;
    gsap.killTweensOf(imageRefs.current.filter(Boolean));
    gsap.set(imageRefs.current.filter((image) => image && image !== incoming && image !== outgoing), { autoAlpha: 0, zIndex: 0, clearProps: "clipPath" });
    if (reducedMotion) {
      gsap.set(outgoing, { autoAlpha: 0, zIndex: 0, clearProps: "clipPath" });
      gsap.set(incoming, { autoAlpha: 1, zIndex: 1, clearProps: "clipPath" });
    } else {
      gsap.set(outgoing, { autoAlpha: 1, zIndex: 1, clearProps: "clipPath" });
      gsap.set(incoming, { autoAlpha: 1, zIndex: 2 });
      gsap.fromTo(incoming, { clipPath: "inset(0 100% 0 0)" }, {
        clipPath: "inset(0 0% 0 0)", duration: 1.1, ease: "power3.inOut",
        onComplete: () => {
          gsap.set(outgoing, { autoAlpha: 0, zIndex: 0 });
          gsap.set(incoming, { zIndex: 1, clearProps: "clipPath" });
        },
      });
      const image = incoming.querySelector("img");
      if (image) gsap.fromTo(image, { scale: 1.1 }, { scale: 1, duration: 1.4, ease: "power2.out" });
    }
    previous.current = active;
  }, [active, reducedMotion]);

  const go = (offset: number) => setActive((index) => (index + offset + slides.length) % slides.length);

  return (
    <section
      className="work-gallery"
      aria-label="Einblicke in unsere Arbeit"
      aria-roledescription="Karussell"
      onMouseEnter={() => setInteracting(true)}
      onMouseLeave={() => setInteracting(false)}
      onFocus={() => setInteracting(true)}
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setInteracting(false); }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") { event.preventDefault(); go(-1); }
        if (event.key === "ArrowRight") { event.preventDefault(); go(1); }
      }}
      onTouchStart={(event) => { touchStart.current = event.changedTouches[0].clientX; }}
      onTouchEnd={(event) => { const distance = event.changedTouches[0].clientX - touchStart.current; if (Math.abs(distance) > 50) go(distance < 0 ? 1 : -1); }}
    >
      <div className="work-gallery__media">
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            ref={(element) => { imageRefs.current[index] = element; }}
            className={`work-gallery__image${index === 0 ? " work-gallery__image--initial" : ""}`}
            aria-hidden={index !== active}
          >
            <Image src={slide.image} alt={slide.alt} fill sizes="(max-width: 900px) 100vw, 55vw" priority={index === 0} />
          </div>
        ))}
      </div>
      <div className="work-gallery__shade" />
      <div className="work-gallery__top"><span className="work-gallery__spark">✳</span> Einblicke in unsere Arbeit</div>
      <div className="work-gallery__bottom">
        <div className="work-gallery__caption" aria-live="polite" aria-atomic="true">
          <span>Baumdienst Enbergs</span>
          <strong>{slides[active].label}</strong>
        </div>
        <div className="work-gallery__controls">
          <span className="work-gallery__count">{String(active + 1).padStart(2, "0")} <span>/</span> 07</span>
          <button type="button" onClick={() => go(-1)} aria-label="Vorheriges Bild">←</button>
          <button type="button" onClick={() => go(1)} aria-label="Nächstes Bild">→</button>
        </div>
      </div>
      <div className="work-gallery__navigation" aria-label="Bild auswählen">
        <div className="work-gallery__dots">
          {slides.map((slide, index) => (
            <button type="button" key={slide.image} aria-label={`Bild ${index + 1}: ${slide.label}`} aria-pressed={active === index} onClick={() => setActive(index)} />
          ))}
        </div>
        {!reducedMotion && <button type="button" className="work-gallery__pause" aria-label={paused ? "Automatischen Bildwechsel starten" : "Automatischen Bildwechsel pausieren"} aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? "▶" : "Ⅱ"}</button>}
      </div>
    </section>
  );
}
