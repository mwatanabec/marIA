import type { AnchorHTMLAttributes, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import s from "./Institutional.module.css";

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

// A navegação nativa para a raiz evita o pedido /marIA.txt que o App Router
// pode produzir ao voltar à Home em um export estático com basePath.
export function SiteLink({ href, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  if (href === "/") return <a href="/marIA/" {...props}/>;
  return <Link href={href} {...props}/>;
}

export function Action({ href, children, secondary = false, light = false }: { href: string; children: ReactNode; secondary?: boolean; light?: boolean }) {
  const className = `${s.button} ${secondary ? s.buttonSecondary : ""} ${light ? s.buttonLight : ""}`;
  return <SiteLink href={href} className={className}>{children}<Arrow /></SiteLink>;
}

export function Constellation({ className = "" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 210 150" fill="none" aria-hidden="true"><path d="m20 116 64-85 45 83 60-90-105 7 45 83-109 2" stroke="currentColor" strokeWidth="1"/><circle cx="20" cy="116" r="9" fill="#5b3a5e"/><circle cx="84" cy="31" r="8" fill="#d9b8c3"/><circle cx="129" cy="114" r="14" fill="#d9b8c3"/><circle cx="189" cy="24" r="11" fill="#5b3a5e"/></svg>;
}

export function ServiceIcon({ type }: { type: string }) {
  const paths: Record<string, ReactNode> = {
    automation: <><path d="M7 7h13l-4-4M25 25H12l4 4M25 8v9M7 24v-9"/><path d="m22 14 3 3 3-3M4 18l3-3 3 3"/></>,
    integration: <><rect x="3" y="5" width="10" height="9" rx="2"/><rect x="19" y="18" width="10" height="9" rx="2"/><path d="M13 9h7a4 4 0 0 1 4 4v5M19 23h-7a4 4 0 0 1-4-4v-5"/></>,
    intelligence: <><path d="m16 3 3.5 9.5L29 16l-9.5 3.5L16 29l-3.5-9.5L3 16l9.5-3.5L16 3Z"/><path d="M26 2v6M23 5h6"/></>,
    solutions: <><rect x="3" y="5" width="26" height="22" rx="3"/><path d="M3 12h26M11 12v15M7 8.5h.1M11 8.5h.1M16 18h8M16 22h5"/></>,
  };
  return <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[type] ?? paths.solutions}</svg>;
}

export function Mari({ pose = "laptop", priority = false, className = "" }: { pose?: "laptop" | "alegre" | "leitura" | "apresentando" | "programando"; priority?: boolean; className?: string }) {
  return <Image className={`${s.mari} ${className}`} src={`/marIA/brand/mari-${pose}.png`} alt="Mari, personagem oficial da MarIA" width={1254} height={1254} priority={priority} sizes="(max-width: 700px) 85vw, (max-width: 1100px) 45vw, 520px" />;
}

export function Label({ children }: { children: ReactNode }) {
  return <span className={s.label}>{children}</span>;
}

export function Section({ children, id, tone = "cream", className = "" }: { children: ReactNode; id?: string; tone?: "cream" | "white" | "plum" | "lavender"; className?: string }) {
  return <section id={id} className={`${s.brand} ${s.section} ${s[tone]} ${className}`}>{children}</section>;
}
