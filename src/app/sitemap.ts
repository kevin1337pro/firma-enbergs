import type { MetadataRoute } from "next";

import { knowledgeArticles, knowledgeCategories } from "@/data/nature-knowledge";
import { regions, services, siteUrl } from "@/data/site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/naturkunde",
    "/leistungen",
    "/projekte",
    "/maschinenpark",
    "/ueber-uns",
    "/karriere",
    "/kontakt",
    "/anfrage-vorbereiten",
    "/einsatzgebiete",
    "/impressum",
    "/datenschutz",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${siteUrl}/leistungen/${service.slug}`,
    lastModified: new Date(),
  }));

  const regionRoutes = regions.map((region) => ({
    url: `${siteUrl}/einsatzgebiete/${region.slug}`,
    lastModified: new Date(),
  }));

  const knowledgeCategoryRoutes = knowledgeCategories.map((category) => ({
    url: `${siteUrl}/naturkunde/${category.slug}`,
    lastModified: new Date(),
  }));

  const knowledgeArticleRoutes = knowledgeArticles.map((article) => ({
    url: `${siteUrl}/naturkunde/${article.categorySlug}/${article.slug}`,
    lastModified: new Date(),
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...regionRoutes,
    ...knowledgeCategoryRoutes,
    ...knowledgeArticleRoutes,
  ];
}
