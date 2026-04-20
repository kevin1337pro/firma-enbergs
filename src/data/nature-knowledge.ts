export type KnowledgeCategory = {
  slug: string;
  title: string;
  summary: string;
  intro: string;
};

export type KnowledgeFact = {
  label: string;
  value: string;
};

export type KnowledgeArticleSection = {
  title: string;
  paragraphs: string[];
  points?: string[];
};

export type KnowledgeArticle = {
  slug: string;
  categorySlug: string;
  title: string;
  subtitle: string;
  teaser: string;
  description: string;
  coverImage: string;
  coverAlt: string;
  coverCredit: string;
  coverFit?: "cover" | "contain";
  coverPosition?: string;
  sourceTitle: string;
  sourceOrganisation: string;
  intro: string[];
  chips: string[];
  sections: KnowledgeArticleSection[];
  facts: KnowledgeFact[];
  relatedServiceSlugs: string[];
};

export const knowledgeCategories: KnowledgeCategory[] = [
  {
    slug: "baeume",
    title: "Baeume",
    summary:
      "Artenportraets, Standortwissen und kompakte Naturkunde-Texte fuer gaengige Baumarten.",
    intro:
      "Die Rubrik sammelt verstaendliche, fachlich saubere Einordnungen zu Baumarten, Erkennungsmerkmalen, Standortanspruechen und Nutzung.",
  },
];

export const knowledgeArticles: KnowledgeArticle[] = [
  {
    slug: "bergahorn",
    categorySlug: "baeume",
    title: "Bergahorn",
    subtitle: "Acer pseudoplatanus L.",
    teaser:
      "Der Bergahorn ist die haeufigste Ahornart Mitteleuropas. Er waechst schnell, kann mehrere Jahrhunderte alt werden und spielt sowohl im Wald als auch in Parks und Alleen eine wichtige Rolle.",
    description:
      "Ein mittellanger Naturkunde-Beitrag ueber den Bergahorn mit Merkmalen, Standort, Waldrolle, Holz und typischen Besonderheiten.",
    coverImage: "/assets/bergahorn-cover-excerpt.png",
    coverAlt: "Cover-Ausschnitt mit einem ausgewachsenen Bergahorn",
    coverCredit:
      "Cover-Ausschnitt aus dem Faltblatt \"Der Bergahorn\"",
    coverFit: "cover",
    coverPosition: "center top",
    sourceTitle: "Der Bergahorn",
    sourceOrganisation: "Schutzgemeinschaft Deutscher Wald (SDW)",
    intro: [
      "Spannend wird es beim Bergahorn oft schon im Spaetsommer: Dann reifen die typischen Fluegelnuesse, die sich wie kleine Propeller drehen und von Kindern gern als \"Nasenzwicker\" verwendet werden. Hinter diesem leicht wiedererkennbaren Detail steckt eine der praegendsten heimischen Ahornarten.",
      "Der Bergahorn gehoert zu den Edellaubbaumarten Europas und kommt vor allem in kuehl-feuchten Mittelgebirgs- und Gebirgslagen vor. In Mitteleuropa ist er die haeufigste Ahornart und damit ein Baum, der nicht nur im Wald, sondern auch in Parks, grossen Gaerten und vielerorts im Siedlungsraum praesent ist.",
    ],
    chips: ["Naturkunde", "Laubbaum", "Ahornart", "Edellaubholz"],
    sections: [
      {
        title: "Vorkommen und Standort",
        paragraphs: [
          "Natuerlich verbreitet ist der Bergahorn vor allem in mittleren und hoeheren Lagen der Gebirge. Dort findet man ihn in Laubmischwaeldern, haeufig zusammen mit Buche, Esche, Bergulme oder Sommerlinde. Im Huegelland kommt er ebenfalls vor, besonders in frischen und naehrstoffreicheren Lagen.",
          "Der Baum mag gut wasserversorgte Boeden und vertraegt in jungen Jahren auch Schatten oder Halbschatten. Im Alter braucht er mehr Licht. Wo sich die Buche auf bewegtem Boden oder in feuchten Schluchten schwertut, kann der Bergahorn staerker in Erscheinung treten und die typischen Schluchtwaelder mitpraegen.",
        ],
        points: [
          "Bevorzugt kuehl-feuchte Standorte",
          "Hauefig in Mittelgebirgen und Gebirgslagen",
          "Gut auf naehrstoffreichen, frischen Boeden",
        ],
      },
      {
        title: "Woran man den Bergahorn erkennt",
        paragraphs: [
          "Der Bergahorn wird 25 bis ueber 30 Meter hoch und kann ein sehr hohes Alter erreichen. Einzelbaeume bilden einen geraden Stamm, aufstrebende Aeste und eine breite, abgerundete Krone. Die grossen Blaetter stehen paarweise gegenueber, sind meist fuenflappig und verfaerben sich im Herbst goldgelb.",
          "Typisch sind auch die gelbgruenen Blueten im Mai sowie die auffaelligen Fluegelfruechte, die im September und Oktober reifen. Im Alter veraendert sich die Rinde deutlich: Aus der anfangs glatten graubraunen Oberflaeche wird eine dunkel- bis rotbraune, abschuppende Borke, die an alte Platanen erinnert.",
        ],
        points: [
          "Fuenflappige, groesstenteils handfoermige Blaetter",
          "Gelbgruene Blueten im Mai",
          "Propellerartige Fruechte im Herbst",
        ],
      },
      {
        title: "Rolle im Wald",
        paragraphs: [
          "Forstlich ist der Bergahorn die wichtigste heimische Ahornart. Er waechst in jungen Jahren schnell, wird spaeter aber haeufig von der Buche ueberholt. Gerade deshalb tritt er im Wald oft einzeln oder in kleineren Gruppen auf, statt grosse Reinbestaende zu bilden.",
          "Oekologisch ist der Baum wertvoll, weil seine Laubstreu zu naehrstoffreichem Humus verrottet und so zur Bodenverbesserung beitraegt. Als Pionierpflanze kann er zudem Freiflaechen oder stoerungsgepraegte Standorte gut besiedeln. Interessant ist auch, dass Ahorne unter den heimischen Baumgattungen eine Sonderrolle einnehmen: Sie bilden keine funktionelle Mykorrhiza mit Bodenpilzen aus.",
        ],
      },
      {
        title: "Holz und Nutzung",
        paragraphs: [
          "Das Holz des Bergahorns zaehlt zu den wertvollsten heimischen Edellaubhoelzern. Es ist sehr hell, relativ hart, elastisch und formstabil. Weil es im Aussenbereich nur begrenzt widerstandsfaehig ist, wird es vor allem im Innenausbau, fuer Moebel, Parkett, Einlegearbeiten und feinere Holzarbeiten genutzt.",
          "Besonders bekannt ist Ahornholz im Instrumentenbau. Streich- und Blasinstrumente sowie hochwertige Gitarren oder Geigen werden seit langem aus Bergahorn gefertigt. Eine dekorative Sonderform ist der sogenannte Riegelahorn, dessen Maserung als besonders begehrtes Ton- und Zierholz gilt.",
        ],
      },
      {
        title: "Besonderheiten und Hinweise",
        paragraphs: [
          "Nicht jede auffaellige Blattveraenderung ist gleich ein Problem. Die schwarzen, teerartigen Flecken auf den Blaettern sind ein klassisches Beispiel: Die sogenannte Teerfleckenkrankheit sieht markant aus, gilt fuer den Baum aber als weitgehend ungefaehrlich.",
          "Empfindlicher reagiert der Bergahorn auf Spaetfroste und auf Streusalz. Im Siedlungsraum kann ausserdem die Russrindenkrankheit eine Rolle spielen. Gleichzeitig macht ihn seine Kronenform, sein Wuchs und seine Blattmasse zu einem markanten Baum fuer Parks, Alleen und grosse Gruenraeume.",
        ],
        points: [
          "Teerflecken sehen auffaellig aus, sind aber meist harmlos",
          "Spaetfroste koennen schaedigen",
          "Streusalz wird schlecht vertragen",
        ],
      },
    ],
    facts: [
      { label: "Familie", value: "Ahorngewaechse" },
      { label: "Alter", value: "bis etwa 600 Jahre" },
      { label: "Hoehe", value: "bis ueber 30 Meter" },
      { label: "Bluete", value: "Mai" },
      { label: "Frucht", value: "Fluegelfruchtpaar, Reife ab September" },
      { label: "Herbstfarbe", value: "goldgelb" },
      { label: "Wurzeltyp", value: "starke Herzwurzel" },
      { label: "Holz", value: "hell, hart, elastisch und wertvoll" },
    ],
    relatedServiceSlugs: ["baumpflege", "gutachten-beratung"],
  },
  {
    slug: "lichtraumkegel-und-baumschnitt",
    categorySlug: "baeume",
    title: "Lichtraumkegel von Baeumen",
    subtitle: "Wie Baeume korrekt fuer Verkehrsraum und Aufbau geschnitten werden",
    teaser:
      "Wer Baeume an Wegen, Strassen oder Zufahrten pflegt, muss den nutzbaren Raum unter der Krone frueh mitdenken. Ein fachgerechter Schnitt schafft Lichtraum, ohne den Baum spaeter durch grobe Eingriffe zu entstellen.",
    description:
      "Ein praxisnaher Beitrag ueber Lichtraumprofil, Jungbaumpflege und fachgerechten Kronenschnitt auf Basis der FLL-/Stadtgruen-Praesentation von Juergen Rohrbach.",
    coverImage: "/assets/rohrbach-urbanes-pflanztechniken-cover.png",
    coverAlt: "Titelfolie der Praesentation zu urbanen Pflanztechnologien von Juergen Rohrbach",
    coverCredit:
      "Titelfolie aus der PDF FS_8__Stadtgruen_13_Rohrbach_.pdf",
    coverFit: "contain",
    coverPosition: "center center",
    sourceTitle: "FLL-Regelwerke zu urbanen Pflanztechnologien",
    sourceOrganisation: "Jürgen Rohrbach / Forschungsgesellschaft Landschaftsentwicklung Landschaftsbau e. V.",
    intro: [
      "Im Alltag wird oft vom Lichtraumkegel eines Baumes gesprochen, wenn Aeste ueber Fahrbahnen, Gehwegen oder Einfahrten stoeren. Fachlich steht dahinter vor allem das Lichtraumprofil: also der Raum, der fuer Nutzung, Verkehr und Sicherheit frei gehalten werden muss.",
      "Die Praesentation von Juergen Rohrbach zum 8. Symposium Stadtgruen macht deutlich, dass dieser Raum nicht erst bei Beschwerden oder Notfaellen beruecksichtigt werden sollte. In den FLL-Empfehlungen fuer Baumpflanzungen und in der ZTV Baumpflege wird das Thema frueh mit Planung, Entwicklungs- und Unterhaltungspflege sowie Jungbaumpflege verknuepft.",
    ],
    chips: ["Naturkunde", "Lichtraumprofil", "Jungbaumpflege", "Baumschnitt"],
    sections: [
      {
        title: "Was mit dem Lichtraum gemeint ist",
        paragraphs: [
          "In Verkehrsraeumen muessen Baeume so entwickelt werden, dass Wege, Strassen und angrenzende Nutzflaechen sicher benutzbar bleiben. Genau diesen Zusammenhang nennt die von Rohrbach vorgestellte FLL-Systematik ausdruecklich: Bei Baumpflanzungen in Verkehrsraeumen sind Nutzung der Verkehrsflachen, Lichtraumprofil, Standortbedingungen, Verkehrssicherheit sowie Nutzung und Gestaltung des Umfeldes gemeinsam zu bedenken.",
          "Praktisch bedeutet das: Der Baum wird nicht nur als Gruenobjekt gesehen, sondern immer auch im Zusammenspiel mit seiner Umgebung. Ein spaeterer Freischnitt mit drastischen Eingriffen ist oft das Ergebnis einer zu spaeten oder fehlenden Aufbaupflege.",
        ],
        points: [
          "Lichtraum immer zusammen mit Verkehrssicherheit betrachten",
          "Standort und Umfeld frueh in die Kronenentwicklung einbeziehen",
          "Spaetreaktionen vermeiden, fruehe Pflege bevorzugen",
        ],
      },
      {
        title: "Warum der richtige Schnitt frueh beginnen muss",
        paragraphs: [
          "Die PDF verweist mehrfach auf fachgerechte Entwicklungs- und Unterhaltungspflege in der Jugendphase. Das ist der entscheidende Punkt: Ein junger Baum wird so begleitet, dass Stammverlaengerung, Leitaeste und spaetere Kronenunterkante frueh sauber aufgebaut werden. Dadurch entsteht der benoetigte Raum unter der Krone nicht durch harte Rueckschnitte im Alter, sondern durch planvolle Erziehung.",
          "Rohrbach verweist ausserdem auf Kapitel 9 der Empfehlungen fuer Baumpflanzungen Teil 1. Dort werden Schnittmassnahmen einschliesslich Jungbaumpflege als eigener Pflegebereich gefuehrt. Zusaetzlich nennt die ZTV Baumpflege bei Jungbaeumen Erziehungs- und Aufbauschnitt als zentralen Bezugspunkt.",
        ],
      },
      {
        title: "So wird korrekt geschnitten",
        paragraphs: [
          "Ein fachgerechter Schnitt orientiert sich am Aufbau des Baumes und nicht am kurzfristigen Freiraumbedarf allein. Entfernt werden zuerst Konkurrenztriebe, Fehlentwicklungen, reibende oder zu tief ansetzende Aeste, bevor spaeter groessere Korrekturen noetig werden. Ziel ist eine belastbare Kronenstruktur mit klarer Stammachse und einer Hoehe, die zum kuenftigen Nutzungsraum passt.",
          "Wichtig ist auch, dass der Schnitt nicht mit einem radikalen Aufasten verwechselt wird. Werden zu viele tiefer sitzende Aeste auf einmal entfernt oder starke Schnittwunden verursacht, reagiert der Baum haeufig mit Stress, Fehltrieben oder statischen Nachteilen. Besser sind wiederholte, maessige Eingriffe mit klarer Schnittfuehrung nach anerkannten Regeln der Baumpflege.",
        ],
        points: [
          "Kleine, fruehe Korrekturen sind besser als spaete Grobeingriffe",
          "Stammachse und Kronenaufbau erhalten",
          "Nicht auf einen Schlag zu stark aufasten",
        ],
      },
      {
        title: "Typische Fehler beim Freischneiden",
        paragraphs: [
          "Ein haeufiger Fehler ist, das Lichtraumprofil erst dann zu beachten, wenn Fahrzeuge, Fussgaenger oder Anlieger bereits behindert werden. Dann wird schnell und oft zu stark geschnitten. Das loest kurzfristig das Platzproblem, verschiebt aber die Folgekosten in die Zukunft.",
          "Ebenso problematisch ist ein Schnitt ohne Bezug zum Standort. Gerade im innerstaedtischen Raum verweist Rohrbach auf problematische Standortverhaeltnisse wie Verdichtung, Wasserprobleme, Anfahrschaeden oder begrenzten Wurzelraum. Solche Bedingungen machen Baeume ohnehin anfaelliger. Ueberzogene Schnittmassnahmen verstaerken diesen Druck oft noch.",
        ],
      },
      {
        title: "Was der Beitrag aus der PDF mitnimmt",
        paragraphs: [
          "Die Praesentation liefert keine Schritt-fuer-Schritt-Schnittschule, sie setzt aber die fachlich wichtige Klammer: Lichtraumprofil ist Teil der Planung und der spaeteren Pflege, nicht nur eine Notmassnahme. Pflanzschnitt, Jungbaumpflege, Entwicklungs- und Unterhaltungspflege sowie die Verweisung auf die ZTV Baumpflege bilden zusammen genau den Rahmen, in dem korrekter Schnitt stattfinden soll.",
          "Fuer die Praxis heisst das: Wer frueh plant, standortgerecht pflanzt und den Kronenaufbau regelmaessig begleitet, erreicht den benoetigten Freiraum meist mit deutlich kleineren Eingriffen. Das ist fuer Baum, Umfeld und langfristige Pflegekosten fast immer die bessere Loesung.",
        ],
      },
    ],
    facts: [
      { label: "Schluesselbegriff", value: "Lichtraumprofil im Verkehrsraum" },
      { label: "Wichtige Quelle", value: "FLL Empfehlungen fuer Baumpflanzungen Teil 1" },
      { label: "Pflegefokus", value: "Entwicklungs- und Unterhaltungspflege" },
      { label: "Schnittbezug", value: "Pflanzschnitt und Jungbaumpflege" },
      { label: "Weiterfuehrung", value: "Schnittfuehrung nach ZTV Baumpflege" },
      { label: "Ziel", value: "Verkehrssicherheit und stabiler Kronenaufbau" },
      { label: "Risiko bei Fehlern", value: "Spaete, harte Korrekturschnitte" },
      { label: "Praxisprinzip", value: "frueh erziehen statt spaet radikal freischneiden" },
    ],
    relatedServiceSlugs: ["baumpflege", "gutachten-beratung", "problembaum-gefahrbaum"],
  },
];

export function getKnowledgeCategory(slug: string) {
  return knowledgeCategories.find((category) => category.slug === slug);
}

export function getKnowledgeArticlesByCategory(categorySlug: string) {
  return knowledgeArticles.filter((article) => article.categorySlug === categorySlug);
}

export function getKnowledgeArticle(categorySlug: string, articleSlug: string) {
  return knowledgeArticles.find(
    (article) =>
      article.categorySlug === categorySlug && article.slug === articleSlug,
  );
}
