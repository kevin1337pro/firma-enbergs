import { appendFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";

type RequestPayload = Record<string, unknown>;

function normalizeValue(value: unknown, fallback = "") {
  return typeof value === "string" ? value.trim() : fallback;
}

export async function POST(request: Request) {
  let payload: RequestPayload;

  try {
    payload = (await request.json()) as RequestPayload;
  } catch {
    return Response.json(
      { message: "Ungueltige Anfrage. Bitte Formular erneut senden." },
      { status: 400 },
    );
  }

  const normalizedPayload: Record<string, string> = Object.fromEntries(
    Object.entries(payload).map(([key, value]) => [key, normalizeValue(value)]),
  );

  const entry: { createdAt: string } & Record<string, string> = {
    createdAt: new Date().toISOString(),
    ...normalizedPayload,
  };

  if (!entry.name || !entry.email || !entry.service || !entry.location || !entry.message) {
    return Response.json(
      { message: "Bitte Name, E-Mail, Leistung, Einsatzort und Nachricht ausfuellen." },
      { status: 400 },
    );
  }

  const storageDir = join(process.cwd(), "storage");
  const storageFile = join(storageDir, "contact-requests.ndjson");

  await mkdir(storageDir, { recursive: true });
  await appendFile(storageFile, `${JSON.stringify(entry)}\n`, "utf8");

  return Response.json({
    message:
      "Anfrage gespeichert. Telefon, E-Mail-Routing oder CRM-Anbindung koennen jetzt im naechsten Schritt angeschlossen werden.",
  });
}
