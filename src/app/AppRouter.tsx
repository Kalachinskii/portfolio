import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "../router/constants";
import { Home } from "../pages/Home";
import { Layouts } from "../components/layouts/Layouts";

const router = createBrowserRouter([
  {
    element: <Layouts />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
    ],
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
