import type { Metadata } from "next";
import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { regions } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Einsatzgebiete",
  description:
    "Vorbereitete Landingpages fuer Bottrop, Bottrop-Kirchhellen, Castrop-Rauxel und das Ruhrgebiet.",
};

export default function RegionsPage() {
  return (
    <section className="section">
      <div className="container stack-lg">
        <SectionHeading
          eyebrow="Einsatzgebiete"
          title="Lokale Seiten sind Teil des initialen Setups."
          body="Damit ist die Website sofort auf regionale Erweiterung und saubere Suchintention vorbereitet."
        />

        <div className="card-grid card-grid--compact">
          {regions.map((region) => (
            <article key={region.slug} className="card">
              <p className="eyebrow">Region</p>
              <h2>{region.name}</h2>
              <p>{region.intro}</p>
              <Link href={`/einsatzgebiete/${region.slug}`}>Landingpage ansehen</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
