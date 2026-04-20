export type ServiceStep = {
  title: string;
  text: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  shortTitle: string;
  title: string;
  summary: string;
  intro: string;
  customerProblem: string[];
  solution: string[];
  highlights: string[];
  steps: ServiceStep[];
  faq: FaqItem[];
  relatedRegions: string[];
};

export type Region = {
  slug: string;
  name: string;
  intro: string;
  focus: string[];
  serviceSlugs: string[];
};

export type Machine = {
  name: string;
  purpose: string;
  benefit: string;
  specs: string[];
};

export type ProjectPlaceholder = {
  title: string;
  location: string;
  challenge: string;
  solution: string;
  result: string;
  note: string;
};

export type Job = {
  title: string;
  type: string;
  summary: string;
  requirements: string[];
};

export type SponsorBadge = {
  image: string;
  title: string;
  alt: string;
  note: string;
};

export type Audience = {
  title: string;
  text: string;
};

export type ProcessItem = {
  title: string;
  text: string;
};

export type StoryItem = {
  title: string;
  text: string;
};

export type Pillar = {
  title: string;
  text: string;
};

export type CareerStep = {
  title: string;
  text: string;
};

export type ChecklistItem = {
  title: string;
  text: string;
};

export type NavigationChild = {
  href: string;
  label: string;
  description?: string;
};

export type NavigationItem = {
  href: string;
  label: string;
  children?: NavigationChild[];
};

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.firma-enbergs.de";

export const company = {
  name: "Baumdienst Enbergs GmbH",
  headline:
    "Baumpflege, Baumfällung und Spezialtechnik im Ruhrgebiet",
  subline:
    "Sicher, schnell und fachgerecht umgesetzt - von der Vor-Ort-Beratung bis zur anspruchsvollen Spezialfällung.",
  regionLine: "Bottrop-Kirchhellen, Castrop-Rauxel und das gesamte Ruhrgebiet",
  primaryCta: "Kostenlose Besichtigung anfragen",
  secondaryCta: "Leistungen ansehen",
  requestPromise:
    "Schnellanfragen werden priorisiert bearbeitet. Das Formular ist im Projektstart bereits funktionsfähig.",
  contactNotice:
    "Telefonnummern, direkte E-Mail-Adressen sowie finale Rechtstexte muessen aus der Bestandsseite uebernommen und vor dem Go-live ergaenzt werden.",
  stats: [
    { value: "2", label: "Standorte im westlichen Ruhrgebiet" },
    { value: "10+", label: "Leistungsbereiche fuer Privat, Gewerbe und Kommune" },
    { value: "1 Ziel", label: "Sichere und saubere Ausfuehrung ohne Umwege" },
  ],
};

export const locations = [
  {
    title: "Bottrop-Kirchhellen",
    address: "Adelsbredde 13",
    city: "46244 Bottrop-Kirchhellen",
    note: "Zentraler Standort fuer Beratung, Einsatzplanung und regionale Termine.",
  },
  {
    title: "Castrop-Rauxel",
    address: "Kloecknerstrasse 97",
    city: "44579 Castrop-Rauxel",
    note: "Niederlassung fuer Einsaetze im oestlichen Ruhrgebiet und angrenzenden Staedten.",
  },
];

export const contacts = [
  {
    name: "Reinhard Enbergs",
    role: "Geschaeftsfuehrung",
    focus: "Strategie, Kundenberatung, Angebotsfreigaben",
  },
  {
    name: "Marc Nottbeck",
    role: "Geschaeftsfuehrung",
    focus: "Operative Leitung, Technik, Ausfuehrungsqualitaet",
  },
  {
    name: "Bauleitung",
    role: "Projektkoordination",
    focus: "Ablauf, Baustellenabstimmung, Terminplanung",
  },
  {
    name: "Sekretariat und Buero",
    role: "Erstkontakt",
    focus: "Anfragen, Einsatzorte, Unterlagen und Rueckrufe",
  },
];

export const certifications = [
  "Fachverband Garten-, Landschafts- und Sportplatzbau",
  "RAL Guetezeichen Wald- und Landschaftspflege",
  "Praequalifikation fuer Bauunternehmen",
];

export const sponsorBadges: SponsorBadge[] = [
  {
    image: "/assets/galabau-partner.png",
    title: "Galabau-Partner",
    alt: "Partnerlogo Galabau",
    note: "Mitgliedschaft und Branchennaehe im Garten- und Landschaftsbau.",
  },
  {
    image: "/assets/ral-guetezeichen.png",
    title: "RAL Guetezeichen",
    alt: "RAL Guetezeichen Wald- und Landschaftspflege",
    note: "Qualitaets- und Ausfuehrungsstandards sichtbar gemacht.",
  },
  {
    image: "/assets/pq-vob.png",
    title: "PQ-VOB",
    alt: "Praequalifikation VOB",
    note: "Nachweis fuer oeffentliche und formale Vergabekontexte.",
  },
];

export const reasons = [
  {
    title: "Spezialisiert auf schwierige Baeume",
    text: "Von beengten Hoflagen bis zu Gefahrbaeumen an Strassen oder Gebaeuden: die Seite fuehrt bewusst die Loesung fuer komplexe Faelle.",
  },
  {
    title: "Moderne Technik statt Standardloesung",
    text: "Fuellkran, Fuellbagger, Hubsteiger, Forstmulcher und Wurzelstockfraesen werden je nach Zugang und Risiko kombiniert.",
  },
  {
    title: "Saubere Prozesse fuer Auftraggeber",
    text: "Beratung vor Ort, klare Ausfuehrungswege, fachgerechte Verarbeitung und Entsorgung des Schnittguts stehen im Mittelpunkt.",
  },
  {
    title: "Regional und schnell erreichbar",
    text: "Zwei Standorte schaffen Naehe fuer Privatkunden, Wohnungsunternehmen, Kommunen und Gewerbekunden im Ruhrgebiet.",
  },
];

export const services: Service[] = [
  {
    slug: "baumpflege",
    shortTitle: "Baumpflege",
    title: "Baumpflege fuer sichere, gesunde und verkehrstaugliche Baeume",
    summary:
      "Kronenschnitte, Verkehrssicherheit, Schutzmassnahmen und nachhaltige Pflege gemaess fachlichen Standards.",
    intro:
      "Baumpflege ist mehr als Rueckschnitt. Sie sorgt fuer sichere Kronenraeume, gesunde Entwicklungsbedingungen und einen langfristig belastbaren Bestand.",
    customerProblem: [
      "Aeste wachsen in Verkehrs- oder Gehbereiche hinein.",
      "Die Krone zeigt Totholz, Fehlentwicklungen oder ein unausgewogenes Wachstum.",
      "Wurzeln, Stamm oder Kronenansatz benoetigen Schutz bei Bau- oder Unterhaltungsmassnahmen.",
    ],
    solution: [
      "Fachgerechte Kronenschnitte gemaess ZTV Baum 2017.",
      "Herstellung angemessener Traufhoehen in Fahrbahn- und Gehwegbereichen.",
      "Wurzel- und Stammschutzmassnahmen fuer belastete Standorte.",
    ],
    highlights: ["ZTV Baum 2017", "Verkehrssicherheit", "Schonender Eingriff"],
    steps: [
      {
        title: "Baumaufnahme",
        text: "Vor Ort wird beurteilt, welche Kronenbereiche, Lastverteilungen und Schutzmassnahmen relevant sind.",
      },
      {
        title: "Pflegekonzept",
        text: "Das Team legt fest, welche Schnittart und welche Zugangstechnik fuer den Bestand sinnvoll sind.",
      },
      {
        title: "Ausfuehrung",
        text: "Die Arbeiten werden mit Arbeitsbuehne oder Seilklettertechnik fachgerecht umgesetzt.",
      },
      {
        title: "Nachbereitung",
        text: "Schnittgut wird verarbeitet, Flaechen werden sauber uebergeben und Empfehlungen fuer Folgepflege dokumentiert.",
      },
    ],
    faq: [
      {
        question: "Wann ist Baumpflege sinnvoll?",
        answer: "Immer dann, wenn Verkehrssicherheit, Kronenentwicklung oder Standortschutz aktiv gesteuert werden muessen.",
      },
      {
        question: "Wird nur geschnitten oder auch beraten?",
        answer: "Die neue Seite bildet bewusst Beratung vor Ort, Schadensdiagnosen und Handlungsempfehlungen mit ab.",
      },
    ],
    relatedRegions: ["bottrop", "bottrop-kirchhellen", "castrop-rauxel", "ruhrgebiet"],
  },
  {
    slug: "baumfaellung",
    shortTitle: "Baumfaellung",
    title: "Baumfaellungen mit sicherer Planung und sauberer Ausfuehrung",
    summary:
      "Schonende Faellungen mit abgestimmter Technik fuer enge, sensible oder schwer zugaengliche Situationen.",
    intro:
      "Wenn ein Baum nicht erhalten werden kann, kommt es auf sichere Ablaufe, die passende Technik und die Schonung des Umfelds an.",
    customerProblem: [
      "Der Baum ist nicht mehr standsicher oder stellt eine Gefahr dar.",
      "Gebaeude, Zaeune, Leitungen oder enge Zufahrten erschweren eine Standardfaellung.",
      "Nach der Faellung muessen Schnittgut und Restholz fachgerecht bearbeitet werden.",
    ],
    solution: [
      "Einsatz mit Arbeitsbuehne, Kran, Bagger oder Seilklettertechnik je nach Situation.",
      "Stueckweise Demontage bei beengten Verhaeltnissen.",
      "Verarbeitung und Entsorgung des Materials inklusive sauberer Uebergabe.",
    ],
    highlights: ["Gefahrbaum", "Spezialfaellung", "Umfeldschutz"],
    steps: [
      {
        title: "Risikoanalyse",
        text: "Der Standort, die Kronenlast, das Umfeld und moegliche Sperrzonen werden vorab bewertet.",
      },
      {
        title: "Technikentscheidung",
        text: "Je nach Zugang werden Kran, Bagger, Buehne oder Klettereinsatz kombiniert.",
      },
      {
        title: "Fuellung oder Demontage",
        text: "Der Baum wird kontrolliert und schrittweise entfernt, ohne das Umfeld unnoetig zu belasten.",
      },
      {
        title: "Raeumung",
        text: "Holz, Astwerk und Restmaterial werden auf Wunsch abgefahren oder vor Ort verarbeitet.",
      },
    ],
    faq: [
      {
        question: "Sind auch Faellungen in engen Gaerten moeglich?",
        answer: "Ja. Genau dafuer bildet die Seite Spezialtechnik und Seilklettereinsatz als Kernkompetenz ab.",
      },
      {
        question: "Wird das Schnittgut entsorgt?",
        answer: "Die vorhandene Leistungsbeschreibung nennt ausdruecklich Verarbeitung und Entsorgung als Bestandteil des Angebots.",
      },
    ],
    relatedRegions: ["bottrop", "bottrop-kirchhellen", "castrop-rauxel", "ruhrgebiet"],
  },
  {
    slug: "problembaum-gefahrbaum",
    shortTitle: "Problembaum",
    title: "Gefahrbaeume und Problembaeume sicher beurteilen und handeln",
    summary:
      "Schnelle Einschaetzung und sichere Vorgehensweise bei Schaeden, Schraegstand, Bruchgefahr oder kritischem Totholz.",
    intro:
      "Bei problematischen Baeumen zaehlen Geschwindigkeit, Erfahrung und eine Loesung, die nicht erst vor Ort improvisiert werden muss.",
    customerProblem: [
      "Ein Baum weist Schaeden, Risse oder ploezliche Veraenderungen auf.",
      "Nach Sturm oder Trockenstress besteht Unsicherheit ueber die Stand- oder Bruchsicherheit.",
      "Eine akute Gefahr fuer Personen, Gebaeude oder Verkehrswege muss kurzfristig bewertet werden.",
    ],
    solution: [
      "Vor-Ort-Beratung mit fachlicher Ersteinschaetzung.",
      "Absicherung, Pflege, Entlastung oder Faellung je nach Risiko.",
      "Nutzung von Spezialtechnik bei instabilen oder unzugaenglichen Situationen.",
    ],
    highlights: ["Schnelle Reaktion", "Vor-Ort-Beratung", "Sichere Entscheidung"],
    steps: [
      {
        title: "Meldung",
        text: "Der Schaden oder die Auffaelligkeit wird kurz beschrieben und der Einsatzort abgestimmt.",
      },
      {
        title: "Bewertung",
        text: "Vor Ort wird entschieden, ob Pflege, Sicherung, Teildemontage oder Faellung notwendig ist.",
      },
      {
        title: "Massnahme",
        text: "Die geeignete Technik wird direkt auf das Risiko- und Zugangsszenario abgestimmt.",
      },
      {
        title: "Dokumentation",
        text: "Empfehlungen fuer Folgearbeiten, Restgefahren oder weitere Pruefungen werden transparent festgehalten.",
      },
    ],
    faq: [
      {
        question: "Wie schnell kann reagiert werden?",
        answer: "Die bestehende Positionierung betont schnelle Reaktionsfaehigkeit. Das Projekt stellt diese Notfalllogik nun sichtbar in den Vordergrund.",
      },
      {
        question: "Ist auch eine Wertermittlung oder Begutachtung moeglich?",
        answer: "Ja. Beratung, Schadensdiagnose und Wertermittlung sind Teil des vorgesehenen Leistungsbilds.",
      },
    ],
    relatedRegions: ["bottrop-kirchhellen", "castrop-rauxel", "ruhrgebiet"],
  },
  {
    slug: "seilklettertechnik",
    shortTitle: "Seilklettertechnik",
    title: "Seilklettertechnik fuer schwer erreichbare Baeume",
    summary:
      "Praezise Arbeiten in Kronenraeumen, die mit Maschinen nicht oder nur eingeschraenkt erreichbar sind.",
    intro:
      "Wenn Zufahrten fehlen oder das Umfeld besonders sensibel ist, ermoeglicht Seilklettertechnik kontrollierte Pflege- und Faellarbeiten direkt im Baum.",
    customerProblem: [
      "Der Einsatzort ist zu eng fuer grosse Maschinen.",
      "Empfindliche Gartenanlagen oder Bebauung erlauben keine Standardzugaenge.",
      "Kronenpflege oder Demontage muss abschnittsweise und exakt gesteuert werden.",
    ],
    solution: [
      "Gekonnter Zugang ueber Seilklettertechnik.",
      "Praezise Kronenpflege, Kronensicherung oder Baumdemontage aus der Krone heraus.",
      "Kombination mit Abseil- und Sicherungstechniken fuer kontrollierte Lastwege.",
    ],
    highlights: ["Praezision", "Enge Zugaenge", "Kontrollierte Lastwege"],
    steps: [
      {
        title: "Zugangsklaerung",
        text: "Es wird bewertet, ob Klettertechnik die beste oder einzig sinnvolle Zugangsmethode ist.",
      },
      {
        title: "Sicherungsaufbau",
        text: "Anschlagpunkte, Arbeitsbereiche und Materialwege werden vor Beginn sauber geplant.",
      },
      {
        title: "Arbeit im Baum",
        text: "Pflege- oder Demontagearbeiten erfolgen segmentweise mit direkter Kontrolle ueber Last und Fallrichtung.",
      },
      {
        title: "Rueckbau",
        text: "Material wird sicher zu Boden gebracht und die Flaeche im Anschluss geraeumt.",
      },
    ],
    faq: [
      {
        question: "Wann ist Seilklettertechnik besser als eine Buehne?",
        answer: "Vor allem dann, wenn Zugangsbreiten, Bodenverhaeltnisse oder Hindernisse grosse Technik ausschliessen.",
      },
      {
        question: "Ist die Methode nur fuer Faellungen gedacht?",
        answer: "Nein. Die Bestandsinhalte nennen auch Kronenpflege, Kronensicherungen und EPS-Arbeiten.",
      },
    ],
    relatedRegions: ["bottrop", "castrop-rauxel", "ruhrgebiet"],
  },
  {
    slug: "faellkran",
    shortTitle: "Faellkran",
    title: "Spezialfaellung mit Faellkran fuer besonders anspruchsvolle Einsaetze",
    summary:
      "Kontrollierte Demontage grosser oder sensibler Baeume mit hoher Reichweite und klaren Sicherheitszonen.",
    intro:
      "Der Faellkran ist ein zentrales Verkaufsargument der neuen Seite, weil er Sicherheit, Reichweite und Effizienz fuer komplexe Situationen sichtbar macht.",
    customerProblem: [
      "Grosse Kronen koennen nicht frei fallen gelassen werden.",
      "Gebaeude, Verkehrsflaechen oder Infrastruktur erfordern maximale Kontrolle.",
      "Ein klassischer Arbeitsbuehnen- oder Klettereinsatz waere aufwendiger oder risikoreicher.",
    ],
    solution: [
      "Fuellkraneinsatz fuer kontrolliertes Anheben, Halten und Ablegen von Stamm- und Kronenteilen.",
      "Hohe Arbeitssicherheit durch klar definierte Bewegungs- und Sicherheitsraeume.",
      "Effiziente Bearbeitung auch bei grossen Lasten und komplexen Standorten.",
    ],
    highlights: ["Doll Tree Trimmer Z 930", "Hohe Reichweite", "Sicherheitsvorteil"],
    steps: [
      {
        title: "Standortpruefung",
        text: "Anfahrt, Standflaeche, Schwenkbereich und Lastwege werden vorab abgestimmt.",
      },
      {
        title: "Kranplanung",
        text: "Die einzelnen Picks werden passend zu Gewicht, Reichweite und Umgebung vorbereitet.",
      },
      {
        title: "Demontage",
        text: "Kronen- oder Stammsegmente werden kontrolliert aufgenommen und sicher abgelegt.",
      },
      {
        title: "Abtransport",
        text: "Material kann direkt weiterbearbeitet oder zuegig aus dem Baufeld entfernt werden.",
      },
    ],
    faq: [
      {
        question: "Warum ist der Faellkran ein Vorteil fuer Auftraggeber?",
        answer: "Er reduziert Improvisation am Einsatzort und schafft planbare Sicherheit bei grossen Lasten.",
      },
      {
        question: "Wird der Kran nur fuer Grossbaeume genutzt?",
        answer: "Nein. Entscheidend ist nicht nur die Groesse, sondern vor allem das Umfeld und der notwendige Kontrollgrad.",
      },
    ],
    relatedRegions: ["bottrop", "castrop-rauxel", "ruhrgebiet"],
  },
  {
    slug: "faellbagger",
    shortTitle: "Faellbagger",
    title: "Faellbagger fuer wirtschaftliche Spezialfaellungen und Rodungen",
    summary:
      "Leistungsstarke Loesungen fuer grosse Bestandsmengen, schwierige Flaechen und sichere Bearbeitung aus der Maschine heraus.",
    intro:
      "Wo groesser gedacht werden muss, ergaenzt der Faellbagger den klassischen Baumdienst um Geschwindigkeit und Schlagkraft.",
    customerProblem: [
      "Groessere Flaechen oder Bestandsmengen muessen effizient bearbeitet werden.",
      "Das Gelände verlangt eine robuste Maschinenloesung.",
      "Sicherheit und Tempo muessen bei speziellen Rahmenbedingungen zusammenspielen.",
    ],
    solution: [
      "Maschineller Zugriff fuer anspruchsvolle Faellarbeiten.",
      "Kombination mit Rodung oder Baufeldfreimachung.",
      "Wirtschaftliche Abwicklung auch bei wiederkehrenden oder groesseren Massnahmen.",
    ],
    highlights: ["Wirtschaftlichkeit", "Robuste Technik", "Grosse Flaechen"],
    steps: [
      {
        title: "Einsatzbild klaeren",
        text: "Flaeche, Baumstruktur, Zufahrt und Abfuhrwege werden analysiert.",
      },
      {
        title: "Maschinenkonzept",
        text: "Es wird entschieden, ob Faellbagger, Roderechen oder weiterer Geraeteeinsatz sinnvoll ist.",
      },
      {
        title: "Bearbeitung",
        text: "Der Bestand wird strukturiert, sicher und mit klarer Taktung bearbeitet.",
      },
      {
        title: "Flaechenuebergabe",
        text: "Restmaterial, Wurzelbereiche und Anschlussarbeiten werden passend zum Folgegewerk vorbereitet.",
      },
    ],
    faq: [
      {
        question: "Ist der Faellbagger nur fuer Forstflaechen gedacht?",
        answer: "Nein. Er ist besonders relevant, wenn Flaechenleistung und Sicherheit wichtiger sind als punktuelle Handarbeit.",
      },
      {
        question: "Kann der Einsatz mit Rodung kombiniert werden?",
        answer: "Ja. Genau diese Kombination ist im Seitenkonzept fuer Baufeldfreimachungen vorgesehen.",
      },
    ],
    relatedRegions: ["ruhrgebiet", "castrop-rauxel"],
  },
  {
    slug: "wurzelstockfraesen",
    shortTitle: "Wurzelstockfraesen",
    title: "Wurzelstockfraesen und Baumwurzelbeseitigung fuer saubere Anschlussarbeiten",
    summary:
      "Wurzelfraesen fuer enge Zugange, sensible Flaechen und anschliessende Wiederherstellung des Bodens.",
    intro:
      "Nach der Faellung ist die Arbeit oft erst dann wirklich abgeschlossen, wenn der Wurzelstock weg ist und die Flaeche weitergenutzt werden kann.",
    customerProblem: [
      "Wurzelstoecke blockieren Neubepflanzung, Pflaster, Wege oder Anschlussgewerke.",
      "Enge Zugange hinter Zaeunen, Mauern oder in Innenhoefen erschweren den Einsatz.",
      "Das Fraesgut soll entsorgt und die Flaeche auf Wunsch wieder verfuellt werden.",
    ],
    solution: [
      "Leistungsstarke sowie handgefuehrte Fraesen fuer unterschiedliche Zugangssituationen.",
      "Fraesarbeiten auch an schwer erreichbaren Stellen.",
      "Entsorgung des Fraesguts und Lieferung von Mutterboden als Anschlussleistung.",
    ],
    highlights: ["Enge Zugange", "Handgefuehrte Fraesen", "Mutterboden optional"],
    steps: [
      {
        title: "Zugang und Groesse aufnehmen",
        text: "Vorab wird geklaert, welche Maschine ohne Folgeschaeden an den Einsatzort kommt.",
      },
      {
        title: "Fraestiefe festlegen",
        text: "Die noetige Bearbeitungstiefe richtet sich nach der geplanten Folgennutzung der Flaeche.",
      },
      {
        title: "Fraesen",
        text: "Der Stubben wird kontrolliert entfernt und das Material gesammelt.",
      },
      {
        title: "Wiederherstellung",
        text: "Fraesgut wird abtransportiert und die Flaeche auf Wunsch mit Mutterboden vorbereitet.",
      },
    ],
    faq: [
      {
        question: "Geht das auch in engen Gaerten?",
        answer: "Ja. Das Briefing nennt explizit handgefuehrte Fraesen fuer schwierige oder schmale Zugange.",
      },
      {
        question: "Was passiert mit dem Fraesgut?",
        answer: "Entsorgung und Bodenauffuellung koennen direkt mit abgebildet werden.",
      },
    ],
    relatedRegions: ["bottrop", "bottrop-kirchhellen", "castrop-rauxel"],
  },
  {
    slug: "rodung-baufeldfreimachung",
    shortTitle: "Rodung",
    title: "Rodung und Baufeldfreimachung fuer klare Baustellenstarts",
    summary:
      "Rodungsarbeiten mit Bagger, Roderechen und Mulchtechnik fuer Projekte mit Termin- und Flaechendruck.",
    intro:
      "Wenn Flaechen vorbereitet werden muessen, sind koordinierte Ablaufe und ein belastbarer Maschinenpark wichtiger als reine Einzelmassnahmen.",
    customerProblem: [
      "Vegetation, Aufwuchs oder Restbestaende blockieren Folgegewerke.",
      "Das Baufeld muss in kurzer Zeit sauber uebergeben werden.",
      "Unterschiedliche Materialien und Flaechenverhaeltnisse erfordern mehrere Techniken.",
    ],
    solution: [
      "Rodung mit Bagger und Roderechen.",
      "Forstmulchereinsatz fuer Flaechenbearbeitung.",
      "Abstimmung auf Entsorgung, Abtransport und Folgegewerke.",
    ],
    highlights: ["Baufeldstart", "Mulchtechnik", "Saubere Uebergabe"],
    steps: [
      {
        title: "Baufeld abstimmen",
        text: "Grenzen, Materialarten und Folgearbeiten werden vor Beginn definiert.",
      },
      {
        title: "Technik kombinieren",
        text: "Je nach Bestand werden Bagger, Mulcher und weitere Geraete zusammengestellt.",
      },
      {
        title: "Flaeche bearbeiten",
        text: "Vegetation, Gehloelz und Wurzelmaterial werden strukturiert entfernt.",
      },
      {
        title: "Uebergabe",
        text: "Das Baufeld wird fuer die folgenden Gewerke sauber und nachvollziehbar vorbereitet.",
      },
    ],
    faq: [
      {
        question: "Ist das auch fuer kommunale oder gewerbliche Flaechen gedacht?",
        answer: "Ja. Gerade diese Auftraggebergruppen sind im Gesamtbriefing als Kernzielgruppe vorgesehen.",
      },
      {
        question: "Koennen auch Anschlussleistungen mitgedacht werden?",
        answer: "Das Konzept ist bewusst auf Projektablauf und nicht nur auf den Einzelbaum ausgelegt.",
      },
    ],
    relatedRegions: ["ruhrgebiet", "castrop-rauxel", "bottrop"],
  },
  {
    slug: "eichenprozessionsspinner",
    shortTitle: "EPS",
    title: "Eichenprozessionsspinner beseitigen und vorbeugen",
    summary:
      "Beseitigung und vorbeugende Bekaempfung mit geeigneten Verfahren fuer sensible oeffentliche und private Bereiche.",
    intro:
      "Beim Eichenprozessionsspinner geht es nicht nur um den Baum, sondern um Gesundheitsschutz, schnelle Reaktionszeiten und klare Kommunikation.",
    customerProblem: [
      "Nester oder Raupen stellen ein akutes Gesundheitsrisiko dar.",
      "Schulen, Wohnanlagen, Wege oder oeffentliche Flaechen brauchen schnelle Absicherung.",
      "Betroffene Eichen sind nicht immer maschinell gut erreichbar.",
    ],
    solution: [
      "Beseitigung vorhandener Belastungen.",
      "Vorbeugende Bekaempfung mit zugelassenen Mitteln.",
      "Kombination mit Seilklettertechnik oder Buehneneinsatz bei schwer erreichbaren Baeumen.",
    ],
    highlights: ["Gesundheitsschutz", "Schnelle Reaktion", "Vorbeugung moeglich"],
    steps: [
      {
        title: "Lageeinschaetzung",
        text: "Der Befall und das unmittelbare Risiko fuer Menschen und Nutzung der Flaeche werden beurteilt.",
      },
      {
        title: "Sicherheitsmassnahmen",
        text: "Bereiche koennen abgesichert und das passende Verfahren abgestimmt werden.",
      },
      {
        title: "Bekaempfung oder Beseitigung",
        text: "Je nach Situation wird der akute Befall entfernt oder vorbeugend behandelt.",
      },
      {
        title: "Freigabe",
        text: "Nachkontrolle und klare Kommunikation helfen Auftraggebern bei der weiteren Nutzung der Flaeche.",
      },
    ],
    faq: [
      {
        question: "Ist nur Beseitigung oder auch Vorbeugung moeglich?",
        answer: "Das Briefing nennt ausdruecklich beide Leistungsformen.",
      },
      {
        question: "Wie wird an schlecht erreichbaren Eichen gearbeitet?",
        answer: "Dafuer sind Seilklettertechnik und technische Zugangshilfen vorgesehen.",
      },
    ],
    relatedRegions: ["bottrop", "castrop-rauxel", "ruhrgebiet"],
  },
  {
    slug: "gutachten-beratung",
    shortTitle: "Beratung",
    title: "Gutachten, Beratung und Wertermittlung rund um den Baum",
    summary:
      "Vor-Ort-Beratung, Schadensdiagnosen und fachliche Bewertung fuer fundierte Entscheidungen.",
    intro:
      "Nicht jede Anfrage beginnt mit einer Faellung. Oft braucht es zuerst eine belastbare Einschaetzung, was sinnvoll, notwendig oder wirtschaftlich ist.",
    customerProblem: [
      "Es ist unklar, ob ein Baum erhalten, gepflegt oder entfernt werden sollte.",
      "Schaeden oder Veraenderungen muessen fachlich eingeordnet werden.",
      "Auftraggeber benoetigen eine belastbare Entscheidungsgrundlage fuer Verwaltung, Eigentuemer oder Folgeplanung.",
    ],
    solution: [
      "Beratung direkt am Standort.",
      "Schadensdiagnose und Einordnung sichtbarer Risiken.",
      "Wertermittlung und fachliche Empfehlungen fuer das weitere Vorgehen.",
    ],
    highlights: ["Vor-Ort-Termin", "Schadensdiagnose", "Entscheidungssicherheit"],
    steps: [
      {
        title: "Anliegen klaeren",
        text: "Die Ausgangslage und der Anlass der Anfrage werden vorab gesammelt.",
      },
      {
        title: "Bestandsaufnahme",
        text: "Vor Ort werden Baum, Standort und sichtbare Auffaelligkeiten systematisch aufgenommen.",
      },
      {
        title: "Bewertung",
        text: "Das Ergebnis wird in eine handlungsfaehige Empfehlung uebersetzt.",
      },
      {
        title: "Weiteres Vorgehen",
        text: "Falls noetig, wird direkt ein passender Pflege-, Sicherungs- oder Faelltermin geplant.",
      },
    ],
    faq: [
      {
        question: "Ist die Beratung nur fuer Schadenfaelle gedacht?",
        answer: "Nein. Sie eignet sich auch fuer vorbeugende Pflegeplanung oder Wertermittlung.",
      },
      {
        question: "Kann daraus direkt eine Massnahme beauftragt werden?",
        answer: "Ja. Genau deshalb verbindet das Seitenkonzept Beratung und Ausfuehrung eng miteinander.",
      },
    ],
    relatedRegions: ["bottrop", "bottrop-kirchhellen", "castrop-rauxel", "ruhrgebiet"],
  },
];

export const machines: Machine[] = [
  {
    name: "Doll Tree Trimmer Z 930",
    purpose: "Fuellkraneinsatz fuer kontrollierte Spezialfaellungen",
    benefit: "Hohe Reichweite und planbare Sicherheit bei grossen Lasten, engen Zonen und sensibler Umgebung.",
    specs: ["Spezialgeraet fuer komplexe Baumdemontagen", "Geeignet fuer hohe Sicherheitsanforderungen", "Starker Vertriebsvorteil auf der neuen Website"],
  },
  {
    name: "LKW-Arbeitsbuehnen und Hubsteiger",
    purpose: "Pflege, Rueckschnitt und Faellung mit technischem Zugang",
    benefit: "Schneller, sauberer Zugang zu Kronenraeumen bei guter Anfahrt und sinnvoller Standflaeche.",
    specs: ["Arbeitshoehen als Verkaufsargument sichtbar machen", "Ideal fuer verkehrsnahe und planbare Einsaetze", "Mit Entsorgungslogistik kombinierbar"],
  },
  {
    name: "Wurzelstockfraesen",
    purpose: "Baumwurzelbeseitigung nach Faellung",
    benefit: "Saubere Flaechenfreigabe auch bei schwierigen Zugangssituationen.",
    specs: ["Unterschiedliche Leistungsklassen", "Handgefuehrte Varianten fuer enge Gaerten", "Fraesgutentsorgung und Mutterboden anschliessbar"],
  },
  {
    name: "Forstmulcher und Rodetechnik",
    purpose: "Rodung und Flaechenbearbeitung",
    benefit: "Wirtschaftliche Bearbeitung groesserer Flaechen und belastbarer Anschluss an Folgegewerke.",
    specs: ["Sinnvoll fuer Baufeldfreimachung", "Kombinierbar mit Bagger und Roderechen", "Klarer Nutzen fuer gewerbliche und kommunale Projekte"],
  },
];

export const projectPlaceholders: ProjectPlaceholder[] = [
  {
    title: "Beispielprojekt: Spezialfaellung am Wohnhaus",
    location: "Bottrop-Kirchhellen",
    challenge: "Beengter Garten, wenig Fallraum und schuetzenswerte Umgebung.",
    solution: "Demontage in Teilstuecken mit abgestimmter Zugangstechnik und kontrollierter Materialabnahme.",
    result: "Sichere Ausfuehrung ohne unnoetige Schaeden im Umfeld.",
    note: "Platzhalter fuer kuenftige echte Referenz mit Einsatzfotos und Kennzahlen.",
  },
  {
    title: "Beispielprojekt: Baufeldfreimachung fuer Folgegewerke",
    location: "Castrop-Rauxel",
    challenge: "Zeitkritische Flaechenvorbereitung mit gemischtem Aufwuchs.",
    solution: "Kombination aus Rodung, Maschinenlogistik und sauberer Uebergabe an das Folgegewerk.",
    result: "Strukturiertes Projektformat fuer kuenftige Referenzberichte.",
    note: "Platzhalter - reale Projektstory, Daten und Freigaben muessen spaeter ergaenzt werden.",
  },
  {
    title: "Beispielprojekt: EPS-Massnahme an sensibler Flaeche",
    location: "Ruhrgebiet",
    challenge: "Gesundheitsschutz, kurze Reaktionszeit und schlecht erreichbare Kronenbereiche.",
    solution: "Abgesicherte Beseitigung mit geeignetem Verfahren und klarer Kommunikation an Auftraggeber.",
    result: "Vorlage fuer Referenzinhalte mit Problem, Loesung und Ergebnis.",
    note: "Platzhalter fuer echte kommunale oder gewerbliche Referenz.",
  },
];

export const jobs: Job[] = [
  {
    title: "Forstwirt / Baumpfleger",
    type: "Vollzeit",
    summary: "Fuer Pflege-, Faell- und Maschinenarbeiten im regionalen Einsatz.",
    requirements: ["Fuehrerschein Klasse B", "Zuverlaessigkeit", "Teamfaehigkeit"],
  },
  {
    title: "Baumkletterer",
    type: "Vollzeit",
    summary: "Fuer Seilklettertechnik, Kronenpflege und anspruchsvolle Spezialfaelle.",
    requirements: ["Klettererfahrung oder passende Qualifikation", "Sicherheitsbewusstsein", "Kooperative Arbeitsweise"],
  },
  {
    title: "Baumpflegeassistent / Quereinstieg",
    type: "Vollzeit oder Entwicklungspfad",
    summary: "Einstieg in ein technisch ausgestattetes Team mit Weiterbildungsmoeglichkeiten.",
    requirements: ["Koerperliche Belastbarkeit", "Lernbereitschaft", "Sauberes Auftreten beim Kunden"],
  },
];

export const benefits = [
  "Sicherer Arbeitsplatz in einem spezialisierten Unternehmen",
  "Leistungsgerechte Bezahlung",
  "Modern ausgestatteter Maschinen- und Fuhrpark",
  "Motiviertes Team mit klaren Zustaendigkeiten",
  "Weiterbildung und Entwicklung auch fuer Quereinsteiger",
];

export const audiences: Audience[] = [
  {
    title: "Privatkunden",
    text: "Fuer Gaerten, Hoflagen, schwierige Einzelbaeume und planbare Pflege im Wohnumfeld.",
  },
  {
    title: "Hausverwaltungen",
    text: "Mit klaren Angeboten, sicherer Ausfuehrung und nachvollziehbarer Kommunikation fuer mehrere Standorte.",
  },
  {
    title: "Kommunen",
    text: "Bei Verkehrssicherheit, Eichenprozessionsspinner, Pflegeintervallen und sensiblen Einsatzorten.",
  },
  {
    title: "Gewerbe und Bautraeger",
    text: "Wenn Baufeldfreimachung, Spezialtechnik oder terminorientierte Flaechenleistung gebraucht werden.",
  },
];

export const processItems: ProcessItem[] = [
  {
    title: "Anfrage und Ersteinschaetzung",
    text: "Leistung, Einsatzort und Zeitdruck werden vorab sortiert, damit der Termin direkt sauber vorbereitet ist.",
  },
  {
    title: "Besichtigung vor Ort",
    text: "Zugang, Risiko, Umfeld und die wirtschaftlich sinnvolle Technik werden abgestimmt.",
  },
  {
    title: "Ausfuehrung mit passender Technik",
    text: "Pflege, Faellung, EPS oder Rodung werden nicht pauschal, sondern lagegerecht umgesetzt.",
  },
  {
    title: "Saubere Uebergabe",
    text: "Schnittgut, Restholz, Fraesgut oder Flaechenzustand werden passend zum Folgebedarf abgeschlossen.",
  },
];

export const homeFaqs = [
  {
    question: "Arbeitet Enbergs nur an grossen Spezialfaellen?",
    answer:
      "Nein. Die neue Seite deckt bewusst das gesamte Spektrum von regelmaessiger Baumpflege bis zur technisch anspruchsvollen Spezialfaellung ab.",
  },
  {
    question: "Ist die Website auf lokale Sichtbarkeit vorbereitet?",
    answer:
      "Ja. Leistungen und Einsatzgebiete haben jeweils eigene Seitentypen, damit regionale Suchanfragen sauber abgedeckt werden koennen.",
  },
  {
    question: "Kann das Kontaktformular spaeter an E-Mail oder CRM angebunden werden?",
    answer:
      "Ja. Fuer den Projektstart werden Anfragen bereits serverseitig gespeichert; Mailrouting oder CRM koennen direkt darauf aufsetzen.",
  },
];

export const storyItems: StoryItem[] = [
  {
    title: "Regional verankert",
    text: "Die zwei Standorte in Bottrop-Kirchhellen und Castrop-Rauxel schaffen Naehe zu Privatkunden, Verwaltung, Gewerbe und Kommune.",
  },
  {
    title: "Technisch aufgestellt",
    text: "Die Seite stellt den Maschinenpark bewusst in den Vordergrund, weil Enbergs nicht nur Arbeitskraft, sondern passende Technik liefert.",
  },
  {
    title: "Auf Sicherheit ausgerichtet",
    text: "Von Kronenschnitt bis Spezialfaellung steht nicht Geschwindigkeit um jeden Preis im Vordergrund, sondern kontrollierte und fachlich saubere Ausfuehrung.",
  },
];

export const qualityPillars: Pillar[] = [
  {
    title: "Sicherheit",
    text: "Lagebeurteilung, passende Technik und kontrollierte Arbeitsablaeufe sind der Kern der Positionierung.",
  },
  {
    title: "Sorgfalt",
    text: "Baumumfeld, Zufahrten, Gebaeude und Folgegewerke werden nicht als Nebensache behandelt.",
  },
  {
    title: "Verlaesslichkeit",
    text: "Klare Absprachen, saubere Baustellenlogik und nachvollziehbare Ansprechpartner machen die Zusammenarbeit planbar.",
  },
  {
    title: "Ergebnisorientierung",
    text: "Die neue Seite erklaert nicht nur Leistungen, sondern welches konkrete Ergebnis Auftraggeber am Ende bekommen.",
  },
];

export const machineAdvantages: Pillar[] = [
  {
    title: "Weniger Improvisation vor Ort",
    text: "Fuer schwierige Baumstandorte steht nicht nur Handarbeit, sondern ein abgestimmter Maschinenpark bereit.",
  },
  {
    title: "Passende Technik fuer den Zugang",
    text: "Hubsteiger, Kran, Bagger, Mulcher und Wurzelstockfraesen werden je nach Umfeld und Aufgabe kombiniert.",
  },
  {
    title: "Sauberer Anschluss an Folgearbeiten",
    text: "Entsorgung, Flaechenfreigabe und Vorbereitung fuer Folgegewerke sind Teil des Nutzens, nicht nur ein Nebenprodukt.",
  },
];

export const machineUseCases: ChecklistItem[] = [
  {
    title: "Enge Wohnlagen",
    text: "Wenn Gebaeude, Einfriedungen oder wenig Fallraum eine Standardfaellung ausschliessen.",
  },
  {
    title: "Kommunale Sicherheitsfaelle",
    text: "Wenn Verkehrswege, oeffentliche Nutzung oder Gesundheitsrisiken eine belastbare Umsetzung verlangen.",
  },
  {
    title: "Flaechenprojekte",
    text: "Wenn Rodung, Baufeldfreimachung und wirtschaftliche Taktung wichtiger sind als Einzelloesungen.",
  },
];

export const careerSteps: CareerStep[] = [
  {
    title: "Kurz anfragen",
    text: "Interessenten muessen kein klassisches Anschreiben vorbereiten, sondern koennen direkt den Kontaktweg nutzen.",
  },
  {
    title: "Rueckruf oder Kennenlernen",
    text: "Im naechsten Schritt geht es um Rolle, Erfahrung, Einsatzbereich und Entwicklungspfad im Team.",
  },
  {
    title: "Praxisnaher Einstieg",
    text: "Die Website soll Bewerbern vermitteln, dass Technik, Team und echte Arbeitssituationen im Mittelpunkt stehen.",
  },
];

export const careerReasons: Pillar[] = [
  {
    title: "Modernes Arbeitsumfeld",
    text: "Der Maschinen- und Fuhrpark ist kein Deko-Argument, sondern echter Teil der taeglichen Arbeit.",
  },
  {
    title: "Entwicklung statt Sackgasse",
    text: "Weiterbildung und Quereinstieg werden als reale Perspektive kommuniziert.",
  },
  {
    title: "Klare Verantwortung",
    text: "Geschaeftsfuehrung, Bauleitung und Buero sind auf der Website als greifbare Rollen sichtbar.",
  },
];

export const contactChecklist: ChecklistItem[] = [
  {
    title: "Leistung oder Problem beschreiben",
    text: "Zum Beispiel Baumpflege, Gefahrbaum, EPS, Wurzelstock oder Rodung.",
  },
  {
    title: "Einsatzort nennen",
    text: "Ort, Stadtteil oder kurze Info zur Lage reichen fuer die erste Sortierung aus.",
  },
  {
    title: "Zeitdruck markieren",
    text: "Dringende Faelle oder akute Risiken sollen direkt priorisiert werden koennen.",
  },
];

export const contactBenefits: Pillar[] = [
  {
    title: "Klare Zustaendigkeiten",
    text: "Statt anonyme Mailadresse sieht der Nutzer, wer im Unternehmen fuer was steht.",
  },
  {
    title: "Kurze Nutzerwege",
    text: "Mobil fuehrt die Seite direkt in Anfrage, Kontakt oder Leistungsuebersicht.",
  },
  {
    title: "Serverseitig vorbereitet",
    text: "Das Formular ist technisch bereits so angelegt, dass Mailrouting oder CRM direkt anschliessen koennen.",
  },
];

export const regions: Region[] = [
  {
    slug: "bottrop",
    name: "Bottrop",
    intro:
      "Baumpflege, Baumfaellung und Spezialtechnik fuer Privatgrundstuecke, Wohnanlagen, Gewerbeflaechen und oeffentliche Auftraggeber in Bottrop.",
    focus: [
      "Kurze Wege durch den Standort in Bottrop-Kirchhellen",
      "Geeignet fuer Einzelbaum, Pflegekonzept oder Gefahrbaum",
      "Spezialtechnik fuer sensible Wohnlagen und enge Zufahrten",
    ],
    serviceSlugs: ["baumpflege", "baumfaellung", "wurzelstockfraesen", "gutachten-beratung"],
  },
  {
    slug: "bottrop-kirchhellen",
    name: "Bottrop-Kirchhellen",
    intro:
      "Der Hauptstandort macht Bottrop-Kirchhellen zur zentralen Ausgangsbasis fuer kurzfristige Termine, Besichtigungen und Angebotswege.",
    focus: [
      "Direkte regionale Verankerung",
      "Kurze Reaktionszeit fuer Beratung und Einsatzplanung",
      "Sinnvoll fuer wiederkehrende Pflege und private wie gewerbliche Kunden",
    ],
    serviceSlugs: ["baumpflege", "problembaum-gefahrbaum", "baumfaellung", "gutachten-beratung"],
  },
  {
    slug: "castrop-rauxel",
    name: "Castrop-Rauxel",
    intro:
      "Mit der Niederlassung in Castrop-Rauxel ist auch das oestliche Ruhrgebiet schnell erreichbar - vom Einzelbaum bis zur Flaechenleistung.",
    focus: [
      "Starker Bezug zu Spezialtechnik und groesseren Projekten",
      "Geeignet fuer Rodung, Baufeldfreimachung und komplexe Faellungen",
      "Kurze Wege fuer regionale Gewerbe- und Kommunalauftraege",
    ],
    serviceSlugs: ["baumfaellung", "faellbagger", "rodung-baufeldfreimachung", "eichenprozessionsspinner"],
  },
  {
    slug: "ruhrgebiet",
    name: "Ruhrgebiet",
    intro:
      "Die neue Website positioniert das Unternehmen klar als regionalen Spezialisten fuer das gesamte Ruhrgebiet - mit Technik, Beratung und zwei Standorten als Basis.",
    focus: [
      "Relevanz fuer mehrere Staedte und Zielgruppen",
      "Starke Kombination aus lokaler Naehe und Spezialmaschinen",
      "SEO-Basis fuer weitere Staedte- und Regionsseiten",
    ],
    serviceSlugs: ["faellkran", "seilklettertechnik", "rodung-baufeldfreimachung", "eichenprozessionsspinner"],
  },
];

export const mainNavigation: NavigationItem[] = [
  { href: "/", label: "Start" },
  {
    href: "/leistungen",
    label: "Leistungen",
    children: [
      {
        href: "/leistungen/baumpflege",
        label: "Baumpflege",
        description: "Pflege, Verkehrssicherheit und Standortschutz.",
      },
      {
        href: "/leistungen/baumfaellung",
        label: "Baumfaellung",
        description: "Sichere Faellung mit passender Technik.",
      },
      {
        href: "/leistungen/seilklettertechnik",
        label: "Seilklettertechnik",
        description: "Fuer enge oder schwer erreichbare Lagen.",
      },
      {
        href: "/leistungen/faellkran",
        label: "Faellkran",
        description: "Kontrollierte Spezialfaellung mit Reichweite.",
      },
      {
        href: "/leistungen/wurzelstockfraesen",
        label: "Wurzelstockfraesen",
        description: "Stubben entfernen und Flaechen freigeben.",
      },
      {
        href: "/leistungen/eichenprozessionsspinner",
        label: "EPS",
        description: "Beseitigung und Vorbeugung bei Befall.",
      },
    ],
  },
  { href: "/projekte", label: "Projekte" },
  {
    href: "/naturkunde",
    label: "Naturkunde",
    children: [
      {
        href: "/naturkunde/baeume",
        label: "Baeume",
        description: "Artenportraets, Merkmale und Standortwissen.",
      },
      {
        href: "/naturkunde/baeume/bergahorn",
        label: "Bergahorn",
        description: "Neuer Naturkunde-Beitrag auf Basis des PDF-Faltblatts.",
      },
      {
        href: "/naturkunde/baeume/lichtraumkegel-und-baumschnitt",
        label: "Lichtraumkegel",
        description: "Lichtraumprofil und korrekter Kronenschnitt im Verkehrsraum.",
      },
    ],
  },
  { href: "/maschinenpark", label: "Maschinenpark" },
  { href: "/ueber-uns", label: "Ueber uns" },
  { href: "/karriere", label: "Karriere" },
  {
    href: "/kontakt",
    label: "Kontakt",
    children: [
      {
        href: "/anfrage-vorbereiten",
        label: "Anfrage vorbereiten",
        description: "Die wichtigsten Angaben vorab strukturiert senden.",
      },
      {
        href: "/kontakt",
        label: "Kontakt und Standorte",
        description: "Ansprechpartner, Standorte und direkte Kontaktwege.",
      },
      {
        href: "/einsatzgebiete",
        label: "Einsatzgebiete",
        description: "Bottrop, Kirchhellen, Castrop-Rauxel und Ruhrgebiet.",
      },
    ],
  },
];
