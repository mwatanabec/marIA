import { servicesPage } from "@/content/copy";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionReveal } from "@/components/motion/SectionReveal";
import styles from "./ServiceMatch.module.css";

const { match } = servicesPage;

export function ServiceMatch() {
  return (
    <section id="qual-servico" className="section" aria-labelledby="match-heading">
      <div className="container">
        <SectionReveal className="section-head">
          <div>
            <Eyebrow>{match.eyebrow}</Eyebrow>
            <h2 id="match-heading">{match.title}</h2>
          </div>
          <p>{match.intro}</p>
        </SectionReveal>

        <SectionReveal className={styles.grid}>
          {match.options.map((option) => (
            <a key={option.href} className={`${styles.card} card-hover`} href={option.href}>
              <span className={styles.glyph} aria-hidden="true">
                {option.glyph}
              </span>
              <span className={styles.condition}>{option.condition}</span>
              <span className={styles.service}>
                <span>{option.service}</span>
                <span className={styles.arrow} aria-hidden="true">
                  →
                </span>
              </span>
            </a>
          ))}
        </SectionReveal>
      </div>
    </section>
  );
}
