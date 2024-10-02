import { NavLink } from "react-router-dom";

const NavBarlink = ({ destination, children }) => {
  return (
    <NavLink
      to={destination}
      className={({ isActive }) =>
        isActive ? `underline text-` : `text-white hover:text-blue-200`
      }
    >
      {children}
    </NavLink>
  );
};

export default NavBarlink;
