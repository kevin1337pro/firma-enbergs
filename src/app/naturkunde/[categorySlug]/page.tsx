import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SectionHeading } from "@/components/section-heading";
import {
  getKnowledgeArticlesByCategory,
  getKnowledgeCategory,
  knowledgeCategories,
} from "@/data/nature-knowledge";

type KnowledgeCategoryPageProps = {
  params: Promise<{ categorySlug: string }>;
};

export function generateStaticParams() {
  return knowledgeCategories.map((category) => ({
    categorySlug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: KnowledgeCategoryPageProps): Promise<Metadata> {
  const { categorySlug } = await params;
  const category = getKnowledgeCategory(categorySlug);

  if (!category) {
    return {};
  }

  return {
    title: `${category.title} | Naturkunde`,
    description: category.summary,
  };
}

export default async function KnowledgeCategoryPage({
  params,
}: KnowledgeCategoryPageProps) {
  const { categorySlug } = await params;
  const category = getKnowledgeCategory(categorySlug);

  if (!category) {
    notFound();
  }

  const articles = getKnowledgeArticlesByCategory(category.slug);

  return (
    <section className="section">
      <div className="container stack-xl">
        <nav aria-label="Breadcrumb" className="breadcrumbs">
          <Link href="/naturkunde">Naturkunde</Link>
          <span>/</span>
          <span>{category.title}</span>
        </nav>

        <div className="hero-panel hero-panel--wide">
          <p className="eyebrow">Naturkunde</p>
          <h1 className="page-title">{category.title}</h1>
          <p className="page-copy">{category.intro}</p>
        </div>

        <div className="stack-lg">
          <SectionHeading
            eyebrow="Beitraege"
            title="Die Kategorie ist als Magazin-Raster angelegt."
            body="Jeder Beitrag bekommt kuenftig sein eigenes Bild, eine eigene Meta-Beschreibung und eine klar lesbare Struktur."
          />

          <div className="card-grid card-grid--compact">
            {articles.map((article) => (
              <article key={article.slug} className="card knowledge-card">
                <div className="knowledge-card__media">
                  <Image
                    alt={article.coverAlt}
                    fill
                    sizes="(max-width: 1040px) 100vw, 40vw"
                    src={article.coverImage}
                    style={{
                      objectFit: article.coverFit ?? "cover",
                      objectPosition: article.coverPosition ?? "center top",
                    }}
                  />
                </div>
                <div className="knowledge-card__content">
                  <p className="eyebrow">Baeume</p>
                  <h2>{article.title}</h2>
                  <p className="knowledge-card__subtitle">{article.subtitle}</p>
                  <p>{article.teaser}</p>
                  <Link href={`/naturkunde/${category.slug}/${article.slug}`}>
                    Beitrag lesen
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
