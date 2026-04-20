import type { Metadata } from "next";
import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { services } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Uebersicht aller vorbereiteten Leistungsseiten fuer Baumpflege, Baumfaellung, Spezialtechnik, EPS und Beratung.",
};

export default function ServicesPage() {
  return (
    <section className="section">
      <div className="container stack-lg">
        <SectionHeading
          eyebrow="Leistungen"
          title="Jede Kernleistung ist als eigenstaendige Seite aufgebaut."
          body="Damit lassen sich regionale Keywords, FAQs und Conversion-Elemente pro Thema ausbauen statt alles auf einer Sammelseite zu verstecken."
        />

        <div className="card-grid card-grid--services">
          {services.map((service) => (
            <article key={service.slug} className="card service-card">
              <p className="eyebrow">{service.shortTitle}</p>
              <h2>{service.title}</h2>
              <p>{service.intro}</p>
              <div className="chip-row">
                {service.highlights.map((highlight) => (
                  <span key={highlight} className="chip">
                    {highlight}
                  </span>
                ))}
              </div>
              <Link href={`/leistungen/${service.slug}`}>Details ansehen</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
