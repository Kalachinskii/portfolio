import styles from "./Hero.module.css";

export function Hero() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.circleImage}></div>
        <h1 className={styles.text}>
          Меня зовут <span>Владислав</span> — Я превращаю дизайн в удобный и
          доступный интерфейс с помощью <span>React</span> и
          <span> TypeScript</span>
        </h1>
      </div>
    </>
  );
}
