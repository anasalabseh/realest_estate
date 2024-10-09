import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, redirect } from "react-router-dom";
import { setAlert } from "../store/alert/alertSlice";
import { signup, isAuthenticatedSelector } from "../store/auth/authSlice";
import { Helmet } from "react-helmet-async";

const Signup = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const handleInputChange = (event) => {
    setFormData((prevForm) => {
      return { ...prevForm, [event.target.name]: event.target.value };
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (password !== password2) {
      dispatch(setAlert({ msg: "Passwords do not match", alertType: "error" }));
    }
    dispatch(signup(formData));
  };

  if (isAuthenticated) {
    return redirect("/");
  }

  return (
    <div className="auth">
      <Helmet>
        <title>Reales Estate - Sign Up</title>
        <meta name="description" content="sign up page" />
      </Helmet>
      <h1 className="auth__title">Sign Up</h1>
      <p className="auth__lead">Create your Account</p>
      <form className="auth__form" onSubmit={(e) => handleFormSubmit(e)}>
        <div className="auth__form__group">
          <input
            className="auth__form__input"
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => handleInputChange(e)}
            required
          />
        </div>
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
        <div className="auth__form__group">
          <input
            className="auth__form__input"
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={(e) => handleInputChange(e)}
            required
            minLength={6}
          />
        </div>
        <button className="auth__form__button">Register</button>
      </form>
      <p className="auth__authtext">
        Already have an Account?{" "}
        <Link className="auth__authtext__link" to="/login">
          Signin
        </Link>
      </p>
    </div>
  );
};

export default Signup;
