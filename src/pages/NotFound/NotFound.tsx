import { Link } from "react-router-dom";
import { ROUTES } from "../../router/constants";
import styles from "./NotFound.module.css";

export function NotFound() {
  return (
    <div className={styles.NotFound}>
      <div className={styles.fon}>404</div>
      <h1>404</h1>
      <h2 className={styles.text}>Страницы не существует</h2>
      <Link className={styles.link} to={ROUTES.HERO}>
        На главную
      </Link>
    </div>
  );
}
