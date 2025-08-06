import { Link } from "react-router-dom";
import { ROUTES } from "../../router/constants";
import styles from "./NotFound.module.css";

export function NotFound() {
  return (
    <div className={styles.NotFound}>
      <h1>404</h1>
      <h2>Страница не найдена</h2>
      <Link to={ROUTES.HOME}>На главную</Link>
    </div>
  );
}
