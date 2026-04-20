import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
};

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="container narrow stack-lg">
        <p className="eyebrow">Datenschutz</p>
        <h1 className="page-title">Platzhalter fuer die Datenschutzerklaerung</h1>
        <p className="page-copy">
          Vor dem Go-live muessen Verarbeitungszwecke, Formularhinweise und eventuelle Tracking-
          oder Kartenintegrationen sauber rechtlich abgestimmt werden.
        </p>
      </div>
    </section>
  );
}
