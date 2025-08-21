import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { ROUTES } from "../router/constants";
import { Hero } from "../pages/Hero/Hero";
import { Layouts } from "../components/layouts/Layouts";
import { NotFound } from "../pages/NotFound/NotFound";
import { Works } from "../pages/Works/Works";
import { CardBox } from "../components/CardBox/CardBox";
import { ProjectDetail } from "../components/ProjectDetail/ProjectDetail";

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
        path: ":name",
        element: <ProjectDetail />,
      },
    ],
  },
  {
    path: ROUTES.NOT_FOUND,
    element: <NotFound />,
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
