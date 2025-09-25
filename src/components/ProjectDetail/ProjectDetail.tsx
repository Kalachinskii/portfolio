import { Links } from "../../components/Links/Links";
import json from "../../assets/projects.json";
import styles from "./ProjectDetail.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const ProjectDetail = () => {
  // const navigate = useNavigate();
  const location = useLocation();
  const id = location.state?.id | 0;
  const project = json.find((item) => item.id === id);

  // useEffect(() => {
  //   if (!activeProject && projects.length > 0) {
  //     navigate(ROUTES.DEFAULT_PROJECT, { replace: true });
  //   }
  // }, []);

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
