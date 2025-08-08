import styles from "./Card.module.css";
import { Links } from "./Links/Links";
import Texnologys from "./Texnologys/Texnologys";

export function Card() {
  return (
    <div className={styles.cardBox}>
      <img
        className={styles.img}
        src="/project_scrin/analyz.png"
        alt="Изображение проекта"
      />
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
        <Texnologys />
        <Links />
      </div>
    </div>
  );
}
