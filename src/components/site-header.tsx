"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNavigation } from "@/data/site-content";
import "./site-header.css";

function matchesPath(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}
function label(text: string) {
  const labels: Record<string, string> = { "Ueber uns": "Über uns", "Baumfaellung": "Baumfällung", "Faellkran": "Fällkran", "Wurzelstockfraesen": "Wurzelstockfräsen", "Baeume": "Bäume" };
  return labels[text] ?? text;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.classList.toggle("en-menu-open", menuOpen);
    return () => document.body.classList.remove("en-menu-open");
  }, [menuOpen]);
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        if (menuOpen) { setMenuOpen(false); setExpandedItem(null); toggleRef.current?.focus(); }
        else {
          const item = (document.activeElement as HTMLElement | null)?.closest(".en-desktop-nav__item");
          item?.querySelector<HTMLButtonElement>(".en-desktop-nav__toggle")?.focus();
          setExpandedItem(null);
        }
      }
      if (event.key === "Tab" && menuOpen && panelRef.current) {
        const items = [toggleRef.current, ...Array.from(panelRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'))].filter((item): item is HTMLElement => !!item && item.getClientRects().length > 0);
        const first = items[0], last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    }
    function onPointerDown(event: PointerEvent) { if (!headerRef.current?.contains(event.target as Node)) setExpandedItem(null); }
    function onResize() { if (window.innerWidth > 1250) setMenuOpen(false); }
    function onHistoryNavigation() { setMenuOpen(false); setExpandedItem(null); }
    document.addEventListener("keydown", onKeyDown); document.addEventListener("pointerdown", onPointerDown); window.addEventListener("resize", onResize); window.addEventListener("popstate", onHistoryNavigation);
    return () => { document.removeEventListener("keydown", onKeyDown); document.removeEventListener("pointerdown", onPointerDown); window.removeEventListener("resize", onResize); window.removeEventListener("popstate", onHistoryNavigation); };
  }, [menuOpen]);
  function closeNavigation() { setMenuOpen(false); setExpandedItem(null); }

  return <header className={`en-header${menuOpen ? " is-open" : ""}`} ref={headerRef}>
    <div className="en-header__inner">
      <Link className="en-brand" href="/" onClick={closeNavigation} aria-label="Enbergs Baumdienst – zur Startseite">
        <span className="en-brand__mark" aria-hidden="true"><svg viewBox="0 0 40 40" fill="none"><path d="M20 34V12M20 26l-7-6M20 22l7-6M20 18l-4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/><path d="M20 4C11.6 4 6 10.7 6 18.1c0 7.1 5.9 12.6 14 12.6s14-5.5 14-12.6C34 10.7 28.4 4 20 4Z" stroke="currentColor" strokeWidth="1.5"/></svg></span>
        <span className="en-brand__text"><strong>ENBERGS</strong><small>BAUMDIENST</small></span>
      </Link>
      <nav className="en-desktop-nav" aria-label="Hauptnavigation">
        {mainNavigation.map(item => {
          const active = matchesPath(pathname, item.href), expanded = expandedItem === item.label;
          return <div className="en-desktop-nav__item" key={item.href}>
            <Link className={active ? "is-active" : ""} href={item.href} onClick={closeNavigation} aria-current={active ? "page" : undefined}>{label(item.label)}</Link>
            {item.children && <><button className="en-desktop-nav__toggle" type="button" aria-expanded={expanded} aria-label={`${label(item.label)} Untermenü ${expanded ? "schließen" : "öffnen"}`} onClick={() => setExpandedItem(expanded ? null : item.label)}><span aria-hidden="true">⌄</span></button><div className="en-desktop-nav__dropdown" hidden={!expanded}><span className="en-desktop-nav__eyebrow">Entdecken</span>{item.children.map(child => <Link key={child.href} href={child.href} onClick={closeNavigation}><span>{label(child.label)}</span><span aria-hidden="true">↗</span></Link>)}</div></>}
          </div>;
        })}
      </nav>
      <Link className="en-header__contact" href="/anfrage-vorbereiten" onClick={closeNavigation}><span>Anfrage stellen</span><span aria-hidden="true">↗</span></Link>
      <button className="en-menu-toggle" ref={toggleRef} type="button" aria-expanded={menuOpen} aria-controls="en-mobile-menu" aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"} onClick={() => { setMenuOpen(!menuOpen); setExpandedItem(null); }}><span className="en-menu-toggle__label">{menuOpen ? "Schließen" : "Menü"}</span><span className="en-menu-toggle__icon" aria-hidden="true"><i/><i/></span></button>
    </div>
    <div className="en-mobile-menu" id="en-mobile-menu" ref={panelRef} inert={!menuOpen}>
      <div className="en-mobile-menu__inner">
        <div className="en-mobile-menu__eyebrow">Navigation <span>Enbergs Baumdienst</span></div>
        <nav className="en-mobile-menu__links" aria-label="Mobile Navigation">
          {mainNavigation.map((item, index) => {
            const expanded = expandedItem === item.label;
            return <div className="en-mobile-menu__item" key={item.href} style={{"--item-index": index} as React.CSSProperties}>
              <div className="en-mobile-menu__row"><span className="en-mobile-menu__number">{String(index + 1).padStart(2, "0")}</span><Link href={item.href} onClick={closeNavigation}>{label(item.label)}</Link>{item.children ? <button type="button" onClick={() => setExpandedItem(expanded ? null : item.label)} aria-expanded={expanded} aria-label={`${label(item.label)} Untermenü ${expanded ? "schließen" : "öffnen"}`}><span aria-hidden="true">{expanded ? "−" : "+"}</span></button> : <span className="en-mobile-menu__arrow" aria-hidden="true">↗</span>}</div>
              {item.children && <div className="en-mobile-menu__subnav" hidden={!expanded}>{item.children.map(child => <Link key={child.href} href={child.href} onClick={closeNavigation}>{label(child.label)} <span aria-hidden="true">↗</span></Link>)}</div>}
            </div>;
          })}
        </nav>
        <div className="en-mobile-menu__footer"><div><span>Persönlich für Sie da</span><Link href="/kontakt" onClick={closeNavigation}>Kontakt aufnehmen ↗</Link></div><p>Baumpflege mit<br/>Weitblick.</p></div>
      </div>
    </div>
  </header>;
}
