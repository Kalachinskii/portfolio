import { NavLink, Outlet, useNavigate } from "react-router-dom";
import styles from "./Works.module.css";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useMemo } from "react";
import json from "../../assets/projects.json";

export function Works() {
  const navigate = useNavigate();

  // Используем useMemo для дорогих вычислений
  const [emblaRef] = useEmblaCarousel();

  const shouldRedirect =
    json.length > 0 && window.location.pathname.endsWith("/projects/Pizza");

  useEffect(() => {
    if (shouldRedirect) {
      navigate(`${json[0].title}`, {
        state: { id: json[0].id },
        replace: true,
      });
    }
  }, [shouldRedirect, navigate]);

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
