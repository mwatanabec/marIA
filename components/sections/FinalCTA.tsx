import { finalCta } from "@/content/copy";
import { getScheduleHref } from "@/content/contact";
import { Button } from "@/components/ui/Button";
import { SectionReveal } from "@/components/motion/SectionReveal";
import styles from "./FinalCTA.module.css";

type FinalCTAProps = {
  id?: string;
  title?: string;
  subtext?: string;
  primaryLabel?: string;
  /** Mensagem opcional para pré-preencher o canal de contato (WhatsApp/e-mail). */
  primaryMessage?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function FinalCTA({
  id = "contato",
  title = finalCta.title,
  subtext = finalCta.subtext,
  primaryLabel = finalCta.ctaPrimary.label,
  primaryMessage,
  secondaryLabel = finalCta.ctaSecondary.label,
  secondaryHref = finalCta.ctaSecondary.href,
}: FinalCTAProps = {}) {
  return (
    <section id={id} className={`section ${styles.cta}`} aria-labelledby={`${id}-heading`}>
      <div className="container">
        <SectionReveal className={styles.box}>
          <h2 id={`${id}-heading`}>{title}</h2>
          <p>{subtext}</p>
          <div className={styles.actions}>
            <Button href={getScheduleHref(primaryMessage)} variant="primary" onDark>
              {primaryLabel}
            </Button>
            <Button href={secondaryHref} variant="secondary" onDark>
              {secondaryLabel}
            </Button>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
