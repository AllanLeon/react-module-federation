import { FunctionComponent, PropsWithChildren } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./Root";
import Home from "./pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

const Router: FunctionComponent<PropsWithChildren> = () => {
  return <RouterProvider router={router} />;
};

export default Router;
