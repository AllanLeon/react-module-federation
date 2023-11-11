import { FunctionComponent, PropsWithChildren } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home";
import Pokemon from "./pages/Pokemon/Pokemon";
import Root from "./Root";

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
        path: "/pokemon",
        element: <Pokemon />,
      },
    ],
  },
]);

const Router: FunctionComponent<PropsWithChildren> = () => {
  return <RouterProvider router={router} />;
};

export default Router;
