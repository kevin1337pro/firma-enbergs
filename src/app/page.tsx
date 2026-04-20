import Link from "next/link";

import { ContactForm } from "@/components/contact-form";
import { HeroSlide } from "@/components/hero-slide";
import { SectionHeading } from "@/components/section-heading";
import { SponsorGrid } from "@/components/sponsor-grid";
import {
  audiences,
  company,
  homeFaqs,
  locations,
  machines,
  processItems,
  projectPlaceholders,
  reasons,
  regions,
  services,
  siteUrl,
} from "@/data/site-content";

const featuredServices = services.slice(0, 6);

export default function HomePage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    areaServed: ["Bottrop", "Bottrop-Kirchhellen", "Castrop-Rauxel", "Ruhrgebiet"],
    description: company.subline,
    url: siteUrl,
    address: locations.map((location) => ({
      "@type": "PostalAddress",
      streetAddress: location.address,
      addressLocality: location.city,
      addressCountry: "DE",
    })),
  };

  return (
    <>
      <section className="section hero">
        <div className="container hero__grid">
          <div className="stack-lg">
            <p className="eyebrow">Baumdienst, Spezialfaellung und Pflege</p>
            <h1 className="hero__title">{company.headline}</h1>
            <p className="hero__copy">{company.subline}</p>
            <p className="hero__region">{company.regionLine}</p>
            <div className="hero-points">
              <span>Vor-Ort-Beratung</span>
              <span>Spezialtechnik fuer enge und sensible Lagen</span>
              <span>Fachgerechte Ausfuehrung von Pflege bis Rodung</span>
            </div>

            <div className="button-row">
              <Link className="button" href="/anfrage-vorbereiten">
                {company.primaryCta}
              </Link>
              <Link className="button button--ghost" href="/leistungen">
                {company.secondaryCta}
              </Link>
            </div>

            <div className="stats-grid">
              {company.stats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <HeroSlide />
        </div>
      </section>

      <section className="section section--tight">
        <div className="container stack-lg">
          <SectionHeading
            eyebrow="Sponsornetz"
            title="Zertifikate und Partner sind jetzt als sichtbares Vertrauensmodul angelegt."
            body="Statt als unauffaellige Footer-Liste stehen die Nachweise ab sofort als eigenes Raster im Seitenfluss."
          />
          <SponsorGrid />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Leistungen"
            title="Die neuen Kernleistungen sind bereits als eigene SEO-faehige Seiten vorbereitet."
            body="Die Projektinitialisierung folgt der empfohlenen Struktur aus dem Briefing: einzeln ausbaubare Leistungen statt einer langen Sammelseite."
          />

          <div className="card-grid card-grid--services">
            {featuredServices.map((service) => (
              <article key={service.slug} className="card service-card">
                <p className="eyebrow">{service.shortTitle}</p>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <div className="chip-row">
                  {service.highlights.map((highlight) => (
                    <span key={highlight} className="chip">
                      {highlight}
                    </span>
                  ))}
                </div>
                <Link href={`/leistungen/${service.slug}`}>Zur Leistungsseite</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-layout">
          <div>
            <SectionHeading
              eyebrow="Warum Enbergs"
              title="Die neue Startseite verkauft Fachlichkeit ueber Ergebnisse, Technik und Vertrauen."
              body="Das ersetzt die alte, rein informative Wirkung durch klare Nutzerwege und sichtbare Vorteile."
            />
          </div>
          <div className="stack">
            {reasons.map((reason) => (
              <article key={reason.title} className="card card--accent">
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-layout">
          <div>
            <SectionHeading
              eyebrow="Zielgruppen"
              title="Die Seite spricht nicht nur Privatkunden, sondern das gesamte reale Auftragsspektrum an."
              body="Das Briefing nennt Verwaltung, Kommune, Gewerbe und Bautraeger. Diese Zielgruppen sind jetzt direkt in der Startseite verankert."
            />
          </div>
          <div className="card-grid card-grid--compact">
            {audiences.map((audience) => (
              <article key={audience.title} className="card">
                <p className="eyebrow">Auftraggeber</p>
                <h3>{audience.title}</h3>
                <p>{audience.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Maschinenpark"
            title="Technik wird als Verkaufsargument inszeniert - nicht nur als Galerie."
            body="Jedes Geraet ist mit Einsatzbereich, Kundenvorteil und anschlussfaehiger Projekterzaehlung angelegt."
          />

          <div className="card-grid">
            {machines.map((machine) => (
              <article key={machine.name} className="card">
                <p className="eyebrow">Technik</p>
                <h3>{machine.name}</h3>
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
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Ablauf"
            title="Vom ersten Kontakt bis zur sauberen Uebergabe ist der Nutzerweg klar aufgebaut."
            body="Das macht die Seite vertriebsstaerker als eine reine Aufzaehlung von Leistungen und Maschinen."
          />

          <div className="timeline-grid">
            {processItems.map((item, index) => (
              <article key={item.title} className="timeline-card">
                <span className="timeline-card__index">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Referenzstruktur"
            title="Projektkarten sind vorbereitet und deutlich als Platzhalter markiert."
            body="So steht das Seitenmuster bereits, ohne spaeter unbeabsichtigt mit erfundenen Referenzen live zu gehen."
          />

          <div className="card-grid">
            {projectPlaceholders.map((project) => (
              <article key={project.title} className="card">
                <p className="eyebrow">{project.location}</p>
                <h3>{project.title}</h3>
                <p>{project.challenge}</p>
                <p>
                  <strong>Loesung:</strong> {project.solution}
                </p>
                <p>
                  <strong>Ergebnis:</strong> {project.result}
                </p>
                <p className="card-note">{project.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-layout">
          <div>
            <SectionHeading
              eyebrow="Einsatzgebiete"
              title="Lokale Sichtbarkeit ist als eigener Seitentyp angelegt."
              body="Bottrop, Bottrop-Kirchhellen, Castrop-Rauxel und Ruhrgebiet sind als ausbaubare Landingpages vorbereitet."
            />
            <Link className="button button--ghost" href="/einsatzgebiete">
              Alle Einsatzgebiete
            </Link>
          </div>

          <div className="card-grid card-grid--compact">
            {regions.map((region) => (
              <article key={region.slug} className="card">
                <p className="eyebrow">Region</p>
                <h3>{region.name}</h3>
                <p>{region.intro}</p>
                <Link href={`/einsatzgebiete/${region.slug}`}>Landingpage oeffnen</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-layout">
          <div>
            <SectionHeading
              eyebrow="FAQ"
              title="Wichtige Rueckfragen werden schon auf der Startseite beantwortet."
              body="Das hilft sowohl mobil als auch fuer Suchintentionen, bevor Besucher tiefer in Leistungsseiten einsteigen."
            />
          </div>
          <div className="faq-list">
            {homeFaqs.map((faq) => (
              <article key={faq.question} className="card">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--contrast" id="anfrage">
        <div className="container contact-section">
          <div className="stack-lg">
            <SectionHeading
              eyebrow="Kontaktabschluss"
              title="Die neue Anfragefuehrung ist direkt im Projektgrundgeruest verankert."
              body={company.requestPromise}
            />

            <div className="card-grid card-grid--compact">
              {locations.map((location) => (
                <article key={location.title} className="card">
                  <p className="eyebrow">{location.title}</p>
                  <h3>
                    {location.address}
                    <br />
                    {location.city}
                  </h3>
                  <p>{location.note}</p>
                </article>
              ))}
            </div>

            <div className="notice-card">
              <strong>Wichtiger Hinweis fuer den naechsten Schritt</strong>
              <p>{company.contactNotice}</p>
            </div>
          </div>

          <ContactForm sourcePage="startseite" />
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
    </>
  );
}
