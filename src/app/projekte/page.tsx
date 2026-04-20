import type { Metadata } from "next";

import { SectionHeading } from "@/components/section-heading";
import { projectPlaceholders } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Projekte",
  description:
    "Vorbereitete Referenzstruktur fuer kuenftige Projektberichte mit Herausforderung, Loesung und Ergebnis.",
};

export default function ProjectsPage() {
  return (
    <section className="section">
      <div className="container stack-lg">
        <SectionHeading
          eyebrow="Projekte"
          title="Referenzen sind als glaubwuerdige Struktur vorbereitet, aber noch nicht mit echten Freigaben befuellt."
          body="Das vermeidet erfundene Social-Proof-Inhalte und schafft gleichzeitig ein sofort nutzbares Format fuer spaetere Vorher-nachher-Faelle."
        />

        <div className="card-grid">
          {projectPlaceholders.map((project) => (
            <article key={project.title} className="card">
              <p className="eyebrow">{project.location}</p>
              <h2>{project.title}</h2>
              <p>
                <strong>Herausforderung:</strong> {project.challenge}
              </p>
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
  );
}
