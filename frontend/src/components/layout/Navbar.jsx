import { NavLink, Link } from "react-router-dom";
import NavBarlink from "../common/NavBarlink";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__top">
          <div className="navbar__top__logo">
            <Link className="navbar__top__logo__link" to="/">
              Realest Estate
            </Link>
          </div>
          <div className=""></div>
          <div />
          <div className="flex gap-x-2 space-x-4">
            <NavBarlink destination="/">Home</NavBarlink>
            <NavBarlink destination="/Listings">Listings</NavBarlink>
            <NavBarlink destination="/about">About</NavBarlink>
            <NavBarlink destination="/contact">Contact</NavBarlink>
          </div>
          <div className="flex justify-between gap-x-4 hover:text-colo">
            <NavLink to="/login" className="text-white">
              Login
            </NavLink>
            <NavLink to="/signup" className="text-white">
              Sign Up
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
