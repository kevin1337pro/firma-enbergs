import Image from "next/image";
import Link from "next/link";

import { HeroSlide } from "@/components/hero-slide";
import { siteUrl } from "@/data/site-content";

import "./home.css";

const services = [
  { number: "01", title: "Baumpflege", description: "Für gesunde, sichere und gepflegte Bäume.", href: "/leistungen/baumpflege" },
  { number: "02", title: "Baumfällung", description: "Durchdachte Lösungen, auch wenn es eng wird.", href: "/leistungen/baumfaellung" },
  { number: "03", title: "Problem- & Gefahrbäume", description: "Sorgfältiges Vorgehen bei anspruchsvollen Bäumen.", href: "/leistungen/problembaum-gefahrbaum" },
  { number: "04", title: "Seilklettertechnik", description: "Präzise Arbeit dort, wo Maschinen nicht hinkommen.", href: "/leistungen/seilklettertechnik" },
];

export default function HomePage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Baumdienst Enbergs GmbH",
    areaServed: ["Bottrop", "Castrop-Rauxel", "Ruhrgebiet"],
    url: siteUrl,
    telephone: "+49 2045 409440",
  };

  return (
    <div className="home">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero__intro">
          <div className="home-hero__topline"><span className="home-dot" /> BAUMDIENST ENBERGS <span> / </span> IM RUHRGEBIET</div>
          <div className="home-hero__text">
            <p className="home-kicker">Mit Erfahrung. Mit Weitblick.</p>
            <h1 id="home-title">Für Bäume.<br /><em>Für morgen.</em></h1>
            <p className="home-hero__lead">Baumpflege, Baumfällung und Spezialtechnik im Ruhrgebiet. Von der Beratung vor Ort bis zum Einsatz in der Krone.</p>
            <div className="home-actions">
              <a className="home-button" href="tel:+492045409440">Jetzt anrufen <span aria-hidden="true">↗</span></a>
              <Link className="home-text-link" href="/leistungen">Leistungen entdecken <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
          <div className="home-hero__bottom"><span>BOTTROP · CASTROP-RAUXEL</span><span>SCROLLEN &nbsp; ↓</span></div>
        </div>
        <div className="home-hero__visual"><HeroSlide /></div>
      </section>

      <section className="home-intro home-wrap">
        <div className="home-label"><span>01 / WAS WIR TUN</span><span className="home-label__line" /></div>
        <div className="home-intro__content">
          <h2>Jeder Baum ist anders.<br /><em>Unser Einsatz auch.</em></h2>
          <p>Ob Pflege, Rückschnitt oder Fällung: Wir finden den passenden Weg für Ihren Baum und seine Umgebung. Mit Blick fürs Detail und der richtigen Technik.</p>
        </div>
      </section>

      <section className="home-services home-wrap" id="leistungen">
        <div className="home-section-head"><div><p className="home-kicker">UNSERE LEISTUNGEN</p><h2>Arbeit mit<br /><em>Weitblick.</em></h2></div><Link className="home-text-link home-text-link--dark" href="/leistungen">Alle Leistungen ansehen <span aria-hidden="true">↗</span></Link></div>
        <div className="home-service-list">
          {services.map((service) => <Link className="home-service" href={service.href} key={service.number}><span className="home-service__number">{service.number}</span><h3>{service.title}</h3><p>{service.description}</p><span className="home-service__arrow" aria-hidden="true">↗</span></Link>)}
        </div>
      </section>

      <section className="home-story" id="einblicke">
        <div className="home-story__image"><Image src="/assets/einsatz-03.jpg" alt="Fahrzeug von Baumdienst Enbergs bei einem Einsatz" fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
        <div className="home-story__content"><p className="home-kicker">EINBLICK IN UNSERE ARBEIT</p><h2>Am Boden verwurzelt.<br /><em>In der Höhe zuhause.</em></h2><p>Jeder Einsatz stellt eigene Anforderungen. Mit passender Technik und einem sorgfältigen Blick für die Umgebung gehen wir Ihre Aufgabe an.</p><Link className="home-button home-button--light" href="/ueber-uns">Mehr über Enbergs <span aria-hidden="true">↗</span></Link></div>
      </section>

      <section className="home-contact home-wrap" id="kontakt">
        <div><p className="home-kicker">IHR VORHABEN IST BEI UNS IN GUTEN HÄNDEN</p><h2>Sie haben<br /><em>etwas vor?</em></h2></div>
        <div className="home-contact__details"><p>Erzählen Sie uns von Ihrem Anliegen. Wir freuen uns darauf, von Ihnen zu hören.</p><a href="tel:+492045409440">02045 / 40 94 40 <span aria-hidden="true">↗</span></a><span>Bottrop-Kirchhellen · Castrop-Rauxel</span><Link className="home-text-link home-text-link--dark" href="/kontakt">Weitere Kontaktmöglichkeiten <span aria-hidden="true">↗</span></Link></div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
    </div>
  );
}
