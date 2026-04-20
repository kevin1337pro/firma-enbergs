# Firma Enbergs

Initiales Website-Projekt fuer den geplanten Relaunch der Baumdienst Enbergs GmbH.

## Stack

- Next.js App Router
- TypeScript
- CSS ohne externes UI-Framework

## Enthalten

- Startseite mit Hero, Leistungsmodulen, Technik, Referenzstruktur, Regionen und Kontaktabschluss
- Einzelseiten fuer Leistungen
- Seiten fuer Projekte, Maschinenpark, Ueber uns, Karriere, Kontakt und Einsatzgebiete
- `sitemap.xml` und `robots.txt`
- funktionierendes Anfrageformular mit serverseitiger Ablage in `storage/contact-requests.ndjson`

## Start

```bash
npm install
npm run dev
```

## Hinweis zur lokalen Laufzeit

Die Scripts `dev`, `build` und `start` synchronisieren automatisch die von Next erzeugten
Server-Chunks aus `.next/server/chunks` nach `.next/server`, weil die lokale Runtime sonst
vereinzelt fehlende Chunk-Dateien referenziert.

## Roadmap

- Weitere Projekt- und Ausbauideen stehen in `WEBSITE_ROADMAP.md`.

## Offene Punkte vor Go-live

- Telefonnummern und E-Mail-Adressen aus der Bestandssite uebernehmen
- Impressum und Datenschutzerklaerung finalisieren
- echte Projektfreigaben, Einsatzfotos und Kundenreferenzen einpflegen
- optional Mailversand oder CRM-Anbindung fuer Formularabsendungen hinterlegen
