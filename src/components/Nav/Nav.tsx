import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import { ROUTES } from "../../router/constants";

export function Nav() {
  const links = [
    { name: "Главная", link: ROUTES.HERO },
    { name: "Обо мне", link: ROUTES.ABOUT },
    { name: "Pet-проекты", link: ROUTES.PROJECTS },
    { name: "Контакт", link: ROUTES.CONTACTS },
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
