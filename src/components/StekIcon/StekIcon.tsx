import styles from "./StekIcon.module.css";

export const StekIcon = ({
  name,
  icon,
  type,
}: {
  name: string;
  icon: string;
  type: "icon" | "image";
}) => {
  return (
    <li className={styles.skillItem}>
      {type === "icon" ? (
        <i className={icon} aria-hidden="true"></i>
      ) : (
        <img src={icon} alt={name} />
      )}
      <span>{name}</span>
    </li>
  );
};
