import styles from "./Texnologys.module.css";

export default function Texnologys({
  technologies,
}: {
  technologies: string[];
}) {
  return (
    <div className={styles.texnologyBox}>
      <div className={styles.box}>
        {technologies.map((name) => (
          <span key={name} className={styles.texnology}>
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
