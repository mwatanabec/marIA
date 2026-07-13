import type { ReactNode } from "react";
import Link from "next/link";
import styles from "./Button.module.css";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  onDark?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  onDark = false,
  className,
}: ButtonProps) {
  const classes = [
    styles.btn,
    "btn-motion",
    styles[variant],
    onDark ? styles.onDark : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  // Rotas internas (ex.: /servicos) passam pelo next/link para respeitar o
  // basePath do build (ver next.config.mjs). Âncoras (#secao) e links externos
  // (wa.me, mailto) seguem como <a> comum.
  if (href.startsWith("/")) {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  const isExternal = /^https?:\/\//.test(href);

  return (
    <a
      className={classes}
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
