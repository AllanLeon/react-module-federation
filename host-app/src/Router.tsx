import { FunctionComponent, PropsWithChildren } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home";
import Dogs from "Mfe1/Dogs";
import Cats from "Mfe1/Cats";
import Pokemon from "Mfe2/Pokemon";
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
        path: "/dogs",
        element: <Dogs />,
      },
      {
        path: "/cats",
        element: <Cats />,
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
