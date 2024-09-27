import { createAsyncThunk } from "@reduxjs/toolkit";
import { logoutDone } from "../authSlice";
import { setAlert } from "../../alert/alertSlice";

const logoutThunk = createAsyncThunk("auth/logout", async (_, { dispatch }) => {
  dispatch(setAlert({ msg: "Logout successful", alertType: "success" }));
  dispatch(logoutDone());
});

export default logoutThunk;
