import type { ReactNode } from "react";
import styles from "./Card.module.css";

type CardProps = {
  icon?: string;
  eyebrow?: string;
  eyebrowVariant?: "label" | "tag";
  title: string;
  children: ReactNode;
  className?: string;
};

export function Card({
  icon,
  eyebrow,
  eyebrowVariant = "label",
  title,
  children,
  className,
}: CardProps) {
  return (
    <article className={[styles.card, "card-hover", className ?? ""].join(" ").trim()}>
      {icon ? (
        <div className={styles.icon} aria-hidden="true">
          {icon}
        </div>
      ) : null}
      {eyebrow ? (
        <span className={eyebrowVariant === "tag" ? styles.eyebrowTag : styles.eyebrowLabel}>
          {eyebrow}
        </span>
      ) : null}
      <h3>{title}</h3>
      {children}
    </article>
  );
}
