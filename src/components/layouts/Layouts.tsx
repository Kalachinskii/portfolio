import styles from "./Layouts.module.css";
import { Outlet } from "react-router-dom";
import Cover from "../Cover/Cover";
import { Nav } from "../Nav/Nav";

export function Layouts() {
  return (
    <>
      <Nav />
      <Cover />
      <Outlet />
    </>
  );
}
