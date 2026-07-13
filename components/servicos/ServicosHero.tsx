import { servicesPage } from "@/content/copy";
import { getScheduleHref } from "@/content/contact";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { SectionReveal } from "@/components/motion/SectionReveal";
import styles from "./ServicosHero.module.css";

const { hero } = servicesPage;

/* Constelação decorativa: 4 nós nas quadrículas de uma grade 3×3 orbitando o
   núcleo central. As coordenadas do SVG batem com o centro de cada célula
   (1/6, 1/2, 5/6 → 16.67 / 50 / 83.33). */
const CORE = { x: 50, y: 50 };
const NODES = [
  { x: 16.67, y: 16.67, area: "1 / 1" },
  { x: 83.33, y: 16.67, area: "1 / 3" },
  { x: 83.33, y: 83.33, area: "3 / 3" },
  { x: 16.67, y: 83.33, area: "3 / 1" },
];
const breatheDelays = ["0s", "1.3s", "0.7s", "1.9s"];

export function ServicosHero() {
  const nodes = hero.brandNodes.map((node, index) => ({ ...node, ...NODES[index] }));

  return (
    <section className={styles.hero} aria-labelledby="servicos-hero-heading">
      <div className={`container ${styles.grid}`}>
        <SectionReveal className={styles.copy}>
          <Eyebrow onDark>{hero.eyebrow}</Eyebrow>
          <h1 id="servicos-hero-heading">{hero.title}</h1>
          <p className={styles.subtitle}>{hero.subtitle}</p>
          <p className={styles.support}>{hero.support}</p>
          <div className={styles.actions}>
            <Button href={getScheduleHref(hero.ctaPrimary.message)} variant="primary" onDark>
              {hero.ctaPrimary.label}
            </Button>
            <Button href={hero.ctaSecondary.href} variant="secondary" onDark>
              {hero.ctaSecondary.label}
            </Button>
          </div>
        </SectionReveal>

        <SectionReveal className={styles.visual} aria-hidden="true">
          <div className={styles.stage}>
            <svg
              className={styles.links}
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              fill="none"
            >
              {nodes.map((node, index) => {
                const next = nodes[(index + 1) % nodes.length];
                return (
                  <line
                    key={`ring-${index}`}
                    className="draw-line"
                    pathLength={1}
                    x1={node.x}
                    y1={node.y}
                    x2={next.x}
                    y2={next.y}
                    stroke="rgba(255, 255, 255, 0.22)"
                    strokeWidth="1"
                    vectorEffect="non-scaling-stroke"
                  />
                );
              })}
              {nodes.map((node, index) => (
                <line
                  key={`spoke-${index}`}
                  className="draw-line"
                  pathLength={1}
                  x1={CORE.x}
                  y1={CORE.y}
                  x2={node.x}
                  y2={node.y}
                  stroke="rgba(243, 215, 207, 0.5)"
                  strokeWidth="1.2"
                  vectorEffect="non-scaling-stroke"
                />
              ))}
            </svg>

            <div className={styles.node} style={{ gridArea: "2 / 2" }}>
              <div className={styles.core}>
                <span className={styles.coreDot} />
                {hero.brandCore}
              </div>
            </div>

            {nodes.map((node, index) => (
              <div key={node.label} className={styles.node} style={{ gridArea: node.area }}>
                <div
                  className={`${styles.nodeCard} float-breathe`}
                  style={{ animationDelay: breatheDelays[index] }}
                >
                  <span className={styles.nodeGlyph}>{node.glyph}</span>
                  <span className={styles.nodeLabel}>{node.label}</span>
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
