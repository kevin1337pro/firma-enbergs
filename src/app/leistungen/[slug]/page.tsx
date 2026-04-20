import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SectionHeading } from "@/components/section-heading";
import { regions, services } from "@/data/site-content";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((entry) => entry.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: service.shortTitle,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((entry) => entry.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedRegions = regions.filter((region) =>
    service.relatedRegions.includes(region.slug),
  );

  return (
    <section className="section">
      <div className="container stack-xl">
        <div className="hero-panel hero-panel--wide">
          <p className="eyebrow">{service.shortTitle}</p>
          <h1 className="page-title">{service.title}</h1>
          <p className="page-copy">{service.intro}</p>
          <div className="chip-row">
            {service.highlights.map((highlight) => (
              <span key={highlight} className="chip">
                {highlight}
              </span>
            ))}
          </div>
        </div>

        <div className="split-layout">
          <article className="card">
            <SectionHeading
              eyebrow="Typische Ausgangslage"
              title="Womit Kunden zu dieser Leistung anfragen"
            />
            <ul className="list">
              {service.customerProblem.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="card">
            <SectionHeading
              eyebrow="Loesungsbild"
              title="Wie Enbergs die Aufgabe strukturiert loest"
            />
            <ul className="list">
              {service.solution.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="stack-lg">
          <SectionHeading
            eyebrow="Ablauf"
            title="Der Service ist bereits in vier nachvollziehbare Schritte gegliedert."
          />
          <div className="card-grid card-grid--compact">
            {service.steps.map((step, index) => (
              <article key={step.title} className="card card--numbered">
                <span className="card-number">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="stack-lg">
          <SectionHeading
            eyebrow="FAQ"
            title="Die Seite ist von Beginn an fuer Suchintention und Rueckfragen vorbereitet."
          />
          <div className="faq-list">
            {service.faq.map((faq) => (
              <article key={faq.question} className="card">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="stack-lg">
          <SectionHeading
            eyebrow="Regionen"
            title="Passende Landingpages fuer lokale Auffindbarkeit"
          />
          <div className="card-grid card-grid--compact">
            {relatedRegions.map((region) => (
              <article key={region.slug} className="card">
                <p className="eyebrow">Einsatzgebiet</p>
                <h3>{region.name}</h3>
                <p>{region.intro}</p>
                <Link href={`/einsatzgebiete/${region.slug}`}>Region ansehen</Link>
              </article>
            ))}
          </div>
        </div>

        <div className="cta-banner">
          <div>
            <p className="eyebrow">Naechster Schritt</p>
            <h2>Diese Leistungsseite ist bereit fuer echte Bilder, Referenzen und Conversion-Daten.</h2>
            <p>
              Die Struktur fuer Problem, Loesung, Ablauf, FAQ und regionale Verknuepfung
              steht bereits.
            </p>
          </div>
          <Link className="button" href="/kontakt#anfrage">
            Anfrage zu dieser Leistung
          </Link>
        </div>
      </div>
    </section>
  );
}
