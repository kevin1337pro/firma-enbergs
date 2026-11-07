"use client";

import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import "./machine-explorer.css";

const equipment = [
  { id: "hubsteiger", label: "Hubsteiger", title: "Hoch hinaus. Sicher arbeiten.", description: "Arbeitsbühnen ermöglichen den Zugang zu Kronen und schaffen eine stabile Arbeitsposition für Pflege- und Schnittarbeiten.", image: "/assets/einsatz-02.jpg", alt: "Hubarbeitsbühne bei der Arbeit in einer Baumkrone", tags: ["Kronenpflege", "Zugangstechnik", "Baumarbeiten"] },
  { id: "greiftechnik", label: "Greiftechnik", title: "Kontrolliert Stück für Stück.", description: "Greiftechnik unterstützt das kontrollierte Abtragen und Bewegen von Baumabschnitten bei anspruchsvollen Einsätzen.", image: "/assets/zange_slider-1.webp", alt: "Greiftechnik bei einer Baumdemontage", tags: ["Spezialfällung", "Demontage", "Materialhandling"] },
  { id: "raupenlift", label: "Raupenlift", title: "Zugang mit Fingerspitzengefühl.", description: "Kompakte Zugangstechnik unterstützt Arbeiten an Bäumen, wenn die Bedingungen vor Ort besondere Planung verlangen.", image: "/assets/raupe_slider-1.jpg", alt: "Raupenarbeitsbühne im Einsatzbereich", tags: ["Arbeitsbühne", "Baumpflege", "Zugang"] },
  { id: "wurzel", label: "Wurzelstockfräse", title: "Platz für Neues schaffen.", description: "Nach einer Fällung lassen sich verbliebene Wurzelstöcke mit geeigneter Frästechnik bearbeiten.", image: "/assets/einsatz-03.jpg", alt: "Einsatzfahrzeug von Baumdienst Enbergs", tags: ["Wurzelstöcke", "Flächenvorbereitung", "Frästechnik"] },
] as const;

export function MachineExplorer() {
  const [selected, setSelected] = useState(0);
  const [exploded, setExploded] = useState(false);
  const diagramRef = useRef<SVGSVGElement>(null);
  const selectedMachine = equipment[selected];

  useEffect(() => {
    const root = diagramRef.current;
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = root.querySelectorAll("[data-part]");
    gsap.context(() => {
      gsap.to("[data-part='boom']", { x: exploded ? -22 : 0, y: exploded ? -50 : 0, duration: reduce ? 0 : .9, ease: "power3.inOut" });
      gsap.to("[data-part='basket']", { x: exploded ? -65 : 0, y: exploded ? -78 : 0, duration: reduce ? 0 : .9, ease: "power3.inOut" });
      gsap.to("[data-part='body']", { y: exploded ? -12 : 0, duration: reduce ? 0 : .9, ease: "power3.inOut" });
      gsap.to("[data-part='wheels']", { y: exploded ? 32 : 0, duration: reduce ? 0 : .9, ease: "power3.inOut" });
      gsap.to("[data-part='labels']", { opacity: exploded ? 1 : 0, duration: reduce ? 0 : .5, delay: reduce || !exploded ? 0 : .45 });
    }, root);
    return () => { gsap.killTweensOf(targets); };
  }, [exploded]);

  return <>
    <section className="machine-lab" aria-labelledby="machine-lab-title">
      <div className="machine-lab__copy"><p className="machine-kicker">01 / TECHNIK VERSTEHEN</p><h2 id="machine-lab-title">Ein neuer Blick<br /><em>auf Technik.</em></h2><p>Was steckt hinter einem Hubsteiger? Entdecken Sie die wichtigsten Baugruppen in einer interaktiven, schematischen Explosionsansicht.</p><button type="button" className="machine-button" onClick={() => setExploded(!exploded)} aria-pressed={exploded}>{exploded ? "Ansicht zusammensetzen" : "Explosionsansicht öffnen"}<span aria-hidden="true">{exploded ? "−" : "+"}</span></button><small>Konzeptdarstellung · kein konkretes Fahrzeugmodell</small></div>
      <div className="machine-lab__stage">
        <div className="machine-lab__stage-top"><span>ENBERGS / TECHNIK IM DETAIL</span><span>01 — 04</span></div>
        <svg ref={diagramRef} viewBox="0 0 680 480" className="machine-diagram" role="img" aria-label={exploded ? "Schematische Explosionsansicht eines Hubsteigers mit Arbeitskorb, Ausleger, Fahrzeugaufbau und Rädern" : "Schematische Darstellung eines Hubsteigers"}>
          <defs><linearGradient id="machineBody" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#f4dd64"/><stop offset="1" stopColor="#b9d953"/></linearGradient></defs>
          <path d="M70 378H610" stroke="#a8bda7" strokeWidth="1" strokeDasharray="4 7"/>
          <g data-part="boom"><path d="M363 282 L187 166 L198 148 L386 258 Z" fill="url(#machineBody)" stroke="#284938" strokeWidth="3"/><path d="M201 159L352 257" stroke="#5c793e" strokeWidth="3"/><circle cx="371" cy="267" r="17" fill="#e8eee1" stroke="#284938" strokeWidth="3"/><circle cx="371" cy="267" r="6" fill="#284938"/></g>
          <g data-part="basket"><path d="M130 149H208L199 194H140Z" fill="#e6ecdf" stroke="#284938" strokeWidth="3"/><path d="M139 158H199M152 150L157 191M183 150L180 191" stroke="#7d967d" strokeWidth="2"/><path d="M145 144V130M194 144V130" stroke="#284938" strokeWidth="3"/></g>
          <g data-part="body"><path d="M175 305H484V340H175Z" fill="#274b3a"/><path d="M215 260H385L415 305H215Z" fill="url(#machineBody)" stroke="#284938" strokeWidth="3"/><path d="M413 281H493L530 311V340H413Z" fill="#c8e55a" stroke="#284938" strokeWidth="3"/><path d="M430 288H485L505 307H430Z" fill="#dfece0" stroke="#284938" strokeWidth="2"/><path d="M441 314H451M226 274H317" stroke="#284938" strokeWidth="3"/><text x="237" y="299" fill="#284938" fontSize="14" fontWeight="700" letterSpacing="2">ENBERGS</text><path d="M240 342L213 367M430 342L457 367" stroke="#284938" strokeWidth="7"/><path d="M198 369H227M444 369H473" stroke="#284938" strokeWidth="5"/></g>
          <g data-part="wheels"><circle cx="254" cy="341" r="29" fill="#263e32"/><circle cx="254" cy="341" r="13" fill="#dce8d8"/><circle cx="467" cy="341" r="29" fill="#263e32"/><circle cx="467" cy="341" r="13" fill="#dce8d8"/></g>
          <g data-part="labels" opacity="0" fill="#345343" fontFamily="sans-serif" fontSize="11" letterSpacing="1.5"><path d="M123 80H45V116" fill="none" stroke="#779379"/><text x="45" y="72">01 / ARBEITSKORB</text><path d="M269 96H385V117" fill="none" stroke="#779379"/><text x="275" y="87">02 / AUSLEGER</text><path d="M512 216H594V242" fill="none" stroke="#779379"/><text x="491" y="207">03 / FAHRZEUG</text><path d="M474 408H568" fill="none" stroke="#779379"/><text x="476" y="427">04 / FAHRWERK</text></g>
        </svg>
        <span className="machine-lab__stage-note">SCHEMATISCHE ANSICHT / INTERAKTIV</span>
      </div>
    </section>
    <section className="machine-finder" id="maschinen"><div className="machine-finder__heading"><div><p className="machine-kicker">02 / UNSERE TECHNIK</p><h2>Die richtige Technik.<br /><em>Für Ihren Einsatz.</em></h2></div><p>Wählen Sie einen Bereich und entdecken Sie, wie unsere Technik die Arbeit am Baum unterstützt.</p></div>
      <div className="machine-tabs" role="group" aria-label="Maschinenbereich auswählen">{equipment.map((item, index) => <button key={item.id} type="button" aria-pressed={selected === index} onClick={() => setSelected(index)}><span>0{index + 1}</span>{item.label}<span aria-hidden="true">↗</span></button>)}</div>
      <div className="machine-feature" aria-live="polite"><div className="machine-feature__image"><Image src={selectedMachine.image} alt={selectedMachine.alt} fill sizes="(max-width: 800px) 100vw, 50vw" /></div><div className="machine-feature__copy"><p className="machine-kicker">EINSATZGEBIET / {selectedMachine.label.toUpperCase()}</p><h3>{selectedMachine.title}</h3><p>{selectedMachine.description}</p><div className="machine-feature__tags">{selectedMachine.tags.map(tag => <span key={tag}>{tag}</span>)}</div><Link href="/kontakt" className="machine-feature__link">Einsatz besprechen <span aria-hidden="true">↗</span></Link></div></div>
    </section>
  </>;
}
