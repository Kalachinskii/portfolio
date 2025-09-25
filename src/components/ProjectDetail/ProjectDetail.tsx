import { Links } from "../../components/Links/Links";
import json from "../../assets/projects.json";
import styles from "./ProjectDetail.module.css";
import { useLocation } from "react-router-dom";

export const ProjectDetail = () => {
  const location = useLocation();
  const id = location.state?.id | 0;
  const project = json.find((item) => item.id === id);

  return (
    <>
      <div
        style={
          {
            "--slide-image": `url(${project?.imageUrl})`,
          } as React.CSSProperties
        }
        className={`${styles.box} ${styles.imageCover}`}
      ></div>
      <div className={`${styles.circle}`}>
        <div className={`${styles.leftConteiner}`}>
          <h1 className={`${styles.title}`}>{project?.title}</h1>
          <p className={`${styles.about}`}>{project?.description}</p>
          <div className={styles.box}>
            {project?.technologies.map((name) => (
              <span key={name} className={styles.texnology}>
                {name}
              </span>
            ))}
          </div>
          <div className={styles.linkBox}>
            <Links
              className={styles.link}
              iconName="fa-brands fa-github"
              href={`${project?.links.git}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Гит
            </Links>
            <Links
              iconName="fa-solid fa-globe"
              href={`${project?.links.site}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Сайт
            </Links>
          </div>
        </div>
      </div>
    </>
  );
};
