import { servicesPage } from "@/content/copy";
import { getScheduleHref } from "@/content/contact";
import { Eyebrow } from "@/components/ui/Eyebrow";
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

        <div className={styles.grid}>
          {offerings.cards.map((card) => {
            const featured = Boolean(card.featured);
            return (
              <SectionReveal
                key={card.id}
                className={featured ? styles.featuredCell : undefined}
              >
                <article
                  id={card.id}
                  className={`${styles.card} ${featured ? styles.featured : ""} card-hover`}
                  aria-labelledby={`${card.id}-title`}
                >
                  <div className={styles.body}>
                    <div className={styles.head}>
                      <span className={styles.glyph} aria-hidden="true">
                        {card.glyph}
                      </span>
                      <span className={styles.number}>{card.number}</span>
                      {card.featuredLabel ? (
                        <span className={styles.badge}>{card.featuredLabel}</span>
                      ) : null}
                    </div>

                    <h3 id={`${card.id}-title`}>{card.title}</h3>
                    <p className={styles.pitch}>{card.pitch}</p>

                    <p className={styles.audience}>
                      <span className={styles.audienceTag}>{offerings.audienceLabel}</span>
                      {card.audience}
                    </p>

                    <div className={styles.signals}>
                      <span className={styles.miniLabel}>{offerings.signalsLabel}</span>
                      <ul className="dot-list">
                        {card.signals.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <a
                      className={styles.cta}
                      href={getScheduleHref(card.cta.message)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {card.cta.label}
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>

                  {card.deliveries && card.deliveriesLabel ? (
                    <aside className={styles.deliveries}>
                      <span className={styles.miniLabel}>{card.deliveriesLabel}</span>
                      <ul className="dot-list">
                        {card.deliveries.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </aside>
                  ) : null}
                </article>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
