import { projectsPage } from "@/content/copy";
import { getScheduleHref } from "@/content/contact";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { SectionReveal } from "@/components/motion/SectionReveal";
import styles from "./ProjetosHero.module.css";

const { hero, cases } = projectsPage;

export function ProjetosHero() {
  return (
    <section className={styles.hero} aria-labelledby="projetos-hero-heading">
      <div className={`container ${styles.grid}`}>
        <SectionReveal className={styles.copy}>
          <Eyebrow onDark>{hero.eyebrow}</Eyebrow>
          <h1 id="projetos-hero-heading">{hero.title}</h1>
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

        <SectionReveal className={styles.panel} aria-hidden="true">
          <div className={styles.panelHead}>
            <span className={styles.panelDot} />
            Experiências recentes
          </div>
          <ul className={styles.panelList}>
            {cases.items.map((item) => (
              <li key={item.id} className={styles.panelItem}>
                <span className={styles.panelTag}>{item.category}</span>
                <span className={styles.panelTitle}>{item.title}</span>
              </li>
            ))}
          </ul>
        </SectionReveal>
      </div>
    </section>
  );
}
