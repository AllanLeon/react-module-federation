import { Outlet } from "react-router-dom";

import NavBar from "./components/NavBar";

function Root() {
  return (
    <div>
      <NavBar
        logo={"mfe-1"}
        items={[
          { label: "Home", path: "/" },
          { label: "Capybaras", path: "/capybaras" },
          { label: "Dogs", path: "/dogs" },
        ]}
      />
      <Outlet />
    </div>
  );
}

export default Root;
