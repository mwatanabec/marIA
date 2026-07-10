import { Fragment } from "react";
import { method } from "@/content/copy";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionReveal } from "@/components/motion/SectionReveal";
import styles from "./MethodSection.module.css";

export function MethodSection() {
  return (
    <section id="metodo" className="section" aria-labelledby="method-heading">
      <div className="container">
        <div className={styles.method}>
          <SectionReveal className="section-head">
            <div>
              <Eyebrow onDark>{method.eyebrow}</Eyebrow>
              <h2 id="method-heading">{method.title}</h2>
            </div>
            <p className={styles.intro}>{method.intro}</p>
          </SectionReveal>

          <SectionReveal className={styles.steps}>
            {method.steps.map((step, index) => (
              <Fragment key={`${step.letter}-${index}`}>
                <div className={styles.step}>
                  <div className={styles.stepLetter} aria-hidden="true">
                    {step.letter}
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
                {index < method.steps.length - 1 ? (
                  <div className={styles.connector} aria-hidden="true">
                    <div className={styles.connectorLine} />
                  </div>
                ) : null}
              </Fragment>
            ))}
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
