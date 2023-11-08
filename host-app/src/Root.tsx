import { Outlet } from "react-router-dom";

import NavBar from "Mfe1/NavBar";

function Root() {
  return (
    <div>
      <NavBar
        logo={"host-app"}
        items={[
          { label: "Home", path: "/" },
          { label: "Dogs", path: "/dogs" },
          { label: "Cats", path: "/cats" },
          { label: "Pokemon", path: "/pokemon" },
        ]}
      />
      <Outlet />
    </div>
  );
}

export default Root;
