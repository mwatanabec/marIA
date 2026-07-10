import { finalCta } from "@/content/copy";
import { getScheduleHref } from "@/content/contact";
import { Button } from "@/components/ui/Button";
import { SectionReveal } from "@/components/motion/SectionReveal";
import styles from "./FinalCTA.module.css";

export function FinalCTA() {
  return (
    <section id="contato" className={`section ${styles.cta}`} aria-labelledby="cta-heading">
      <div className="container">
        <SectionReveal className={styles.box}>
          <h2 id="cta-heading">{finalCta.title}</h2>
          <p>{finalCta.subtext}</p>
          <div className={styles.actions}>
            <Button href={getScheduleHref()} variant="primary" onDark>
              {finalCta.ctaPrimary.label}
            </Button>
            <Button href={finalCta.ctaSecondary.href} variant="secondary" onDark>
              {finalCta.ctaSecondary.label}
            </Button>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
