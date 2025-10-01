import styles from "./LoadingSpinner.module.css";

export const LoadingSpinner = () => (
  <div className={styles.container}>
    <div className={styles.spinner} />
    <div className={styles.text}>Загрузка...</div>
  </div>
);
