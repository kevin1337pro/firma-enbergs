"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { mainNavigation } from "@/data/site-content";

function matchesPath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    setMenuOpen(false);
    setExpandedItem(null);
  }, [pathname]);

  useEffect(() => {
    function closeNavigation() {
      setMenuOpen(false);
      setExpandedItem(null);
    }

    function handleKeydown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeNavigation();
      }
    }

    function handlePointerDown(event: PointerEvent) {
      const target = event.target as Node | null;

      if (!target) {
        return;
      }

      if (toggleRef.current?.contains(target) || menuRef.current?.contains(target)) {
        return;
      }

      closeNavigation();
    }

    window.addEventListener("keydown", handleKeydown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  function closeNavigation() {
    setMenuOpen(false);
    setExpandedItem(null);
  }

  function toggleItem(label: string) {
    setExpandedItem((current) => (current === label ? null : label));
  }

  return (
    <header className={`site-header${menuOpen ? " is-menu-open" : ""}`}>
      <div className="container site-header__inner">
        <Link className="brand" href="/" onClick={closeNavigation}>
          <Image
            alt="Baumdienst Enbergs"
            className="brand__image"
            height={367}
            priority
            src="/assets/logo_baumdienst_enbergs.png"
            width={300}
          />
        </Link>

        <button
          aria-controls="site-navigation"
          aria-expanded={menuOpen}
          className="nav-toggle"
          ref={toggleRef}
          onClick={() => setMenuOpen((current) => !current)}
          type="button"
        >
          <span className="nav-toggle__icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="nav-toggle__label">{menuOpen ? "Schliessen" : "Menue"}</span>
        </button>

        <div className={`site-header__main${menuOpen ? " is-open" : ""}`} ref={menuRef}>
          <nav className="site-nav" aria-label="Hauptnavigation" id="site-navigation">
            {mainNavigation.map((item) => {
              const isExpanded = expandedItem === item.label;
              const isActive =
                matchesPath(pathname, item.href) ||
                item.children?.some((child) => matchesPath(pathname, child.href));

              if (!item.children) {
                return (
                  <Link
                    key={item.href}
                    className={`site-nav__link site-nav__link--solo${isActive ? " is-active" : ""}`}
                    href={item.href}
                    onClick={closeNavigation}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div
                  key={item.href}
                  className={`site-nav__item${isExpanded ? " is-expanded" : ""}`}
                >
                  <div className="site-nav__item-head">
                    <Link
                      className={`site-nav__link${isActive ? " is-active" : ""}`}
                      href={item.href}
                      onClick={closeNavigation}
                    >
                      {item.label}
                    </Link>
                    <button
                      aria-expanded={isExpanded}
                      className="site-nav__toggle"
                      onClick={() => toggleItem(item.label)}
                      type="button"
                    >
                      <span className="site-nav__toggle-mark" aria-hidden="true">
                        ▾
                      </span>
                      <span className="sr-only">{item.label} aufklappen</span>
                    </button>
                  </div>

                  <div className="site-subnav">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        className={`site-subnav__link${matchesPath(pathname, child.href) ? " is-active" : ""}`}
                        href={child.href}
                        onClick={closeNavigation}
                      >
                        <span className="site-subnav__title">{child.label}</span>
                        {child.description ? (
                          <span className="site-subnav__description">{child.description}</span>
                        ) : null}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="site-ticker" aria-label="Unternehmenshinweis">
            <div className="site-ticker__track">
              <span>Baumpflege, Spezialfaellung und Maschinenpower im Ruhrgebiet</span>
              <span aria-hidden="true">
                Baumpflege, Spezialfaellung und Maschinenpower im Ruhrgebiet
              </span>
            </div>
          </div>

          <Link
            className="button button--small site-header__cta site-header__cta--panel"
            href="/anfrage-vorbereiten"
            onClick={closeNavigation}
          >
            Anfrage vorbereiten
          </Link>
        </div>

        <Link
          className="button button--small site-header__cta"
          href="/anfrage-vorbereiten"
          onClick={closeNavigation}
        >
          Anfrage
        </Link>
      </div>
    </header>
  );
}
