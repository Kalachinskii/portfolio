import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import { ROUTES } from "../../router/constants";

export function Nav() {
  const links = [
    { name: "Работы", link: ROUTES.PROJECTS },
    { name: "О себе", link: ROUTES.ME },
    { name: "Контакт", link: ROUTES.CONNECT },
  ];

  return (
    <nav>
      <ul className={styles.LinkBox}>
        {links.map((link) => (
          <li key={link.name}>
            <NavLink
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
              }
              to={link.link}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
