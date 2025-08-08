import styles from "./Links.module.css";

export function Links() {
  return (
    <div className={styles.linkBox}>
      <a
        className={`${styles.link} ${styles.siteLink}`}
        href="https://kalachinskii.github.io/text_analysis/"
      >
        Открыть сайт
      </a>
      <a
        className={`${styles.link} ${styles.gitLink}`}
        href="https://github.com/Kalachinskii/text_analysis"
      >
        Открыть гит
      </a>
    </div>
  );
}
