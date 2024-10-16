import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuthenticatedSelector } from "../../store/auth/authSlice";

const PrivateRoute = ({ element: Element }) => {
  const isAuthenticated = useSelector(isAuthenticatedSelector);

  return isAuthenticated ? <Element /> : <Navigate to="/login" />;
};

export default PrivateRoute;
