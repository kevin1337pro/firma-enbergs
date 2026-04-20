import type { Metadata } from "next";
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
    "Vorbereitete Maschinenpark-Seite mit Einsatzbereichen, Kundenvorteilen und technischer Positionierung.",
};

export default function MachinesPage() {
  return (
    <section className="section">
      <div className="container stack-xl">
        <div className="hero-panel hero-panel--wide">
          <p className="eyebrow">Maschinenpark</p>
          <h1 className="page-title">Technik ist hier kein Beiwerk, sondern ein echtes Verkaufsargument.</h1>
          <p className="page-copy">
            Die Seite erklaert, warum die richtige Maschine fuer Sicherheit, Wirtschaftlichkeit
            und saubere Ergebnisse im Baumdienst entscheidend ist.
          </p>
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

        <div className="card-grid">
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
            <h2>Die Seite kann jetzt gezielt auf Spezialfaelle, schwierige Zugange und Flaechenleistung verweisen.</h2>
            <p>
              Als naechster Ausbauschritt koennen zu jeder Maschine echte Projekte oder Einsatzfotos
              hinterlegt werden.
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
