import { hero } from "@/content/copy";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { DashboardCard } from "./DashboardCard";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={`section ${styles.hero}`} aria-labelledby="hero-heading">
      <div className={`container ${styles.grid}`}>
        <SectionReveal className={styles.copy}>
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <h1 id="hero-heading">{hero.headline}</h1>
          <p>{hero.subtext}</p>
          <div className={styles.actions}>
            <Button href={hero.ctaPrimary.href} variant="primary">
              {hero.ctaPrimary.label}
            </Button>
            <Button href={hero.ctaSecondary.href} variant="secondary">
              {hero.ctaSecondary.label}
            </Button>
          </div>
          <div className={styles.proof}>
            {hero.proofCards.map((card) => (
              <div key={card.title} className={styles.proofCard}>
                <strong>{card.title}</strong>
                <span>{card.text}</span>
              </div>
            ))}
          </div>
        </SectionReveal>

        <div className={styles.visual}>
          <DashboardCard />
          <div className={styles.floatingCard}>
            <strong>{hero.floatingCard.title}</strong>
            <span>{hero.floatingCard.text}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
