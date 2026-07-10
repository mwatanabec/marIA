import { hero } from "@/content/copy";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { AnimatedNetwork } from "@/components/motion/AnimatedNetwork";
import styles from "./DashboardCard.module.css";

export function DashboardCard() {
  const { dashboard } = hero;

  return (
    <SectionReveal aria-hidden="true">
      <div className={`${styles.dashboard} float-breathe`}>
        <div className={styles.top}>
          <div className={styles.dots}>
            <i />
            <i />
            <i />
          </div>
          <span className={styles.chip}>{dashboard.chip}</span>
        </div>

        <div className={styles.metricRow}>
          <div className={styles.metric}>
            <span className={styles.label}>{dashboard.metricLabel}</span>
            <div className={styles.value}>{dashboard.metricValue}</div>
            <div className={styles.bars}>
              {dashboard.bars.map((height, index) => (
                <span
                  key={index}
                  className="bar"
                  style={{ height: `${height}%`, transitionDelay: `${index * 90}ms` }}
                />
              ))}
            </div>
          </div>
          <div className={styles.metric}>
            <span className={styles.label}>{dashboard.secondaryLabel}</span>
            <div className={styles.value}>{dashboard.secondaryValue}</div>
            <p className={styles.note}>{dashboard.secondaryNote}</p>
          </div>
        </div>

        <div className={styles.nodeMap}>
          <AnimatedNetwork variant="map" />
          <div className={styles.nodeMapContent}>
            <small>{dashboard.networkCaption}</small>
            <strong>{dashboard.networkHeadline}</strong>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
