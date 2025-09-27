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
        <div className={styles.qualificationBox}>
          <h1>Квалификация</h1>
          <div className={styles.education}>
            <h2>Оброзование</h2>
            <div>
              <h3>Московский психолого-социальный университет, Москва</h3>
              <h4>Юриспруденция</h4>
              <h5>2015 · Бакалавр</h5>
            </div>
            <div>
              <h3>IT Парк</h3>
              <h4>Full-Stack Developer</h4>
              <h5>2024</h5>
            </div>
            <div>
              <h3>IT Парк</h3>
              <h4>Frontend developer</h4>
              <h5>2025</h5>
            </div>
          </div>
          <div className={styles.experience}>
            <h2>Опыт работы</h2>
            <div>
              <h3>ООО Цифрал-Сервис-Брянск</h3>
              <h4>Специалист по монтажу слаботочного оборудования</h4>
              <h5>Сентябрь 2016 — Декабрь 2017 (1 год и 4 месяца)</h5>
              <p>
                Проектный подход научил превращать технические требования в
                реально работающие решения.
              </p>
            </div>
            <div>
              <h3>Межрайонная ИФНС №5 по Брянской области</h3>
              <h4>Специалист 1 разряда правового отдела</h4>
              <h5>Апрель 2018 — Июнь 2022 (4 года и 3 месяца)</h5>
              <p>
                Опыт работы в государственной службе развил ключевые для
                IT-сферы гибкие навыки:
              </p>
              <ul>
                <li>
                  <strong>Ответственность:</strong> работа с конфиденциальными
                  данными и ведение дел, где ошибки имели серьезные последствия.
                </li>
                <li>
                  <strong>Многозадачность и управление приоритетами:</strong>
                  одновременное ведение десятков судебных дел и проверок на
                  разных стадиях.
                </li>
                <li>
                  <strong>Обучаемость:</strong> быстрое освоение сложных
                  правовых норм и постоянное самостоятельное изучение изменений
                  в законодательстве.
                </li>
                <li>
                  <strong>Работа в команде:</strong> эффективное взаимодействие
                  с коллегами из разных отделов для достижения общих целей.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.texnology}>
          <h2>Технологии</h2>
          <div className="skills-box">
            <h2>Skills</h2>
            <div className="front-dev-des-box">
              <div className="front-box">
                <i className="fa-solid fa-palette"></i>
                <h4>Front-End Development</h4>
                <div className="front-box-skills">
                  <div className="box-skills">
                    <i className="fa-brands fa-html5"></i>
                    <p>HTML 5</p>
                  </div>
                  <div className="box-skills">
                    <i className="fa-brands fa-css3-alt"></i>
                    <p>CSS</p>
                  </div>
                  <div className="box-skills">
                    <i className="fa-brands fa-js"></i>
                    <p>JavaScript</p>
                  </div>
                  <div className="box-skills">
                    <i className="fa-brands fa-git-alt"></i>
                    <p>Git</p>
                  </div>
                  <div className="box-skills">
                    <img src="/icon/webpack.svg" alt="" />
                    <p>Webpack</p>
                  </div>
                  <div className="box-skills">
                    <i className="fa-brands fa-bootstrap"></i>
                    <p>Bootstarap</p>
                  </div>
                  <div className="box-skills">
                    <i className="fa-brands fa-sass"></i>
                    <p>SASS</p>
                  </div>
                  <div className="box-skills">
                    <img src="/icon/jquery.svg" alt="" />
                    <p>jQuery</p>
                  </div>
                  <div className="box-skills">
                    <i className="fa-brands fa-react"></i>
                    <p>React</p>
                  </div>
                  <div className="box-skills">
                    <img src="/icon/redux.svg" alt="" />
                    <p>Redux</p>
                  </div>
                  <div className="box-skills">
                    <img src="/icon/typescript.svg" alt="" />
                    <p>TypeScript</p>
                  </div>
                </div>
              </div>
              <div className="back-box">
                <i className="fa-solid fa-code"></i>
                <h4>Backend-End Development</h4>
                <div className="back-box-skills">
                  <div className="box-skills">
                    <i className="fa-brands fa-php"></i>
                    <p>PHP</p>
                  </div>
                  <div className="box-skills">
                    <i className="fa-brands fa-laravel"></i>
                    <p>Laravel</p>
                  </div>
                  <div className="box-skills">
                    <img src="/icon/mysql.svg" alt="" />
                    <p>MySQL</p>
                  </div>
                </div>
              </div>
              <div className="des-box">
                <i className="fa-solid fa-ruler-combined"></i>
                <h4>Design Tools</h4>
                <div className="design-box-skills">
                  <div className="box-skills">
                    <i className="fa-brands fa-figma"></i>
                    <p>Figma</p>
                  </div>
                  <div className="box-skills">
                    <img src="/icon/vscode.svg" alt="" />
                    <p>VS Code</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
