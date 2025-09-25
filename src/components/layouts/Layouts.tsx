import { Outlet } from "react-router-dom";
import Cover from "../Cover/Cover";
import { Nav } from "../Nav/Nav";

export function Layouts() {
  return (
    <>
      <Nav />
      {/* <SocialLinks /> */}
      <Cover />
      <Outlet />
    </>
  );
}
