import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SectionHeading } from "@/components/section-heading";
import {
  getKnowledgeArticle,
  getKnowledgeCategory,
  knowledgeArticles,
} from "@/data/nature-knowledge";
import { services } from "@/data/site-content";

type KnowledgeArticlePageProps = {
  params: Promise<{ categorySlug: string; articleSlug: string }>;
};

export function generateStaticParams() {
  return knowledgeArticles.map((article) => ({
    categorySlug: article.categorySlug,
    articleSlug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: KnowledgeArticlePageProps): Promise<Metadata> {
  const { categorySlug, articleSlug } = await params;
  const article = getKnowledgeArticle(categorySlug, articleSlug);

  if (!article) {
    return {};
  }

  return {
    title: `${article.title} | Naturkunde`,
    description: article.description,
  };
}

export default async function KnowledgeArticlePage({
  params,
}: KnowledgeArticlePageProps) {
  const { categorySlug, articleSlug } = await params;
  const category = getKnowledgeCategory(categorySlug);
  const article = getKnowledgeArticle(categorySlug, articleSlug);

  if (!category || !article) {
    notFound();
  }

  const relatedServices = services.filter((service) =>
    article.relatedServiceSlugs.includes(service.slug),
  );

  return (
    <section className="section">
      <div className="container stack-xl">
        <nav aria-label="Breadcrumb" className="breadcrumbs">
          <Link href="/naturkunde">Naturkunde</Link>
          <span>/</span>
          <Link href={`/naturkunde/${category.slug}`}>{category.title}</Link>
          <span>/</span>
          <span>{article.title}</span>
        </nav>

        <div className="knowledge-hero">
          <div className="hero-panel hero-panel--wide">
            <p className="eyebrow">Naturkunde</p>
            <h1 className="page-title">{article.title}</h1>
            <p className="knowledge-subtitle">{article.subtitle}</p>
            <p className="page-copy">{article.teaser}</p>
            <div className="chip-row">
              {article.chips.map((chip) => (
                <span key={chip} className="chip">
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="knowledge-cover">
            <Image
              alt={article.coverAlt}
              fill
              priority
              sizes="(max-width: 1040px) 100vw, 42vw"
              src={article.coverImage}
              style={{
                objectFit: article.coverFit ?? "cover",
                objectPosition: article.coverPosition ?? "center top",
              }}
            />
          </div>
        </div>

        <div className="split-layout">
          <article className="card stack">
            <SectionHeading
              eyebrow="Einstieg"
              title="Ein kompakter Blick auf die haeufigste Ahornart Mitteleuropas"
            />
            <div className="knowledge-article__flow">
              {article.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>

          <article className="card stack">
            <SectionHeading
              eyebrow="Steckbrief"
              title="Die wichtigsten Merkmale auf einen Blick"
            />
            <div className="fact-grid">
              {article.facts.map((fact) => (
                <div key={fact.label} className="fact-item">
                  <strong>{fact.label}</strong>
                  <span>{fact.value}</span>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="stack-lg">
          <SectionHeading
            eyebrow="Beitrag"
            title="Aus dem PDF-Inhalt ist ein lesbarer Naturkunde-Artikel entstanden."
            body="Die Aussagen sind als Webtext neu strukturiert und fuer die Seite in Abschnitte mit klarer Hierarchie gegliedert."
          />

          <div className="stack">
            {article.sections.map((section) => (
              <article key={section.title} className="card stack">
                <h2>{section.title}</h2>
                <div className="knowledge-article__flow">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.points ? (
                  <ul className="list">
                    {section.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </div>

        <div className="split-layout">
          <article className="card stack">
            <SectionHeading
              eyebrow="Quelle"
              title="Grundlage des Beitrags"
            />
            <p>
              Inhaltlich basiert der Beitrag auf dem Faltblatt{" "}
              <strong>{article.sourceTitle}</strong> der{" "}
              <strong>{article.sourceOrganisation}</strong>. Das Covermotiv wurde
              als Bildausschnitt fuer die Webdarstellung uebernommen.
            </p>
            <p className="card-note">{article.coverCredit}</p>
          </article>

          <article className="card stack">
            <SectionHeading
              eyebrow="Praxisbezug"
              title="Passende Enbergs-Themen zum Artikel"
            />
            <div className="footer-links">
              {relatedServices.map((service) => (
                <Link key={service.slug} href={`/leistungen/${service.slug}`}>
                  {service.title}
                </Link>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
