import { Outlet } from "react-router-dom";

import { RemoteLoader } from "@poc/core";

function Root() {
  return (
    <div>
      <RemoteLoader
        data={{
          url: "http://localhost:3001/remoteEntry.js",
          scope: "Mfe1",
          module: "./NavBar",
        }}
        componentProps={{
          logo:"mfe-2",
          items:[
            { label: "Home", path: "/" },
            { label: "Pokemon", path: "/pokemon" },
          ]
        }}
      />
      <Outlet />
    </div>
  );
}

export default Root;
