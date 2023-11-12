import { Outlet } from "react-router-dom";

import { RemoteLoader } from "@poc/core";

function Root() {
  return (
    <div>
      <RemoteLoader
        data={{
          url: "http://localhost:3003/remoteEntry.js",
          scope: "Mfe3",
          module: "./NavBar",
        }}
        componentProps={{
          logo: "host-app",
          items: [
            { label: "Home", path: "/" },
            { label: "Capybaras", path: "/capybaras" },
            { label: "Dogs", path: "/dogs" },
            { label: "Pokemon", path: "/pokemon" },
          ],
        }}
      />
      <Outlet />
    </div>
  );
}

export default Root;
