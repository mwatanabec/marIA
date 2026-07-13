import { homeServices } from "@/content/copy";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SectionReveal } from "@/components/motion/SectionReveal";
import styles from "./ServicesSection.module.css";

export function ServicesSection() {
  return (
    <section id="servicos" className="section" aria-labelledby="services-heading">
      <div className="container">
        <SectionReveal className="section-head">
          <div>
            <Eyebrow>{homeServices.eyebrow}</Eyebrow>
            <h2 id="services-heading">{homeServices.title}</h2>
          </div>
          <div className={styles.headText}>
            <p className={styles.lead}>{homeServices.subtitle}</p>
            <p>{homeServices.support}</p>
          </div>
        </SectionReveal>

        <SectionReveal className={styles.grid}>
          {homeServices.cards.map((card) => (
            <Card key={card.title} icon={card.icon} title={card.title}>
              <p>{card.text}</p>
            </Card>
          ))}
        </SectionReveal>

        <SectionReveal className={styles.footer}>
          <p className={styles.note}>{homeServices.note}</p>
          <Button href={homeServices.cta.href} variant="primary">
            {homeServices.cta.label}
          </Button>
        </SectionReveal>
      </div>
    </section>
  );
}
