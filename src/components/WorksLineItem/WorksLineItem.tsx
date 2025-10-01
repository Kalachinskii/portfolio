import styles from "./WorksLineItem.module.css";

export const WorksLineItem = ({
  title,
  subtitle,
  period,
  description,
  skills,
}: {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  skills?: { name: string; description: string }[] | undefined;
}) => {
  return (
    <li className={styles.timelineItem}>
      <div className={styles.timelineContent}>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <h5>{period}</h5>
        <p>{description}</p>
        {skills ? (
          <ul className={styles.skillsList}>
            {skills.map((el) => (
              <li>
                <strong>{el.name}:</strong>
                <br />
                {el.description}
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>
    </li>
  );
};
