import styles from "../styles/loading.module.css";

export default function Loading() {
  return (
    <div className={styles.loading}>
      <h2 className={styles.title}>Loading...</h2>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
