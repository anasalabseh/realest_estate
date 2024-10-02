import { createAsyncThunk } from "@reduxjs/toolkit";
import { logoutDone } from "../authSlice";
import { setAlert } from "../../alert/alertSlice";

const logoutThunk = createAsyncThunk("auth/logout", async (_, { dispatch }) => {
  return new Promise((resolve) => {
    const alert = { msg: "Logout successful", alertType: "success" };
    dispatch(setAlert(alert));
    dispatch(logoutDone());
    resolve(alert.msg);
  });
});

export default logoutThunk;
