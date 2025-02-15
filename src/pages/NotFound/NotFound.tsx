import styles from "./NotFound.module.scss";

export default function NotFound() {
  return (
    <div className={styles.NotFound}>
      <h1>404 Not Found</h1>
      <p>ページが見つかりませんでした。</p>
    </div>
  );
}
