import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.FooterContent}>
        <p>Open Weather App</p>
        <p>© 2025 Open Weather App</p>
      </div>
    </footer>
  );
}
