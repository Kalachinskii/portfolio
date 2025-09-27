import styles from "./About.module.css";

export const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftBox}>
        <img src="/miAvatar.png" alt="фотография" />
        <p>
          Меня зовут Владислав — Я превращаю дизайн в удобный и доступный
          интерфейс с помощью React и TypeScript
        </p>
      </div>
      <div className={styles.rightBox}>
        <h1 style={{ textAlign: "center" }}>Квалификация</h1>
        <br />
        <div className={styles.qualificationBox}>
          <div className={styles.education}>
            <h2>Образование</h2>
            <ul className={styles.timeline}>
              <li className={styles.timelineItem}>
                <div className={styles.timelineContent}>
                  <h3>Московский психолого-социальный университет, Москва</h3>
                  <h4>Юриспруденция</h4>
                  <h5>2015 · Бакалавр</h5>
                </div>
              </li>
              <li className={styles.timelineItem}>
                <div className={styles.timelineContent}>
                  <h3>IT Парк</h3>
                  <h4>Full-Stack Developer</h4>
                  <h5>2024</h5>
                </div>
              </li>
              <li className={styles.timelineItem}>
                <div className={styles.timelineContent}>
                  <h3>IT Парк</h3>
                  <h4>Frontend developer</h4>
                  <h5>2025</h5>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.experience}>
            <h2>Опыт работы</h2>
            <ul className={styles.timeline}>
              <li className={styles.timelineItem}>
                <div className={styles.timelineContent}>
                  <h3>ООО Цифрал-Сервис-Брянск</h3>
                  <h4>Специалист по монтажу слаботочного оборудования</h4>
                  <h5>Сентябрь 2016 — Декабрь 2017 (1 год и 4 месяца)</h5>
                  <p>
                    Проектный подход научил превращать технические требования в
                    реально работающие решения.
                  </p>
                </div>
              </li>
              <li className={styles.timelineItem}>
                <div className={styles.timelineContent}>
                  <h3>Межрайонная ИФНС №5 по Брянской области</h3>
                  <h4>Специалист 1 разряда правового отдела</h4>
                  <h5>Апрель 2018 — Июнь 2022 (4 года и 3 месяца)</h5>
                  <p>
                    Опыт работы в государственной службе развил ключевые для
                    IT-сферы гибкие навыки:
                  </p>
                  <ul className={styles.skillsList}>
                    <li>
                      <strong>Ответственность:</strong> работа с
                      конфиденциальными данными и ведение дел, где ошибки имели
                      серьезные последствия.
                    </li>
                    <li>
                      <strong>
                        Многозадачность и управление приоритетами:
                      </strong>
                      одновременное ведение десятков судебных дел и проверок на
                      разных стадиях.
                    </li>
                    <li>
                      <strong>Обучаемость:</strong> быстрое освоение сложных
                      правовых норм и постоянное самостоятельное изучение
                      изменений в законодательстве.
                    </li>
                    <li>
                      <strong>Работа в команде:</strong> эффективное
                      взаимодействие с коллегами из разных отделов для
                      достижения общих целей.
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <br />
        <div className={styles.texnology}>
          {/* <h2>Технологии</h2> */}
          {/* <div className="skills-box">
            <div className="front-dev-des-box">
              <div className="front-box">
                <h4>Front-End Development</h4>
                <div className={styles.frontBoxSkills}>
                  <div className={styles.boxsSkills}>
                    <i className="fa-brands fa-html5"></i>
                    <p>HTML 5</p>
                  </div>
                  <div className={styles.boxsSkills}>
                    <i className="fa-brands fa-css3-alt"></i>
                    <p>CSS</p>
                  </div>
                  <div className={styles.boxsSkills}>
                    <i className="fa-brands fa-js"></i>
                    <p>JavaScript</p>
                  </div>
                  <div className={styles.boxsSkills}>
                    <i className="fa-brands fa-git-alt"></i>
                    <p>Git</p>
                  </div>
                  <div className={styles.boxsSkills}>
                    <img src="/icon/webpack.svg" alt="" />
                    <p>Webpack</p>
                  </div>
                  <div className={styles.boxsSkills}>
                    <i className="fa-brands fa-bootstrap"></i>
                    <p>Bootstarap</p>
                  </div>
                  <div className={styles.boxsSkills}>
                    <i className="fa-brands fa-sass"></i>
                    <p>SASS</p>
                  </div>
                  <div className={styles.boxsSkills}>
                    <img src="/icon/jquery.svg" alt="" />
                    <p>jQuery</p>
                  </div>
                  <div className={styles.boxsSkills}>
                    <i className="fa-brands fa-react"></i>
                    <p>React</p>
                  </div>
                  <div className={styles.boxsSkills}>
                    <img src="/icon/redux.svg" alt="" />
                    <p>Redux</p>
                  </div>
                  <div className={styles.boxsSkills}>
                    <img src="/icon/typescript.svg" alt="" />
                    <p>TypeScript</p>
                  </div>
                </div>
              </div>
              <div className={styles.backendBox}>
                <h4>Backend-End Development</h4>
                <div className={styles.backBoxSkill}>
                  <div className={styles.boxsSkills}>
                    <i className="fa-brands fa-php"></i>
                    <p>PHP</p>
                  </div>
                  <div className={styles.boxsSkills}>
                    <i className="fa-brands fa-laravel"></i>
                    <p>Laravel</p>
                  </div>
                  <div className={styles.boxsSkills}>
                    <img src="/icon/mysql.svg" alt="" />
                    <p>MySQL</p>
                  </div>
                </div>
              </div>
              <div className={styles.designBox}>
                <h4>Design Tools</h4>
                <div className={styles.designBoxSkills}>
                  <div className={styles.boxsSkills}>
                    <i className="fa-brands fa-figma"></i>
                    <p>Figma</p>
                  </div>
                  <div className={styles.boxsSkills}>
                    <img src="/icon/vscode.svg" alt="" />
                    <p>VS Code</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <section className={styles.skills}>
            <h2>Навыки и технологии</h2>

            <div className={styles.skillsGrid}>
              <article className={styles.skillCategory}>
                <h3>Front-End Development</h3>
                <ul className={styles.skillsList}>
                  <li className={styles.skillItem}>
                    <i className="fa-brands fa-html5" aria-hidden="true"></i>
                    <span>HTML5</span>
                  </li>
                  <li className={styles.skillItem}>
                    <i className="fa-brands fa-css3-alt" aria-hidden="true"></i>
                    <span>CSS3</span>
                  </li>
                  <li className={styles.skillItem}>
                    <i className="fa-brands fa-js" aria-hidden="true"></i>
                    <span>JavaScript</span>
                  </li>
                  <li className={styles.skillItem}>
                    <i className="fa-brands fa-react" aria-hidden="true"></i>
                    <span>React</span>
                  </li>
                  <li className={styles.skillItem}>
                    <img src="/icon/typescript.svg" alt="TypeScript" />
                    <span>TypeScript</span>
                  </li>
                  <li className={styles.skillItem}>
                    <img src="/icon/redux.svg" alt="Redux" />
                    <span>Redux</span>
                  </li>
                  <li className={styles.skillItem}>
                    <i className="fa-brands fa-sass" aria-hidden="true"></i>
                    <span>SASS</span>
                  </li>
                  <li className={styles.skillItem}>
                    <i
                      className="fa-brands fa-bootstrap"
                      aria-hidden="true"
                    ></i>
                    <span>Bootstrap</span>
                  </li>
                  <li className={styles.skillItem}>
                    <i className="fa-brands fa-git-alt" aria-hidden="true"></i>
                    <span>Git</span>
                  </li>
                  <li className={styles.skillItem}>
                    <img src="/icon/webpack.svg" alt="Webpack" />
                    <span>Webpack</span>
                  </li>
                  <li className={styles.skillItem}>
                    <img src="/icon/jquery.svg" alt="jQuery" />
                    <span>jQuery</span>
                  </li>
                </ul>
              </article>

              <article className={styles.skillCategory}>
                <h3>Back-End Development</h3>
                <ul className={styles.skillsList}>
                  <li className={styles.skillItem}>
                    <i className="fa-brands fa-php" aria-hidden="true"></i>
                    <span>PHP</span>
                  </li>
                  <li className={styles.skillItem}>
                    <i className="fa-brands fa-laravel" aria-hidden="true"></i>
                    <span>Laravel</span>
                  </li>
                  <li className={styles.skillItem}>
                    <img src="/icon/mysql.svg" alt="MySQL" />
                    <span>MySQL</span>
                  </li>
                </ul>
              </article>

              <article className={styles.skillCategory}>
                <h3>Инструменты разработки</h3>
                <ul className={styles.skillsList}>
                  <li className={styles.skillItem}>
                    <i className="fa-brands fa-figma" aria-hidden="true"></i>
                    <span>Figma</span>
                  </li>
                  <li className={styles.skillItem}>
                    <img src="/icon/vscode.svg" alt="VS Code" />
                    <span>VS Code</span>
                  </li>
                </ul>
              </article>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
