import { projectsPage } from "@/content/copy";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionReveal } from "@/components/motion/SectionReveal";
import styles from "./CaseStudies.module.css";

const { cases } = projectsPage;

export function CaseStudies() {
  return (
    <section id="projetos" className="section" aria-labelledby="projetos-heading">
      <div className="container">
        <SectionReveal className="section-head">
          <div>
            <Eyebrow>{cases.eyebrow}</Eyebrow>
            <h2 id="projetos-heading">{cases.title}</h2>
          </div>
          <p>{cases.intro}</p>
        </SectionReveal>

        <div className={styles.list}>
          {cases.items.map((item) => (
            <SectionReveal key={item.id}>
              <article
                id={item.id}
                className={`${styles.case} card-hover`}
                aria-labelledby={`${item.id}-title`}
              >
                <div className={styles.main}>
                  <div className={styles.head}>
                    <span className={styles.glyph} aria-hidden="true">
                      {item.glyph}
                    </span>
                    <span className={styles.category}>{item.category}</span>
                    {item.draft ? (
                      <span className={styles.draftBadge}>{cases.draftLabel}</span>
                    ) : null}
                  </div>

                  <h3 id={`${item.id}-title`}>{item.title}</h3>
                  <p className={styles.subtitle}>{item.subtitle}</p>

                  {item.tags.length ? (
                    <ul className={styles.tags} aria-label="Categorias">
                      {item.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  ) : null}

                  {item.reviewNote ? (
                    <p className={styles.reviewNote}>{item.reviewNote}</p>
                  ) : null}

                  <div className={styles.block}>
                    <span className={styles.miniLabel}>{cases.contextLabel}</span>
                    <p>{item.context}</p>
                  </div>
                  <div className={styles.block}>
                    <span className={styles.miniLabel}>{cases.problemLabel}</span>
                    <p>{item.problem}</p>
                  </div>
                  <div className={styles.block}>
                    <span className={styles.miniLabel}>{cases.solutionLabel}</span>
                    <p>{item.solution}</p>
                  </div>
                </div>

                <div className={styles.lists}>
                  <div className={styles.listBlock}>
                    <span className={styles.miniLabel}>{cases.deliverablesLabel}</span>
                    <ul className="dot-list">
                      {item.deliverables.map((entry) => (
                        <li key={entry}>{entry}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.listBlock}>
                    <span className={styles.miniLabel}>{cases.impactLabel}</span>
                    <ul className="dot-list">
                      {item.impact.map((entry) => (
                        <li key={entry}>{entry}</li>
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
