import { NavLink, Outlet, useNavigate } from "react-router-dom";
import styles from "./Works.module.css";
import useEmblaCarousel from "embla-carousel-react";
import { useProjectStore } from "../../store/store";
import { useEffect, useMemo } from "react";

export function Works() {
  const navigate = useNavigate();
  const { projects } = useProjectStore();

  // Используем useMemo для дорогих вычислений
  const [emblaRef] = useEmblaCarousel();

  // Выносим проверку в переменные
  const shouldRedirect =
    projects.length > 0 && location.pathname.endsWith("/projects/Pizza");

  useEffect(() => {
    if (shouldRedirect) {
      navigate(`${projects[0].title}`, {
        state: { id: projects[0].id },
        replace: true,
      });
    }
  }, [shouldRedirect, projects, navigate]);

  // Мемоизируем стили
  const slides = useMemo(
    () =>
      projects.map((el) => ({
        ...el,
        style: {
          "--slide-mini-image": `url(${el.imageMiniUrl})`,
        } as React.CSSProperties,
      })),
    [projects]
  );

  return (
    <div className={styles.worksConteiner}>
      <Outlet />
      <div className={styles.rightConteiner}>
        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.embla__container}>
            {slides.map((el) => (
              <NavLink
                key={el.title}
                to={el.title}
                style={el.style}
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
