import styles from "./Card.module.css";
import { Links } from "./Links/Links";
import Texnologys from "./Texnologys/Texnologys";

export function Card({
  imageUrl,
  technologies,
  links,
}: {
  imageUrl: string;
  technologies: string[];
  links: {
    site: string;
    git: string;
  };
}) {
  return (
    <div className={styles.cardBox}>
      <img className={styles.img} src={imageUrl} alt="Изображение проекта" />
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
        <Texnologys technologies={technologies} />
        <Links links={links} />
      </div>
    </div>
  );
}
/*
  {
    "id": 1,
    "imageUrl": "/project_scrin/analyz.png",
    "title": "text_analysis",
    "technologies": ["React", "TypeScript", "Vite", "HTML5", "CSS3"],
    "links": {
      "site": "https://kalachinskii.github.io/text_analysis",
      "git": "https://kalachinskii.github.io/text_analysis"
    }
  },
*/
