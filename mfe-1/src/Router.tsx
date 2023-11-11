import { FunctionComponent, PropsWithChildren } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./Root";
import Home from "./pages/Home/Home";
import Dogs from "./pages/Dogs";
import Capybaras from "./pages/Capybaras";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dogs",
        element: <Dogs />,
      },
      {
        path: "/capybaras",
        element: <Capybaras />,
      },
    ],
  },
]);

const Router: FunctionComponent<PropsWithChildren> = () => {
  return <RouterProvider router={router} />;
};

export default Router;
