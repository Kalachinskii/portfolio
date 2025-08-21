import { Links } from "../../components/Links/Links";
import json from "../../assets/projects.json";
import styles from "./ProjectDetail.module.css";
import { useLocation } from "react-router-dom";

export const ProjectDetail = () => {
  const location = useLocation();
  const id = location.state?.id;
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
        {/* будет меняться */}
        <div className={`${styles.leftConteiner}`}>
          <h1 className={`${styles.title}`}>{project?.title}</h1>
          <p className={`${styles.about}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            voluptatum eos. Rerum saepe iusto veniam eaque neque iure, ratione
            minima placeat voluptates impedit sequi aut ipsum soluta ex
            assumenda quam.
          </p>
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
            >
              Гит
            </Links>
            <Links iconName="fa-solid fa-globe" href={`${project?.links.site}`}>
              Сайт
            </Links>
          </div>
        </div>
      </div>
    </>
  );
};
