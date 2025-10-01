import { Outlet, useLocation } from "react-router-dom";
import Cover from "../Cover/Cover";
import { Nav } from "../Nav/Nav";

export function Layouts() {
  const location = useLocation();
  const isProjectsPage = location.pathname.includes("/projects");

  return (
    <>
      <Nav />
      {/* убераем видео фон для проектов т.к. Image всеравно его перекроет */}
      {/* предзагружает видео при переходе на другие вкладки Navbar т.к. кэш очищаеться */}
      {!isProjectsPage && <Cover />}
      <Outlet />
    </>
  );
}
