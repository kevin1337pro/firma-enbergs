import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
};

export default function ImprintPage() {
  return (
    <section className="section">
      <div className="container narrow stack-lg">
        <p className="eyebrow">Impressum</p>
        <h1 className="page-title">Platzhalter fuer die rechtlich korrekten Unternehmensangaben</h1>
        <p className="page-copy">
          Das Projekt wurde initialisiert, aber die finale Anbieterkennzeichnung muss mit den
          verbindlichen Angaben der Baumdienst Enbergs GmbH vervollstaendigt werden.
        </p>
      </div>
    </section>
  );
}
