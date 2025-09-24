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
import { ProjectDetail } from "../components/ProjectDetail/ProjectDetail";

const router = createBrowserRouter([
  {
    element: <Layouts />,
    children: [
      {
        path: ROUTES.HERO,
        element: <Hero />,
      },
      {
        path: ROUTES.PROJECTS,
        element: <Works />,
        children: [
          {
            index: true,
            element: <Navigate to={ROUTES.DEFAULT_PROJECT} replace />,
          },
          {
            path: ":name",
            element: <ProjectDetail />,
          },
          {
            path: "*",
            element: <Navigate to={ROUTES.NOT_FOUND} replace />,
          },
        ],
      },
    ],
  },
  {
    path: ROUTES.NOT_FOUND,
    element: <NotFound />,
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
