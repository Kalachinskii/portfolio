import styles from "./EducationLineItem.module.css";

export const EducationLineItem = ({
  title,
  subtitle,
  period,
}: {
  title: string;
  subtitle: string;
  period: string;
}) => {
  return (
    <li className={styles.timelineItem}>
      <div className={styles.timelineContent}>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <h5>{period}</h5>
      </div>
    </li>
  );
};
