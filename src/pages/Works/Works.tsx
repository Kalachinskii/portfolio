import { NavLink, Outlet } from "react-router-dom";
import styles from "./Works.module.css";
import { Links } from "../../components/Links/Links";
import json from "../../assets/projects.json";

export function Works() {
  const navigation = [
    { name: "Все", link: "all" },
    { name: "TS", link: "ts" },
    { name: "JS", link: "js" },
    { name: "PHP", link: "php" },
  ];

  return (
    <div className={`${styles.worksConteiner}`}>
      <div className={`${styles.box} ${styles.imageCover}`}>
        <div className={`${styles.circle}`}>
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
        <div className={`${styles.rightConteiner}`}></div>

        {/* <h1>Мои работы</h1> */}
        {/* <div className={styles.navigationLink}> */}
        {/* {navigation.map((nav, ind) => (
            <NavLink
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
              key={ind}
              to={nav.link}
            >
              {nav.name}
            </NavLink>
          ))} */}
        {/* </div> */}
        {/* <div className={styles.contentBox}>{<Outlet />}</div> */}
      </div>
    </div>
  );
}
