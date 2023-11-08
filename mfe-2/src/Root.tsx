import { Outlet } from "react-router-dom";

import NavBar from "Mfe1/NavBar";

function Root() {
  return (
    <div>
      <NavBar
        logo={"mfe-2"}
        items={[
          { label: "Home", path: "/" },
          { label: "Pokemon", path: "/pokemon" },
        ]}
      />
      <Outlet />
    </div>
  );
}

export default Root;
