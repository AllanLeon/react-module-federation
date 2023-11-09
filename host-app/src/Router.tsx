import { FunctionComponent, PropsWithChildren } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./Root";
import Home from "./pages/Home/Home";
import RemoteLoader from "./remote/RemoteLoader";

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
        element: (
          <RemoteLoader
            data={{
              url: "http://localhost:3001/remoteEntry.js",
              scope: "Mfe1",
              module: "./Dogs",
            }}
          />
        ),
      },
      {
        path: "/cats",
        element: (
          <RemoteLoader
            data={{
              url: "http://localhost:3001/remoteEntry.js",
              scope: "Mfe1",
              module: "./Cats",
            }}
          />
        ),
      },
      {
        path: "/pokemon",
        element: (
          <RemoteLoader
            data={{
              url: "http://localhost:3002/remoteEntry.js",
              scope: "Mfe2",
              module: "./Pokemon",
            }}
          />
        ),
      },
    ],
  },
]);

const Router: FunctionComponent<PropsWithChildren> = () => {
  return <RouterProvider router={router} />;
};

export default Router;
