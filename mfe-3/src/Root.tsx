import { Outlet } from "react-router-dom";

import NavBar from "./components/NavBar";

function Root() {
  return (
    <div>
      <NavBar
          logo="mfe-3"
          items={[
            { label: "Home", path: "/" },
          ]}
      />
      <Outlet />
    </div>
  );
}

export default Root;
