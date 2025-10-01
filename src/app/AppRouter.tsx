import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { ROUTES } from "../router/constants";
import { Layouts } from "../components/layouts/Layouts";
import { NotFound } from "../pages/NotFound/NotFound";
import { lazy, Suspense } from "react";
import { LoadingSpinner } from "../components/LoadingSpinner/LoadingSpinner";

const Hero = lazy(() =>
  import("../pages/Hero/Hero").then((module) => ({ default: module.Hero }))
);
const Works = lazy(() =>
  import("../pages/Works/Works").then((module) => ({ default: module.Works }))
);
const ProjectDetail = lazy(() =>
  import("../components/ProjectDetail/ProjectDetail").then((module) => ({
    default: module.ProjectDetail,
  }))
);
const About = lazy(() =>
  import("../pages/About/About").then((module) => ({ default: module.About }))
);
const Contacts = lazy(() =>
  import("../pages/Contacts/Contacts").then((module) => ({
    default: module.Contacts,
  }))
);

const router = createBrowserRouter([
  {
    element: <Layouts />,
    children: [
      {
        path: ROUTES.HERO,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Hero />
          </Suspense>
        ),
      },
      {
        path: ROUTES.ABOUT,
        element: <About />,
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
      {
        path: ROUTES.CONTACTS,
        element: <Contacts />,
      },
    ],
  },
  {
    path: ROUTES.NOT_FOUND,
    element: <NotFound />,
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
