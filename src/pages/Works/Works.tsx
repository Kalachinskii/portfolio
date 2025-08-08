import { NavLink, Outlet } from "react-router-dom";
import styles from "./Works.module.css";

export function Works() {
  const navigation = [
    { name: "TS", link: "ts" },
    { name: "JS", link: "js" },
    { name: "PHP", link: "php" },
    { name: "HTML/CSS", link: "html-css" },
  ];

  return (
    <div className={styles.worksConteiner}>
      <div className={styles.box}>
        <h1>Мои работы</h1>
        <div className={styles.navigationLink}>
          {navigation.map((nav, ind) => (
            <NavLink
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
              key={ind}
              to={nav.link}
            >
              {nav.name}
            </NavLink>
          ))}
        </div>
        <div className={styles.contentBox}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
