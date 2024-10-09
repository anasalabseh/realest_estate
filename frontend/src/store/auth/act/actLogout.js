import { createAsyncThunk } from "@reduxjs/toolkit";

import { setAlert } from "../../alert/alertSlice";

const logoutThunk = createAsyncThunk("auth/logout", async (_, { dispatch }) => {
  const alert = { msg: "Logout successful", alertType: "success" };
  dispatch(setAlert(alert));
  return alert.msg;
});

export default logoutThunk;
