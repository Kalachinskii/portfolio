import styles from "./Texnologys.module.css";

export default function Texnologys() {
  const texnologys = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "TypeScript",
    "Vite",
  ];

  return (
    <div className={styles.texnologyBox}>
      {texnologys.map((name) => (
        <span key={name} className={styles.texnology}>
          {name}
        </span>
      ))}
    </div>
  );
}
