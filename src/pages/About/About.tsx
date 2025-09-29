import styles from "./About.module.css";

export const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftBox}>
        <img src="/miAvatar.png" alt="фотография" />
        <h1>Frontend Developer (React/Next.js)</h1>
        <p>Создаю современные веб-приложения на React, TypeScript и Next.js</p>
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
                    <img src="/icon/next.svg" alt="Next.js" />
                    <span>Next.js</span>
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
                    <img src="/icon/zustand.png" alt="Zustand" />
                    <span>Zustand</span>
                  </li>
                  <li className={styles.skillItem}>
                    <img src="/icon/phaser.png" alt="Phaser.js" />
                    <span>Phaser.js</span>
                  </li>
                  <li className={styles.skillItem}>
                    <i className="fa-brands fa-sass" aria-hidden="true"></i>
                    <span>SASS</span>
                  </li>
                  <li className={styles.skillItem}>
                    <img src="/icon/tailwind-css.png" alt="Tailwind CSS" />
                    <span>Tailwind CSS</span>
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
                    <img src="/icon/prisma.png" alt="Prisma" />
                    <span>Prisma</span>
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
