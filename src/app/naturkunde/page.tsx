import type { Metadata } from "next";
import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import {
  getKnowledgeArticlesByCategory,
  knowledgeCategories,
} from "@/data/nature-knowledge";

export const metadata: Metadata = {
  title: "Naturkunde",
  description:
    "Naturkunde-Beitraege zu Baumarten, Erkennungsmerkmalen, Standorten und praxisnahem Baumwissen.",
};

export default function NatureKnowledgePage() {
  return (
    <section className="section">
      <div className="container stack-xl">
        <div className="hero-panel hero-panel--wide">
          <p className="eyebrow">Naturkunde</p>
          <h1 className="page-title">Baumwissen bekommt eine eigene, ausbaubare Wissenssektion.</h1>
          <p className="page-copy">
            Hier entstehen kompakte Artenportraets, Standortwissen und verstaendliche
            Fachtexte fuer Bauminteressierte, Eigentuemer und Auftraggeber.
          </p>
        </div>

        <div className="stack-lg">
          <SectionHeading
            eyebrow="Rubriken"
            title="Die neue Struktur ist nach Themen statt nach Einzelseiten aufgebaut."
            body="Dadurch lassen sich kuenftig weitere Baumarten und Naturkunde-Beitraege ohne Strukturbruch ergaenzen."
          />

          <div className="card-grid card-grid--compact">
            {knowledgeCategories.map((category) => {
              const articleCount = getKnowledgeArticlesByCategory(category.slug).length;

              return (
                <article key={category.slug} className="card">
                  <p className="eyebrow">Sektion</p>
                  <h2>{category.title}</h2>
                  <p>{category.intro}</p>
                  <div className="chip-row">
                    <span className="chip">{articleCount} Beitrag{articleCount === 1 ? "" : "e"}</span>
                    <span className="chip">Erweiterbar</span>
                  </div>
                  <Link href={`/naturkunde/${category.slug}`}>Zur Rubrik</Link>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
