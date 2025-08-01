import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export function Home() {
  return (
    <>
      <div className={styles.home}>
        <h1 className={styles.text}>
          Меня зовут <span>Владислав</span> — Я превращаю дизайн в удобный и
          доступный интерфейс с помощью <span>React</span> и
          <span> TypeScript</span>
        </h1>
      </div>
      <Link to={"/"} className={styles.link} />
    </>
  );
}
