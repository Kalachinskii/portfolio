import { NavLink, Outlet, useNavigate } from "react-router-dom";
import styles from "./Works.module.css";
import useEmblaCarousel from "embla-carousel-react";
import { useProjectStore } from "../../store/store";
import { useEffect } from "react";

export function Works() {
  const navigate = useNavigate();
  const { projects } = useProjectStore();
  const [emblaRef] = useEmblaCarousel();

  useEffect(() => {
    // Проверяем, что мы на корневом пути /projects/Pizza и есть проекты
    if (projects.length > 0 && location.pathname.endsWith("/projects/Pizza")) {
      navigate(`${projects[0].title}`, {
        state: { id: projects[0].id },
        replace: true,
      });
    }
  }, [projects, location.pathname, navigate]);

  return (
    <div className={`${styles.worksConteiner}`}>
      <Outlet />

      <div className={`${styles.rightConteiner}`}>
        <div className={`${styles.embla}`} ref={emblaRef}>
          <div className={`${styles.embla__container}`}>
            {projects.map((el) => (
              <NavLink
                key={el.title}
                to={`${el.title}`}
                style={
                  {
                    "--slide-mini-image": `url(${el.imageMiniUrl})`,
                  } as React.CSSProperties
                }
                className={({ isActive }) =>
                  isActive
                    ? `${styles.embla__slide} ${styles.active}`
                    : styles.embla__slide
                }
                state={{ id: el.id }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
