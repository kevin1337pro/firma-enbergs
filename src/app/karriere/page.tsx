import type { Metadata } from "next";
import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { benefits, careerReasons, careerSteps, jobs } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Karriere",
  description:
    "Karriereseite fuer Baumdienst Enbergs mit Rollen, Benefits und schneller Bewerbungsfuehrung.",
};

export default function CareersPage() {
  return (
    <section className="section">
      <div className="container stack-xl">
        <div className="hero-panel hero-panel--wide">
          <p className="eyebrow">Karriere</p>
          <h1 className="page-title">Die Karriereseite ist auf schnelle Bewerbung statt formale Huerden vorbereitet.</h1>
          <p className="page-copy">
            Offene Rollen, Benefits, Quereinstieg und ein einfacher Nutzerweg sind bereits im
            Projekt enthalten.
          </p>
        </div>

        <div className="split-layout">
          <article className="card">
            <SectionHeading eyebrow="Benefits" title="Warum Bewerber bleiben sollen" />
            <ul className="list">
              {benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </article>

          <article className="card">
            <SectionHeading eyebrow="Bewerbungslogik" title="So ist der Weg aufgebaut" />
            <ul className="list">
              <li>Rolle waehlen und in wenigen Saetzen Interesse zeigen</li>
              <li>Rueckruf oder Termin ohne Anschreiben ermoeglichen</li>
              <li>Technik, Team und Entwicklung im ersten Eindruck sichtbarer machen</li>
            </ul>
          </article>
        </div>

        <div className="stack-lg">
          <SectionHeading
            eyebrow="Arbeiten bei Enbergs"
            title="Die Seite zeigt jetzt klarer, warum die Arbeit nicht nach austauschbarem Bauhof klingt."
          />
          <div className="card-grid card-grid--compact">
            {careerReasons.map((reason) => (
              <article key={reason.title} className="card">
                <p className="eyebrow">Team und Alltag</p>
                <h2>{reason.title}</h2>
                <p>{reason.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="card-grid">
          {jobs.map((job) => (
            <article key={job.title} className="card">
              <p className="eyebrow">{job.type}</p>
              <h2>{job.title}</h2>
              <p>{job.summary}</p>
              <ul className="list">
                {job.requirements.map((requirement) => (
                  <li key={requirement}>{requirement}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="stack-lg">
          <SectionHeading
            eyebrow="Bewerbungsablauf"
            title="Der Weg fuer Bewerber ist bewusst kurz und ohne formale Huerden gedacht."
          />
          <div className="timeline-grid timeline-grid--three">
            {careerSteps.map((step, index) => (
              <article key={step.title} className="timeline-card">
                <span className="timeline-card__index">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="cta-banner">
          <div>
            <p className="eyebrow">Schnellbewerbung</p>
            <h2>Der naechste sinnvolle Schritt ist ein separates Bewerbungsformular oder WhatsApp-Flow.</h2>
            <p>
              Fuer den Projektstart fuehrt die Seite Bewerber bereits ohne Umwege in den Kontakt.
            </p>
          </div>
          <Link className="button" href="/kontakt#anfrage">
            Bewerbung anstossen
          </Link>
        </div>
      </div>
    </section>
  );
}
