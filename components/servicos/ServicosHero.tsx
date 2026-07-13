import { servicesPage } from "@/content/copy";
import { getScheduleHref } from "@/content/contact";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { SectionReveal } from "@/components/motion/SectionReveal";
import styles from "./ServicosHero.module.css";

const { hero, offerings } = servicesPage;

export function ServicosHero() {
  return (
    <section className={styles.hero} aria-labelledby="servicos-hero-heading">
      <div className={`container ${styles.grid}`}>
        <SectionReveal className={styles.copy}>
          <Eyebrow onDark>{hero.eyebrow}</Eyebrow>
          <h1 id="servicos-hero-heading">{hero.title}</h1>
          <p className={styles.subtitle}>{hero.subtitle}</p>
          <p className={styles.support}>{hero.support}</p>
          <div className={styles.actions}>
            <Button href={getScheduleHref(hero.ctaPrimary.message)} variant="primary" onDark>
              {hero.ctaPrimary.label}
            </Button>
            <Button href={hero.ctaSecondary.href} variant="secondary" onDark>
              {hero.ctaSecondary.label}
            </Button>
          </div>
        </SectionReveal>

        <SectionReveal className={styles.map} aria-hidden="true">
          <div className={styles.mapHead}>
            <span className={styles.mapDot} />
            Frentes de atuação
          </div>
          <ul className={styles.mapList}>
            {offerings.cards.map((card) => (
              <li key={card.id} className={styles.mapItem}>
                <a href={`#${card.id}`}>
                  <span className={styles.mapNode}>{card.glyph}</span>
                  <span className={styles.mapLabel}>{card.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </SectionReveal>
      </div>
    </section>
  );
}
