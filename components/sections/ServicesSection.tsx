import { services } from "@/content/copy";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { SectionReveal } from "@/components/motion/SectionReveal";
import styles from "./ServicesSection.module.css";

export function ServicesSection() {
  return (
    <section id="servicos" className="section" aria-labelledby="services-heading">
      <div className="container">
        <SectionReveal className="section-head">
          <div>
            <Eyebrow>{services.eyebrow}</Eyebrow>
            <h2 id="services-heading">{services.title}</h2>
          </div>
          <p>{services.intro}</p>
        </SectionReveal>

        <SectionReveal className={styles.grid}>
          {services.cards.map((card) => (
            <Card key={card.title} eyebrow={card.number} eyebrowVariant="tag" title={card.title}>
              <p>{card.text}</p>
              <ul className={styles.serviceList}>
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </SectionReveal>

        <SectionReveal>
          <p className={styles.note}>{services.note}</p>
        </SectionReveal>
      </div>
    </section>
  );
}
