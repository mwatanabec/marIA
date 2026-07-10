"use client";

import { useEffect, useState } from "react";
import { nav } from "@/content/copy";
import { Button } from "@/components/ui/Button";
import styles from "./Header.module.css";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const shellClass = [styles.shell, "header-shell", scrolled ? styles.scrolled : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={shellClass}>
      <nav className={styles.nav} aria-label="Navegação principal">
        <a className={styles.brand} href="#">
          <span className={styles.brandMark} aria-hidden="true">
            M
          </span>
          <strong>
            Mar<span>IA</span> Consultoria
          </strong>
        </a>

        <div className={styles.navLinks}>
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <div className={styles.headerCta}>
          <Button href="#contato" variant="primary">
            Agendar conversa
          </Button>
        </div>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            {menuOpen ? (
              <path d="M3 3L15 15M15 3L3 15" stroke="currentColor" strokeWidth="1.6" />
            ) : (
              <path d="M2 5H16M2 9H16M2 13H16" stroke="currentColor" strokeWidth="1.6" />
            )}
          </svg>
        </button>
      </nav>

      <div id="mobile-nav" className={`${styles.mobilePanel} ${menuOpen ? styles.open : ""}`}>
        {nav.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
          </a>
        ))}
        <div className={styles.mobileCta}>
          <Button href="#contato" variant="primary" className="mobile-cta-btn">
            Agendar conversa
          </Button>
        </div>
      </div>
    </header>
  );
}
