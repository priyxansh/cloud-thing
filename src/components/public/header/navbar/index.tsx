import { NAV_ROUTES } from "~/constants/nav-routes";
import NavLink from "./NavLink";

const NavBar = () => {
  return (
    <nav className="mx-4 flex items-center gap-2">
      {NAV_ROUTES.map((route) => {
        return (
          <NavLink key={route.label} label={route.label} path={route.path} />
        );
      })}
    </nav>
  );
};

export default NavBar;
