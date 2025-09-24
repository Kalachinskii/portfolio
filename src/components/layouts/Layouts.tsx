import { Outlet } from "react-router-dom";
import Cover from "../Cover/Cover";
import { SocialLinks } from "../SocialLinks/SocialLinks";
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
