import { useNavigate } from "react-router-dom";
import styles from "./Hero.module.css";
import { ROUTES } from "../../router/constants";

export function Hero() {
  const navigate = useNavigate();

  return (
    <>
      {/* 1. Hero-секция (фон + приветствие) */}
      <div className={styles.hero}>
        <h1 className={styles.text}>
          Меня зовут <span>Владислав</span> — Я превращаю дизайн в удобный и
          доступный интерфейс с помощью <span>React</span> и
          <span> TypeScript</span>
        </h1>
      </div>

      <div
        className={styles.scrolBrn}
        onClick={() => navigate(ROUTES.PROJECTS + "/ts")}
      ></div>
    </>
  );
}
