import { about } from "@/content/copy";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionReveal } from "@/components/motion/SectionReveal";
import styles from "./AboutSection.module.css";

export function AboutSection() {
  return (
    <section id="sobre" className="section" aria-labelledby="about-heading">
      <div className="container">
        <SectionReveal className={`${styles.split}`}>
          <div>
            <Eyebrow>{about.eyebrow}</Eyebrow>
            <h2 id="about-heading">{about.title}</h2>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
            <ul className="dot-list">
              {about.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.profileCard}>
            <div className={styles.avatar} aria-hidden="true">
              ME
            </div>
            <strong className={styles.name}>{about.role}</strong>
            <span className={styles.roleNote}>{about.roleNote}</span>
            <blockquote className={styles.quote}>{about.quote}</blockquote>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
