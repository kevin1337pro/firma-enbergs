import Link from "next/link";

export function MobileCtaBar() {
  return (
    <div className="mobile-cta-bar">
      <Link href="/anfrage-vorbereiten">Anfrage</Link>
      <Link href="/kontakt">Kontakt</Link>
      <Link href="/leistungen">Leistungen</Link>
    </div>
  );
}
