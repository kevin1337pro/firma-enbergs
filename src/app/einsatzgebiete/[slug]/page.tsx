import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SectionHeading } from "@/components/section-heading";
import { regions, services } from "@/data/site-content";

type RegionPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return regions.map((region) => ({
    slug: region.slug,
  }));
}

export async function generateMetadata({
  params,
}: RegionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const region = regions.find((entry) => entry.slug === slug);

  if (!region) {
    return {};
  }

  return {
    title: region.name,
    description: region.intro,
  };
}

export default async function RegionDetailPage({ params }: RegionPageProps) {
  const { slug } = await params;
  const region = regions.find((entry) => entry.slug === slug);

  if (!region) {
    notFound();
  }

  const matchingServices = services.filter((service) =>
    region.serviceSlugs.includes(service.slug),
  );

  return (
    <section className="section">
      <div className="container stack-xl">
        <div className="hero-panel hero-panel--wide">
          <p className="eyebrow">Einsatzgebiet</p>
          <h1 className="page-title">{region.name}</h1>
          <p className="page-copy">{region.intro}</p>
        </div>

        <div className="split-layout">
          <article className="card">
            <SectionHeading
              eyebrow="Regionaler Fokus"
              title="So ist die Landingpage inhaltlich positioniert"
            />
            <ul className="list">
              {region.focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="card">
            <SectionHeading
              eyebrow="SEO-Hinweis"
              title="Diese Seite dient als ausbaubare lokale Basis"
            />
            <p>
              Im naechsten Schritt koennen hier echte Projekte, ortsspezifische Referenzen,
              haeufige Rueckfragen und Bildmaterial aus der Region eingepflegt werden.
            </p>
          </article>
        </div>

        <div className="stack-lg">
          <SectionHeading
            eyebrow="Passende Leistungen"
            title="Diese Leistungen sind fuer die Region bereits verknuepft."
          />
          <div className="card-grid card-grid--compact">
            {matchingServices.map((service) => (
              <article key={service.slug} className="card">
                <p className="eyebrow">{service.shortTitle}</p>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <Link href={`/leistungen/${service.slug}`}>Leistung ansehen</Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
