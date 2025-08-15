import { Card } from "../Card/Card";
import json from "../../assets/projects.json";
import styles from "./CardBox.module.css";

export const CardBox = () => {
  return (
    <div className={styles.cardsBox}>
      {json.map((cardProps, id) => (
        <Card key={id} {...cardProps} />
      ))}
    </div>
  );
};
