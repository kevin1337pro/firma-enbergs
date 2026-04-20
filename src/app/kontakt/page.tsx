import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import {
  company,
  contactBenefits,
  contactChecklist,
  contacts,
  locations,
} from "@/data/site-content";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktseite mit Standorten, Ansprechpartnern und funktionierendem Anfrageformular fuer den Projektstart.",
};

export default function ContactPage() {
  return (
    <section className="section" id="anfrage">
      <div className="container stack-xl">
        <div className="hero-panel hero-panel--wide">
          <p className="eyebrow">Kontakt</p>
          <h1 className="page-title">Direkte Anfrage, klare Standorte und ein schneller Weg zur passenden Leistung.</h1>
          <p className="page-copy">
            Die Kontaktseite ist nicht nur ein Formular, sondern ein echter Abschluss fuer
            mobile Nutzer, Rueckrufe und regionale Einsaetze.
          </p>
        </div>

        <div className="split-layout">
          <article className="card">
            <SectionHeading
              eyebrow="Fuer eine gute Anfrage"
              title="Welche Angaben die erste Einschaetzung beschleunigen"
            />
            <ul className="list">
              {contactChecklist.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}:</strong> {item.text}
                </li>
              ))}
            </ul>
          </article>

          <article className="card">
            <SectionHeading
              eyebrow="Warum diese Kontaktseite funktioniert"
              title="Der Nutzerweg ist bewusst kurz gehalten"
            />
            <ul className="list">
              {contactBenefits.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}:</strong> {item.text}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="contact-section">
          <div className="stack-xl">
            <div className="card-grid card-grid--compact">
              {locations.map((location) => (
                <article key={location.title} className="card">
                  <p className="eyebrow">{location.title}</p>
                  <h2>
                    {location.address}
                    <br />
                    {location.city}
                  </h2>
                  <p>{location.note}</p>
                </article>
              ))}
            </div>

            <div className="card-grid card-grid--compact">
              {contacts.map((contact) => (
                <article key={contact.name} className="card">
                  <p className="eyebrow">{contact.role}</p>
                  <h3>{contact.name}</h3>
                  <p>{contact.focus}</p>
                </article>
              ))}
            </div>

            <div className="notice-card">
              <strong>Status fuer den Projektstart</strong>
              <p>{company.contactNotice}</p>
            </div>
          </div>

          <ContactForm sourcePage="kontaktseite" />
        </div>
      </div>
    </section>
  );
}
