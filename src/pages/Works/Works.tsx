import { NavLink, Outlet, useNavigate } from "react-router-dom";
import styles from "./Works.module.css";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useMemo } from "react";
import json from "../../assets/projects.json";

export function Works() {
  const navigate = useNavigate();

  // Используем useMemo для дорогих вычислений
  const [emblaRef] = useEmblaCarousel();

  useEffect(() => {
    // Всегда редиректим на первый проект при загрузке /projects
    if (json.length > 0 && window.location.pathname === "/projects") {
      navigate(`${json[0].id}`, {
        state: { id: json[0].id },
        replace: true,
      });
    }
  }, [navigate, json]);

  // Мемоизируем стили
  const slides = useMemo(
    () =>
      json.map((el) => ({
        ...el,
        style: {
          "--slide-mini-image": `url(${el.imageMiniUrl})`,
        } as React.CSSProperties,
      })),
    [json]
  );

  return (
    <div className={styles.worksConteiner}>
      <Outlet />
      <div className={styles.rightConteiner}>
        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.embla__container}>
            {slides.map((el) => (
              <NavLink
                key={el.id}
                to={`${el.id}`}
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
