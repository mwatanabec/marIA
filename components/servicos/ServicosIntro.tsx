import { servicesPage } from "@/content/copy";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionReveal } from "@/components/motion/SectionReveal";
import styles from "./ServicosIntro.module.css";

const { intro } = servicesPage;

export function ServicosIntro() {
  return (
    <section id="ajuda" className="section" aria-labelledby="servicos-intro-heading">
      <div className="container">
        <SectionReveal className="section-head">
          <div>
            <Eyebrow>{intro.eyebrow}</Eyebrow>
            <h2 id="servicos-intro-heading">{intro.title}</h2>
          </div>
          <div className={styles.text}>
            {intro.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal className={styles.levels}>
          {intro.levels.map((level) => (
            <div key={level.step} className={styles.level}>
              <span className={styles.step} aria-hidden="true">
                {level.step}
              </span>
              <h3>{level.title}</h3>
              <p>{level.text}</p>
            </div>
          ))}
        </SectionReveal>
      </div>
    </section>
  );
}
