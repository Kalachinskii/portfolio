import { Links } from "../../components/Links/Links";
import json from "../../assets/projects.json";
import styles from "./ProjectDetail.module.css";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";

// Выносим создание Map за компонент для производительности
const projectsMap = new Map(json.map((item) => [item.id, item]));

export const ProjectDetail = () => {
  const location = useLocation();
  const id = location.state?.id || 0;

  // Быстрый поиск O(1) вместо O(n)
  const project = projectsMap.get(id);

  // Мемоизируем стили
  const imageStyle = useMemo(
    () =>
      ({ "--slide-image": `url(${project?.imageUrl})` } as React.CSSProperties),
    [project?.imageUrl]
  );

  if (!project) {
    return <div>Проект не найден</div>;
  }

  return (
    <>
      <div
        style={imageStyle}
        className={`${styles.box} ${styles.imageCover}`}
      ></div>
      <div className={styles.circle}>
        <div className={styles.leftConteiner}>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.about}>{project.description}</p>
          <div className={styles.box}>
            {project.technologies.map((name) => (
              <span key={name} className={styles.texnology}>
                {name}
              </span>
            ))}
          </div>
          <div className={styles.linkBox}>
            <Links
              className={styles.link}
              iconName="fa-brands fa-github"
              href={project.links.git}
              target="_blank"
              rel="noopener noreferrer"
            >
              Гит
            </Links>
            <Links
              iconName="fa-solid fa-globe"
              href={project.links.site}
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
