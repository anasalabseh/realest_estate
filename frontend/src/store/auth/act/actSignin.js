import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../services/axios";
import { loginSuccess, loginFail } from "../authSlice";
import { setAlert } from "../../alert/alertSlice";

const signinThunk = createAsyncThunk(
  "auth/signin",
  async (credentials, { dispatch, rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const email = credentials.email;
    const password = credentials.password;
    const body = JSON.stringify({ email, password });
    try {
      const response = await api.post("/api/token", body, config);
      dispatch(loginSuccess(response.data));
      dispatch(
        setAlert({ msg: "Authenticated successfully", alertType: "success" })
      );
      return response.data;
    } catch (err) {
      dispatch(loginFail());
      dispatch(setAlert({ msg: "Error Authenticating", alertType: "error" }));
      return rejectWithValue(err.message);
    }
  }
);

export default signinThunk;
