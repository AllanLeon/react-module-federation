import { FunctionComponent, ReactNode } from "react";
import { Link } from "react-router-dom";

export interface NavBarItem {
  label: string;
  path: string;
}

export interface NavBarProps {
  logo: ReactNode;
  items: NavBarItem[];
}

const NavBar: FunctionComponent<NavBarProps> = ({ logo, items }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to={'/'} className="navbar-brand">{logo}</Link>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {items.map(({ label, path }) => (
            <li className="nav-item" key={path}>
                {/* TODO: add active class */}
              <Link to={path} className="nav-link">{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
