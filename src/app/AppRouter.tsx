import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { ROUTES } from "../router/constants";
import { Hero } from "../pages/Hero/Hero";
import { Layouts } from "../components/layouts/Layouts";
import { NotFound } from "../pages/NotFound/NotFound";
import { Works } from "../pages/Works/Works";
import { Card } from "../components/Card/Card";

const router = createBrowserRouter([
  {
    element: <Layouts />,
    children: [
      {
        path: ROUTES.HERO,
        element: <Hero />,
      },
    ],
  },
  {
    path: ROUTES.PROJECTS,
    element: <Works />,
    children: [
      {
        path: "ts",
        element: <Card />,
      },
      {
        path: "js",
        element: <>Контент JS</>,
      },
      {
        path: "php",
        element: <>Контент PHP</>,
      },
      {
        path: "html-css",
        element: <>Контент html-css</>,
      },
    ],
  },
  {
    path: ROUTES.NOT_FOUND,
    element: <NotFound />,
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
