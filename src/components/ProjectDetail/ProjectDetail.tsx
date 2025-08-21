import { Links } from "../../components/Links/Links";
import json from "../../assets/projects.json";
import styles from "./ProjectDetail.module.css";

export const ProjectDetail = () => {
  return (
    <>
      <div className={`${styles.box} ${styles.imageCover}`}></div>
      <div className={`${styles.circle}`}>
        {/* будет меняться */}
        <div className={`${styles.leftConteiner}`}>
          <h1 className={`${styles.title}`}>Red explorers</h1>
          <p className={`${styles.about}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            voluptatum eos. Rerum saepe iusto veniam eaque neque iure, ratione
            minima placeat voluptates impedit sequi aut ipsum soluta ex
            assumenda quam.
          </p>
          <div className={styles.box}>
            {json[1].technologies.map((name) => (
              <span key={name} className={styles.texnology}>
                {name}
              </span>
            ))}
          </div>
          <div className={styles.linkBox}>
            <Links iconName="fa-brands fa-github" href={"#"}>
              Гит
            </Links>
            <Links iconName="fa-solid fa-globe" href={"#"}>
              Сайт
            </Links>
          </div>
        </div>
      </div>
    </>
  );
};
