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
          logo: "mfe-1",
          items: [
            { label: "Home", path: "/" },
            { label: "Capybaras", path: "/capybaras" },
            { label: "Dogs", path: "/dogs" },
          ],
        }}
      />
      <Outlet />
    </div>
  );
}

export default Root;
