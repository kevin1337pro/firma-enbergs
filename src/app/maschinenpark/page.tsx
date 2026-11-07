import type { Metadata } from "next";
import Link from "next/link";
import { MachineExplorer } from "@/components/machine-explorer";

export const metadata: Metadata = {
  title: "Maschinenpark",
  description: "Hubsteiger, Greiftechnik und Spezialmaschinen von Baumdienst Enbergs im Einsatz.",
};

export default function MachinesPage() {
  return <div className="machine-page">
    <section className="machine-hero"><div><p className="machine-kicker">BAUMDIENST ENBERGS / MASCHINENPARK</p><h1>Starke Technik.<br /><em>Feines Gespür.</em></h1><p>Für jeden Baum und jede Umgebung die passende Lösung: Lernen Sie unsere Technik und ihre Einsatzmöglichkeiten kennen.</p><a href="#maschinen" className="machine-hero__link">Maschinen entdecken <span aria-hidden="true">↓</span></a></div><div className="machine-hero__aside"><span>TECHNIK, DIE BEWEGT.</span><strong>01 / 04</strong></div></section>
    <MachineExplorer />
    <section className="machine-cta"><div><p className="machine-kicker">GEMEINSAM ANPACKEN</p><h2>Ihr Vorhaben.<br /><em>Unsere Technik.</em></h2></div><div><p>Jeder Einsatz ist anders. Sprechen Sie mit uns über die passende Lösung für Ihre Aufgabe.</p><Link href="/kontakt" className="machine-button">Kontakt aufnehmen <span aria-hidden="true">↗</span></Link></div></section>
  </div>;
}
