import type { Metadata } from "next";

import { SectionHeading } from "@/components/section-heading";
import { SponsorGrid } from "@/components/sponsor-grid";
import {
  company,
  contacts,
  qualityPillars,
  reasons,
  storyItems,
} from "@/data/site-content";

export const metadata: Metadata = {
  title: "Ueber uns",
  description:
    "Unternehmensseite fuer Baumdienst Enbergs mit Teamrollen, Werten, Technikbezug und Vertrauenssignalen.",
};

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container stack-xl">
        <div className="hero-panel hero-panel--wide">
          <p className="eyebrow">Unternehmen</p>
          <h1 className="page-title">Aus einer sachlichen Bestandsseite wird eine belastbare Vertrauensseite.</h1>
          <p className="page-copy">
            Der Fokus liegt auf Sicherheit, Sorgfalt, Verlaesslichkeit, echter Technik und
            klaren Verantwortlichkeiten im Team.
          </p>
        </div>

        <div className="split-layout">
          <article className="card">
            <SectionHeading
              eyebrow="Positionierung"
              title="Wofuer die neue Unternehmensseite stehen soll"
            />
            <p>
              {company.name} wird als Spezialist fuer alle Dienstleistungen rund um den Baum
              praesentiert - mit Fachlichkeit, moderner technischer Ausstattung und regionaler Naehe.
            </p>
          </article>

          <article className="card">
            <SectionHeading eyebrow="Werte" title="Was Auftraggeber spueren sollen" />
            <ul className="list">
              {reasons.map((reason) => (
                <li key={reason.title}>{reason.title}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="stack-lg">
          <SectionHeading
            eyebrow="Unternehmensbild"
            title="Die Seite erzaehlt jetzt klarer, wie das Unternehmen arbeitet und warum Auftraggeber ihm vertrauen koennen."
          />
          <div className="timeline-grid timeline-grid--three">
            {storyItems.map((item, index) => (
              <article key={item.title} className="timeline-card">
                <span className="timeline-card__index">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="stack-lg">
          <SectionHeading
            eyebrow="Team"
            title="Ansprechpartner werden als echte Verantwortungsrollen sichtbar gemacht."
          />
          <div className="card-grid card-grid--compact">
            {contacts.map((contact) => (
              <article key={contact.name} className="card">
                <p className="eyebrow">{contact.role}</p>
                <h2>{contact.name}</h2>
                <p>{contact.focus}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="stack-lg">
          <SectionHeading
            eyebrow="Qualitaet"
            title="Die neue Seite staerkt Vertrauen nicht nur ueber Logos, sondern ueber ein klares Leistungsversprechen."
          />
          <div className="card-grid card-grid--compact">
            {qualityPillars.map((pillar) => (
              <article key={pillar.title} className="card">
                <p className="eyebrow">Anspruch</p>
                <h2>{pillar.title}</h2>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="stack-lg">
          <SectionHeading
            eyebrow="Sponsornetz"
            title="Zertifikate und Partner sind als sichtbarer Vertrauensblock eingebunden."
          />
          <SponsorGrid />
        </div>
      </div>
    </section>
  );
}
