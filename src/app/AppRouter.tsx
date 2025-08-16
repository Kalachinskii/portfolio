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
        index: true,
        element: <Navigate to="all" replace />,
      },
      {
        path: "all",
        element: <CardBox />,
      },
      {
        path: "ts",
        element: <CardBox sort="TypeScript" />,
      },
      {
        path: "js",
        element: <CardBox sort="JavaScript" />,
      },
      {
        path: "php",
        element: <CardBox sort="PHP" />,
      },
      {
        path: "html-css",
        element: <CardBox sort="HTML5" />,
      },
    ],
  },
  {
    path: ROUTES.NOT_FOUND,
    element: <NotFound />,
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
