import { pain } from "@/content/copy";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { SectionReveal } from "@/components/motion/SectionReveal";

export function PainSection() {
  return (
    <section id="dores" className="section" aria-labelledby="pain-heading">
      <div className="container">
        <SectionReveal className="section-head">
          <div>
            <Eyebrow>{pain.eyebrow}</Eyebrow>
            <h2 id="pain-heading">{pain.title}</h2>
          </div>
          <p>{pain.intro}</p>
        </SectionReveal>

        <SectionReveal className="grid-3">
          {pain.cards.map((card) => (
            <Card key={card.title} icon={card.icon} title={card.title}>
              <p>{card.text}</p>
            </Card>
          ))}
        </SectionReveal>
      </div>
    </section>
  );
}
