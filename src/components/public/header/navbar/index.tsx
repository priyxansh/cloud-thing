import { NAV_ROUTES } from "~/constants/nav-routes";
import NavLink from "./NavLink";
import NavSheet from "./NavSheet";

const NavBar = () => {
  return (
    <nav className="order-last sm:order-none">
      <NavSheet />
      <ul className="mx-20 hidden items-center sm:flex">
        {NAV_ROUTES.map((route) => {
          return (
            <NavLink key={route.label} label={route.label} path={route.path} />
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
