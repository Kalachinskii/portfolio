import { Card } from "../Card/Card";
import json from "../../assets/projects.json";
import styles from "./CardBox.module.css";
import { div } from "framer-motion/client";
import { color } from "framer-motion";

export const CardBox = ({ sort }: { sort?: string }) => {
  const testStyle = {
    color: "red",
    border: "1px solid #00fe00ed",
    width: "150px",
    height: "150px",
    background: "#000",
  };

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
        // <Card key={cardProps.id} {...cardProps} />
        // <div style={testStyle}></div>
        <div style={testStyle}></div>
      ))}
    </div>
  );
};
