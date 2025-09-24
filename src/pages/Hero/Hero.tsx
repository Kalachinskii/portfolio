import styles from "./Hero.module.css";

export function Hero() {
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
    </>
  );
}
