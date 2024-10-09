import { useState } from "react";
import { Link, redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/auth/authSlice";
import { isAuthenticatedSelector } from "../store/auth/authSlice";
import { Helmet } from "react-helmet-async";

const Signin = () => {
  const isAuthenticated = useSelector(isAuthenticatedSelector);

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleInputChange = (event) => {
    setFormData((prevFormData) => {
      return { ...prevFormData, [event.target.name]: event.target.value };
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(login({ email, password }));
  };

  if (isAuthenticated) return redirect("/");

  return (
    <div className="auth">
      <Helmet>
        <title>Reales Estate - Login</title>
        <meta name="description" content="login page" />
      </Helmet>
      <h1 className="auth__title">Sign In</h1>
      <p className="auth__lead">Sign into your Account</p>
      <form className="auth__form" onSubmit={(e) => onSubmit(e)}>
        <div className="auth__form__group">
          <input
            className="auth__form__input"
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => handleInputChange(e)}
            required
          />
        </div>
        <div className="auth__form__group">
          <input
            className="auth__form__input"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => handleInputChange(e)}
            required
            minLength={6}
          />
        </div>
        <button className="auth__form__button">Login</button>
      </form>
      <p className="auth__authtext">
        Don't have an Account?{" "}
        <Link className="auth__authtext__link" to="/signup">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Signin;
