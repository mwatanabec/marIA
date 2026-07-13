"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/content/copy";
import { getScheduleHref } from "@/content/contact";
import { Button } from "@/components/ui/Button";
import styles from "./Header.module.css";

/**
 * Resolve o destino de cada item do menu levando em conta a página atual:
 * âncoras (#secao) apontam para a seção na Home — de outra rota viram "/#secao"
 * para navegar de volta e rolar. Rotas (/servicos) seguem inalteradas e o
 * next/link cuida do basePath.
 */
function resolveHref(href: string, pathname: string): string {
  if (href.startsWith("#")) {
    return pathname === "/" ? href : `/${href}`;
  }
  return href;
}

export function Header() {
  const pathname = usePathname();
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

  const isActive = (href: string) => !href.startsWith("#") && pathname === href;

  return (
    <header className={shellClass}>
      <nav className={styles.nav} aria-label="Navegação principal">
        <Link className={styles.brand} href="/">
          <span className={styles.brandMark} aria-hidden="true">
            M
          </span>
          <strong>
            Mar<span>IA</span> Consultoria
          </strong>
        </Link>

        <div className={styles.navLinks}>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={resolveHref(item.href, pathname)}
              className={isActive(item.href) ? styles.active : undefined}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className={styles.headerCta}>
          <Button href={getScheduleHref()} variant="primary">
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
          <Link
            key={item.href}
            href={resolveHref(item.href, pathname)}
            className={isActive(item.href) ? styles.active : undefined}
            aria-current={isActive(item.href) ? "page" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <div className={styles.mobileCta}>
          <Button href={getScheduleHref()} variant="primary" className="mobile-cta-btn">
            Agendar conversa
          </Button>
        </div>
      </div>
    </header>
  );
}
