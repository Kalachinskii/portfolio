import { Outlet } from "react-router-dom";

export function Layouts() {
  return (
    <>
      <div>header</div>

      <Outlet />

      <div>footer</div>
    </>
  );
}
