"use client";

import { FormEvent, useState, useTransition } from "react";

import { services } from "@/data/site-content";

type ContactFormProps = {
  sourcePage: string;
};

type FormState = {
  type: "idle" | "success" | "error";
  message?: string;
};

export function ContactForm({ sourcePage }: ContactFormProps) {
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
          "Anfrage gespeichert. Fuer die weitere Integration koennen nun Mail- oder CRM-Workflows angeschlossen werden.",
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
    <form className="contact-form" onSubmit={handleSubmit}>
      <input type="hidden" name="sourcePage" value={sourcePage} />

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
          <input name="email" type="email" placeholder="name@beispiel.de" required />
        </label>
        <label>
          Telefon
          <input name="phone" placeholder="Rueckrufnummer" />
        </label>
        <label>
          Leistung
          <select defaultValue="" name="service" required>
            <option value="" disabled>
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
          <input
            name="location"
            placeholder="Ort oder Stadtteil"
            required
          />
        </label>
      </div>

      <label>
        Kurzbeschreibung
        <textarea
          name="message"
          placeholder="Was ist die Situation vor Ort? Gibt es Zeitdruck oder besondere Zugangsbedingungen?"
          rows={6}
          required
        />
      </label>

      <label className="checkbox">
        <input name="urgent" type="checkbox" value="ja" />
        <span>Es handelt sich um eine dringende Anfrage.</span>
      </label>

      <div className="contact-form__footer">
        <button className="button" disabled={isPending} type="submit">
          {isPending ? "Wird gespeichert..." : "Anfrage absenden"}
        </button>
        <p className="form-note">
          Formulareintraege werden derzeit serverseitig in `storage/contact-requests.ndjson`
          protokolliert.
        </p>
      </div>

      {formState.type !== "idle" ? (
        <p
          className={
            formState.type === "success" ? "form-status form-status--success" : "form-status form-status--error"
          }
        >
          {formState.message}
        </p>
      ) : null}
    </form>
  );
}
