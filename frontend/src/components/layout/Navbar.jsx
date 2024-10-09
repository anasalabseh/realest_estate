import { NavLink, Link } from "react-router-dom";

import Alert from "../common/Alert";

import { useSelector, useDispatch } from "react-redux";

import {
  isAuthenticatedSelector,
  isLoadingSelector,
  logout,
} from "../../store/auth/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  const loading = useSelector(isLoadingSelector);

  const logoutHandler = () => {
    dispatch(logout);
  };

  const authLinks = (
    <a className="navbar__top__auth__link" onClick={logoutHandler} href="#">
      Logout
    </a>
  );

  const guestLinks = (
    <>
      <Link className="navbar__top__auth__link" to="/login">
        Login
      </Link>
      <Link className="navbar__top__auth__link" to="/signup">
        Sign Up
      </Link>
    </>
  );

  return (
    <>
      <nav className="navbar">
        <div className="navbar__top">
          <div className="navbar__top__logo">
            <Link className="navbar__top__logo__link" to="/">
              Realest Estate
            </Link>
          </div>
          <div className="navbar__top__auth">
            {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
          </div>
        </div>
        <div className="navbar__bottom">
          <li className="navbar__bottom__item">
            <NavLink to="/" className="navbar__bottom__item__link">
              Home
            </NavLink>
          </li>
          <li className="navbar__bottom__item">
            <NavLink to="/Listings" className="navbar__bottom__item__link">
              Listings
            </NavLink>
          </li>
          <li className="navbar__bottom__item">
            <NavLink to="/about" className="navbar__bottom__item__link">
              About
            </NavLink>
          </li>
          <li className="navbar__bottom__item">
            <NavLink to="/contact" className="navbar__bottom__item__link">
              Contact
            </NavLink>
          </li>
        </div>
      </nav>
      <Alert />
    </>
  );
};

export default Navbar;
