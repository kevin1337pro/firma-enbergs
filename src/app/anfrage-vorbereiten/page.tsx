import type { Metadata } from "next";

import { RequestPreparationForm } from "@/components/request-preparation-form";
import { SectionHeading } from "@/components/section-heading";

const requestPrepSteps = [
  {
    title: "Leistung und Ort einordnen",
    text: "Damit direkt klar ist, welches Team und welche Technik fuer die Anfrage relevant sind.",
  },
  {
    title: "Situation vor Ort beschreiben",
    text: "Zugang, Umfang und Dringlichkeit helfen bei der ersten realistischen Einschaetzung.",
  },
  {
    title: "Rueckruf vorbereiten",
    text: "Mit den strukturierten Angaben kann der naechste Schritt deutlich zielgerichteter erfolgen.",
  },
];

const requestPrepHints = [
  "Pflege, Faellung, Gefahrbaum, EPS oder Rodung direkt benennen",
  "Ort oder Stadtteil mit angeben",
  "Enge Zugaenge, sensible Bereiche oder Zeitdruck kurz erwaehnen",
];

export const metadata: Metadata = {
  title: "Anfrage Vorbereiten",
  description:
    "Strukturierte Vorab-Anfrage fuer Baumdienst Enbergs mit Leistung, Ort, Zugang und Kontaktdaten.",
};

export default function RequestPreparationPage() {
  return (
    <section className="section">
      <div className="container stack-xl">
        <div className="hero-panel hero-panel--wide">
          <p className="eyebrow">Anfrage vorbereiten</p>
          <h1 className="page-title">Die Anfrage wird hier vorab so sortiert, dass das Team schneller reagieren kann.</h1>
          <p className="page-copy">
            Statt nur einer freien Nachricht sammelt das Formular bereits die Angaben, die fuer
            eine erste Einschaetzung wirklich relevant sind.
          </p>
        </div>

        <div className="split-layout">
          <article className="card">
            <SectionHeading
              eyebrow="So funktioniert es"
              title="Drei kurze Schritte bis zur vorbereiteten Anfrage"
            />
            <div className="timeline-grid timeline-grid--three">
              {requestPrepSteps.map((step, index) => (
                <article key={step.title} className="timeline-card">
                  <span className="timeline-card__index">0{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </article>

          <article className="card">
            <SectionHeading
              eyebrow="Hilfreich fuer den Start"
              title="Diese Infos beschleunigen die erste Rueckmeldung"
            />
            <ul className="list">
              {requestPrepHints.map((hint) => (
                <li key={hint}>{hint}</li>
              ))}
            </ul>
          </article>
        </div>

        <RequestPreparationForm />
      </div>
    </section>
  );
}
