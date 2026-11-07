import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import "./about.css";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Lernen Sie Baumdienst Enbergs und die Menschen hinter unseren Einsätzen im Ruhrgebiet kennen.",
};

// Die Angaben stammen aus den vorhandenen Unternehmensdaten. Porträts und
// weitere persönliche Informationen können ergänzt werden, sobald sie vorliegen.
const people = [
  {
    name: "Reinhard Enbergs",
    initials: "RE",
    role: "Geschäftsführung",
    areas: ["Strategie", "Kundenberatung", "Angebotsfreigaben"],
  },
  {
    name: "Marc Nottbeck",
    initials: "MN",
    role: "Geschäftsführung",
    areas: ["Operative Leitung", "Technik", "Ausführungsqualität"],
  },
] as const;

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-wrap about-hero__inner">
          <p className="about-kicker"><span /> BAUMDIENST ENBERGS / ÜBER UNS</p>
          <h1>Für Bäume.<br /><em>Mit Menschen.</em></h1>
          <p className="about-hero__copy">Hinter jedem Einsatz stehen Menschen, die mit Sorgfalt, Erfahrung und der passenden Technik anpacken.</p>
          <a className="about-hero__link" href="#team">Das Team kennenlernen <span aria-hidden="true">↓</span></a>
        </div>
        <div className="about-hero__image" aria-hidden="true"><Image src="/assets/einsatz-07.jpg" alt="" fill priority sizes="(max-width: 800px) 100vw, 55vw" /></div>
      </section>

      <section className="about-team about-wrap" id="team">
        <div className="about-section-head">
          <div><p className="about-kicker">01 / DIE MENSCHEN DAHINTER</p><h2>Gemeinsam für<br /><em>Ihr Vorhaben.</em></h2></div>
          <p>Ein guter Einsatz beginnt mit Menschen, die Verantwortung übernehmen. Hier stellen wir Ihnen die Geschäftsführung und ihre Aufgabenbereiche vor.</p>
        </div>
        <div className="about-profiles">
          {people.map((person, index) => (
            <article className="about-profile" key={person.name}>
              <div className="about-profile__backdrop" aria-hidden="true"><span className="about-profile__orb about-profile__orb--one" /><span className="about-profile__orb about-profile__orb--two" /><span className="about-profile__monogram">{person.initials}</span><span className="about-profile__watermark">ENBERGS</span></div>
              <div className="about-profile__number" aria-hidden="true">0{index + 1} / TEAM ENBERGS</div>
              <div className="about-profile__glass">
                <div className="about-profile__heading"><div><p>{person.role}</p><h3>{person.name}</h3></div><span className="about-profile__symbol" aria-hidden="true">✳</span></div>
                <div className="about-profile__divider" />
                <p className="about-profile__label">VERANTWORTUNGSBEREICHE</p>
                <ul>{person.areas.map((area) => <li key={area}>{area}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
        <div className="about-support">
          <div><p className="about-kicker">ZUSAMMENARBEIT</p><h3>Viele Aufgaben.<br /><em>Ein Team.</em></h3></div>
          <div className="about-support__item"><span>01</span><div><h4>Bauleitung</h4><p>Projektkoordination, Baustellenabstimmung und Terminplanung.</p></div></div>
          <div className="about-support__item"><span>02</span><div><h4>Büro &amp; Sekretariat</h4><p>Erstkontakt, Anfragen, Unterlagen und Rückrufe.</p></div></div>
        </div>
      </section>

      <section className="about-values">
        <div className="about-wrap about-values__inner"><p className="about-kicker">02 / UNSERE ARBEIT</p><h2>Verwurzelt in der Region.<br /><em>Bereit für Ihren Einsatz.</em></h2><p>Von Bottrop-Kirchhellen und Castrop-Rauxel aus sind wir für Baumpflege, Baumfällung und Arbeiten rund um den Baum im Einsatz.</p><Link href="/leistungen">Unsere Leistungen <span aria-hidden="true">↗</span></Link></div>
      </section>
      <section className="about-contact about-wrap"><div><p className="about-kicker">WIR SIND FÜR SIE DA</p><h2>Was können wir<br /><em>für Sie tun?</em></h2></div><Link href="/kontakt">Kontakt aufnehmen <span aria-hidden="true">↗</span></Link></section>
    </div>
  );
}
