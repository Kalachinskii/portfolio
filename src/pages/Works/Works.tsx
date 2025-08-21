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
                to={`${el.title}`}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.embla__slide} ${styles.active}`
                    : styles.embla__slide
                }
              >
                {el.id}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/*
  const navigation = [
    { name: "Все", link: "all" },
    { name: "TS", link: "ts" },
    { name: "JS", link: "js" },
    { name: "PHP", link: "php" },
  ];
*/
