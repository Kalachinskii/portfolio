import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { ROUTES } from "../router/constants";
import { Layouts } from "../components/layouts/Layouts";
import { NotFound } from "../pages/NotFound/NotFound";
import { lazy, Suspense, type ComponentType } from "react";

// const lazyLoad = (path, componentName) => lazy(() => import(path).then(module => ({ default: module[componentName] })));
const lazyLoad = <T extends ComponentType<any>>(
  path: string,
  componentName: string
) => {
  return lazy(() =>
    // const Hero = lazyLoad("../pages/Hero/Hero", "Hero");
    // { Hero: () => <div>Hero Component</div>,  }
    // module["Hero"]
    import(path).then((module: { [key: string]: ComponentType<any> }) => ({
      default: module[componentName] as T,
    }))
  );
};

const Hero = lazyLoad("../pages/Hero/Hero", "Hero");
const Works = lazyLoad("../pages/Works/Works", "Works");
const ProjectDetail = lazyLoad(
  "../components/ProjectDetail/ProjectDetail",
  "ProjectDetail"
);
const About = lazyLoad("../pages/About/About", "About");
const Contacts = lazyLoad("../pages/Contacts/Contacts", "Contacts");

const LoadingSpinner = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "50vh",
    }}
  >
    <div>Загрузка...</div>
  </div>
);

const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Layouts />
      </Suspense>
    ),
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
      {
        path: ROUTES.ABOUT,
        element: <About />,
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
