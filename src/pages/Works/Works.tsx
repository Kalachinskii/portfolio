import { NavLink, Outlet } from "react-router-dom";
import styles from "./Works.module.css";
import json from "../../assets/projects.json";
import useEmblaCarousel from "embla-carousel-react";

export function Works() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className={`${styles.worksConteiner}`}>
      <Outlet />
      <div className={`${styles.rightConteiner}`}>
        <div className={`${styles.embla}`} ref={emblaRef}>
          <div className={`${styles.embla__container}`}>
            {json.map((el) => (
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
