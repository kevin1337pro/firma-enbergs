"use client";

import { FormEvent, useState, useTransition } from "react";

import { services } from "@/data/site-content";

type FormState = {
  type: "idle" | "success" | "error";
  message?: string;
};

const requesterTypes = [
  "Privatkunde",
  "Hausverwaltung",
  "Kommune",
  "Gewerbe",
  "Bautraeger",
];

const urgencyLevels = ["Flexibel", "Zeitnah", "Dringend"];

const propertyTypes = [
  "Privatgrundstueck",
  "Wohnanlage",
  "Gewerbeflaeche",
  "Oeffentlicher Bereich",
  "Baustelle oder Baufeld",
];

const treeScopes = ["Einzelbaum", "2 bis 5 Baeume", "Groesserer Bestand"];

const accessTypes = [
  "Direkte Zufahrt moeglich",
  "Enger Zugang",
  "Hinterhof oder Gartenlage",
  "Noch unklar",
];

const goals = [
  "Baumpflege",
  "Baumfaellung",
  "Gefahrbaum oder Einschaetzung",
  "EPS",
  "Rodung oder Baufeldfreimachung",
  "Wurzelstock oder Fraesung",
];

const callbackWindows = ["Vormittags", "Mittags", "Nachmittags", "Flexibel"];

export function RequestPreparationForm() {
  const [formState, setFormState] = useState<FormState>({ type: "idle" });
  const [isPending, startTransition] = useTransition();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    startTransition(() => {
      void submitForm(payload, form);
    });
  }

  async function submitForm(
    payload: Record<string, FormDataEntryValue>,
    form: HTMLFormElement,
  ) {
    setFormState({ type: "idle" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "Anfrage konnte nicht gespeichert werden.");
      }

      form.reset();
      setFormState({
        type: "success",
        message:
          result.message ??
          "Anfrage gespeichert. Das Team hat jetzt bereits die wichtigsten Vorabinformationen.",
      });
    } catch (error) {
      setFormState({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unbekannter Fehler bei der Anfrage.",
      });
    }
  }

  return (
    <form className="contact-form request-prep-form" onSubmit={handleSubmit}>
      <input name="sourcePage" type="hidden" value="anfrage-vorbereiten" />

      <section className="request-section">
        <div className="stack-sm">
          <p className="eyebrow">1. Einsatz</p>
          <h2>Worum geht es?</h2>
          <p className="form-note">
            Diese Angaben helfen, Leistung, Region und Dringlichkeit sofort richtig
            einzuordnen.
          </p>
        </div>

        <div className="form-grid">
          <label>
            Leistung
            <select defaultValue="" name="service" required>
              <option disabled value="">
                Bitte waehlen
              </option>
              {services.map((service) => (
                <option key={service.slug} value={service.shortTitle}>
                  {service.shortTitle}
                </option>
              ))}
            </select>
          </label>

          <label>
            Einsatzort
            <input name="location" placeholder="Ort oder Stadtteil" required />
          </label>

          <label>
            Auftraggeber
            <select defaultValue="" name="requesterType">
              <option value="">Optional auswaehlen</option>
              {requesterTypes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label>
            Dringlichkeit
            <select defaultValue="" name="urgency">
              <option value="">Bitte waehlen</option>
              {urgencyLevels.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label>
            Flaechentyp
            <select defaultValue="" name="propertyType">
              <option value="">Bitte waehlen</option>
              {propertyTypes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label>
            Umfang
            <select defaultValue="" name="treeScope">
              <option value="">Bitte waehlen</option>
              {treeScopes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
        </div>
      </section>

      <section className="request-section">
        <div className="stack-sm">
          <p className="eyebrow">2. Situation</p>
          <h2>Was ist vor Ort wichtig?</h2>
          <p className="form-note">
            Je genauer der Zugang und die Ausgangslage beschrieben sind, desto zielgerichteter
            kann die erste Einschaetzung ausfallen.
          </p>
        </div>

        <div className="form-grid">
          <label>
            Zugangssituation
            <select defaultValue="" name="accessType">
              <option value="">Bitte waehlen</option>
              {accessTypes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label>
            Ziel der Anfrage
            <select defaultValue="" name="goal">
              <option value="">Bitte waehlen</option>
              {goals.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label>
            Wunsch fuer Rueckruf
            <select defaultValue="" name="callbackWindow">
              <option value="">Bitte waehlen</option>
              {callbackWindows.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label>
          Kurzbeschreibung
          <textarea
            name="message"
            placeholder="Was ist die Situation vor Ort? Gibt es Schadstellen, enge Zugaenge, Zeitdruck oder sensible Bereiche?"
            required
            rows={7}
          />
        </label>
      </section>

      <section className="request-section">
        <div className="stack-sm">
          <p className="eyebrow">3. Kontaktdaten</p>
          <h2>Wie soll Enbergs dich erreichen?</h2>
        </div>

        <div className="form-grid">
          <label>
            Name
            <input name="name" placeholder="Ihr Name" required />
          </label>

          <label>
            Unternehmen
            <input name="company" placeholder="Optional" />
          </label>

          <label>
            E-Mail
            <input
              name="email"
              placeholder="name@beispiel.de"
              required
              type="email"
            />
          </label>

          <label>
            Telefon
            <input name="phone" placeholder="Rueckrufnummer" />
          </label>
        </div>
      </section>

      <div className="contact-form__footer">
        <button className="button" disabled={isPending} type="submit">
          {isPending ? "Wird gespeichert..." : "Jetzt Anfrage vorbereiten"}
        </button>
        <p className="form-note">
          Die Angaben werden derzeit serverseitig in `storage/contact-requests.ndjson`
          protokolliert.
        </p>
      </div>

      {formState.type !== "idle" ? (
        <p
          className={
            formState.type === "success"
              ? "form-status form-status--success"
              : "form-status form-status--error"
          }
        >
          {formState.message}
        </p>
      ) : null}
    </form>
  );
}
