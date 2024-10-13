import { setAlert } from "../../alert/alertSlice";
import { setIsAuthenticated } from "../authSlice";

export const logout = (dispatch) => {
  dispatch(setIsAuthenticated(false));
  const alert = { msg: "Logout successful", alertType: "success" };
  dispatch(setAlert(alert));
};
