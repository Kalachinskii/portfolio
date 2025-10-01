import { EducationLineItem } from "../../components/EducationLineItem/EducationLineItem";
import { StekIcon } from "../../components/StekIcon/StekIcon";
import { WorksLineItem } from "../../components/WorksLineItem/WorksLineItem";
import styles from "./About.module.css";
import { educationsData } from "./Data/educationsData";
import {
  backendSkillsData,
  frontendSkillsData,
  toolsSkillsData,
} from "./Data/skillsData";
import { worksData } from "./Data/worksData";

export const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.rightBox}>
        <div className={styles.qualificationBox}>
          <div className={styles.education}>
            <h2>Образование</h2>
            <ul className={styles.timeline}>
              {educationsData.map((el) => (
                <EducationLineItem
                  key={el.title + el.period}
                  title={el.title}
                  subtitle={el.subtitle}
                  period={el.period}
                />
              ))}
            </ul>
          </div>
          <div className={styles.experience}>
            <h2>Опыт работы</h2>
            <ul className={styles.timeline}>
              {worksData.map((el) => (
                <WorksLineItem
                  key={el.title + el.period}
                  title={el.title}
                  subtitle={el.subtitle}
                  period={el.period}
                  description={el.description}
                  skills={el.skills}
                />
              ))}
            </ul>
          </div>
        </div>
        <br />
        <div className={styles.texnology}>
          <section className={styles.skills}>
            <h1>Навыки и технологии</h1>

            <div className={styles.skillsGrid}>
              <article className={styles.skillCategory}>
                <h3>Front-End Development</h3>
                <ul className={styles.skillsList}>
                  {frontendSkillsData.map((el) => (
                    <StekIcon
                      key={el.name}
                      name={el.name}
                      icon={el.icon}
                      type={el.type}
                    />
                  ))}
                </ul>
              </article>

              <article className={styles.skillCategory}>
                <h3>Back-End Development</h3>
                <ul className={styles.skillsList}>
                  {backendSkillsData.map((el) => (
                    <StekIcon
                      key={el.name}
                      name={el.name}
                      icon={el.icon}
                      type={el.type}
                    />
                  ))}
                </ul>
              </article>

              <article className={styles.skillCategory}>
                <h3>Инструменты разработки</h3>
                <ul className={styles.skillsList}>
                  {toolsSkillsData.map((el) => (
                    <StekIcon
                      key={el.name}
                      name={el.name}
                      icon={el.icon}
                      type={el.type}
                    />
                  ))}
                </ul>
              </article>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
