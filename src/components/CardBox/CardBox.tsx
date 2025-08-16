import { Card } from "../Card/Card";
import json from "../../assets/projects.json";
import styles from "./CardBox.module.css";

export const CardBox = ({ sort }: { sort?: string }) => {
  const filteredProjects = sort
    ? json.filter((project) =>
        project.technologies.some(
          (tech) => tech.toLowerCase() === sort.toLowerCase()
        )
      )
    : json;

  return (
    <div className={styles.cardsBox}>
      {filteredProjects.map((cardProps) => (
        <Card key={cardProps.id} {...cardProps} />
      ))}
    </div>
  );
};
