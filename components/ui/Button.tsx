import type { ReactNode } from "react";
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

  return (
    <a className={classes} href={href}>
      {children}
    </a>
  );
}
