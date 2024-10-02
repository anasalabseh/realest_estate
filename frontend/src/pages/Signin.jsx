import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../store/auth/authSlice";

const Signin = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Helmet>
        <title>Reales Estate - Signin</title>
        <meta name="description" content="signin page" />
      </Helmet>
      <h1>Sign In</h1>
      <p>Sign into your Account</p>
      <form>
        <div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => handleInputChange(e)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            required
            minLength={6}
          />
        </div>
        <button>Login</button>
      </form>
      <p>
        Don't have an Account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default Signin;
