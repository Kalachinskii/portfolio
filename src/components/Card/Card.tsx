import styles from "./Card.module.css";

export function Card() {
  return (
    <div className={styles.cardBox}>
      <div className={styles.iconBox}>
        <span className={styles.fonIcon}></span>
        <i
          className={`${styles.icon} ${styles.steckIcon} fa-solid fa-gears`}
        ></i>
        <i
          className={`${styles.icon} ${styles.linkIcon} fa-solid fa-globe`}
        ></i>
        <i
          className={`${styles.icon} ${styles.gitIcon} fa-brands fa-github`}
        ></i>
      </div>
      <div className={styles.contentBox}>
        <div className={styles.texnologyBox}>
          <span className={styles.texnology}>HTML5</span>
          <span className={styles.texnology}>CSS3</span>
          <span className={styles.texnology}>JavaScript</span>
          <span className={styles.texnology}>React</span>
          <span className={styles.texnology}>TypeScript</span>
          <span className={styles.texnology}>Vite</span>
        </div>
        <a
          className={`${styles.link} ${styles.siteLink}`}
          href="https://kalachinskii.github.io/text_analysis/"
        >
          Link site
        </a>
        <a
          className={`${styles.link} ${styles.gitLink}`}
          href="https://github.com/Kalachinskii/text_analysis"
        >
          Link git
        </a>
      </div>
    </div>
  );
}
