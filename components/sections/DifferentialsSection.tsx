import { differentials } from "@/content/copy";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionReveal } from "@/components/motion/SectionReveal";
import styles from "./DifferentialsSection.module.css";

export function DifferentialsSection() {
  return (
    <section className="section" aria-labelledby="differentials-heading">
      <SectionReveal className={`container ${styles.split}`}>
        <div className={styles.quotePanel}>
          <blockquote>{differentials.quote}</blockquote>
          <p>{differentials.quoteNote}</p>
        </div>
        <div>
          <Eyebrow>{differentials.eyebrow}</Eyebrow>
          <h2 id="differentials-heading">{differentials.title}</h2>
          <ul className="dot-list">
            {differentials.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </SectionReveal>
    </section>
  );
}
