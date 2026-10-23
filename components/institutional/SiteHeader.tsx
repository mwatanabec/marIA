"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { institutionalNav } from "@/content/institutional";
import { Arrow, SiteLink as Link } from "./Elements";
import s from "./Institutional.module.css";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); menuButton.current?.focus(); }
    };
    const onOutside = (event: PointerEvent) => {
      if (!panel.current?.contains(event.target as Node) && !menuButton.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onOutside);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("pointerdown", onOutside); };
  }, [open]);

  return <header className={`${s.brand} ${s.header}`}>
    <div className={`${s.wrap} ${s.headerInner}`}>
      <Link href="/" className={s.wordmark} aria-label="MarIA Consultoria — início">Mar<span>IA</span><small>CONSULTORIA</small></Link>
      <nav className={s.desktopNav} aria-label="Navegação principal">
        {institutionalNav.map(item => <Link key={item.href} href={item.href} aria-current={pathname === item.href || pathname.startsWith(item.href + "/") ? "page" : undefined}>{item.label}</Link>)}
      </nav>
      <Link href="/contato" className={`${s.button} ${s.headerAction}`}>Vamos conversar<Arrow diagonal /></Link>
      <button ref={menuButton} className={s.menuButton} type="button" aria-expanded={open} aria-controls="institutional-menu" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen(value => !value)}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={open ? "m6 6 12 12M6 18 18 6" : "M4 7h16M4 12h16M4 17h16"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
      </button>
    </div>
    <div ref={panel} id="institutional-menu" className={s.mobilePanel} hidden={!open}>
      <nav className={s.wrap} aria-label="Navegação móvel">
        {institutionalNav.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} aria-current={pathname === item.href || pathname.startsWith(item.href + "/") ? "page" : undefined}>{item.label}<Arrow diagonal /></Link>)}
        <Link href="/contato" onClick={() => setOpen(false)}>Vamos conversar<Arrow diagonal /></Link>
      </nav>
    </div>
  </header>;
}
