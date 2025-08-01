import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

export function Nav() {
  const links = [
    { name: "Работы", link: "/" },
    { name: "О себе", link: "/" },
    { name: "Контакт", link: "/" },
  ];

  return (
    <nav>
      <ul className={styles.LinkBox}>
        {links.map((link) => (
          <li>
            <NavLink className={styles.navLink} to={link.link}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
