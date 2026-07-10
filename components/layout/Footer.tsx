import { footer } from "@/content/copy";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <strong>{footer.brand}</strong>
          <div className={styles.mini}>{footer.tagline}</div>
        </div>
        <div className={styles.mini}>{footer.description}</div>
      </div>
    </footer>
  );
}
