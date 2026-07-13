import { servicesPage } from "@/content/copy";
import { getScheduleHref } from "@/content/contact";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { SectionReveal } from "@/components/motion/SectionReveal";
import styles from "./ServiceOfferings.module.css";

const { offerings } = servicesPage;

export function ServiceOfferings() {
  return (
    <section id="frentes" className="section" aria-labelledby="frentes-heading">
      <div className="container">
        <SectionReveal className="section-head">
          <div>
            <Eyebrow>{offerings.eyebrow}</Eyebrow>
            <h2 id="frentes-heading">{offerings.title}</h2>
          </div>
          <p>{offerings.intro}</p>
        </SectionReveal>

        <div className={styles.list}>
          {offerings.cards.map((card) => (
            <SectionReveal key={card.id}>
              <article
                id={card.id}
                className={`${styles.offering} card-hover`}
                aria-labelledby={`${card.id}-title`}
              >
                <div className={styles.main}>
                  <div className={styles.head}>
                    <span className={styles.glyph} aria-hidden="true">
                      {card.glyph}
                    </span>
                    <span className={styles.number}>{card.number}</span>
                  </div>
                  <h3 id={`${card.id}-title`}>{card.title}</h3>
                  <p className={styles.desc}>{card.description}</p>

                  <div className={styles.meta}>
                    <span className={styles.miniLabel}>{offerings.audienceLabel}</span>
                    <p>{card.audience}</p>
                  </div>
                  <div className={styles.meta}>
                    <span className={styles.miniLabel}>{offerings.formatLabel}</span>
                    <p>{card.format}</p>
                  </div>

                  <div className={styles.cta}>
                    <Button href={getScheduleHref(card.cta.message)} variant="primary">
                      {card.cta.label}
                    </Button>
                  </div>
                </div>

                <div className={styles.lists}>
                  <div className={styles.listBlock}>
                    <span className={styles.miniLabel}>{offerings.solvesLabel}</span>
                    <ul className="dot-list">
                      {card.solves.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.listBlock}>
                    <span className={styles.miniLabel}>{card.extra.title}</span>
                    <ul className="dot-list">
                      {card.extra.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
