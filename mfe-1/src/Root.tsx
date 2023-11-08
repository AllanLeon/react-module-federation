import { Outlet } from "react-router-dom";

import NavBar from "./components/NavBar";

function Root() {
  return (
    <div>
      <NavBar
        logo={"mfe-1"}
        items={[
          { label: "Home", path: "/" },
          { label: "Dogs", path: "/dogs" },
          { label: "Cats", path: "/cats" },
        ]}
      />
      <Outlet />
    </div>
  );
}

export default Root;
