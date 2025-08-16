import { Links } from "../Links/Links";
import styles from "./Card.module.css";

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
      <div className={styles.texnologyBox}>
        <div className={styles.box}>
          {technologies.map((name) => (
            <span key={name} className={styles.texnology}>
              {name}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.linkBox}>
        <Links
          iconName="fa-brands fa-github"
          href={links.git}
          className="gitLink"
        >
          Гит
        </Links>
        <Links
          iconName="fa-solid fa-globe"
          href={links.site}
          className="siteLink"
        >
          Сайт
        </Links>
      </div>
    </div>
  );
}
