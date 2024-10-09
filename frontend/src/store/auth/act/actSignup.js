import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../services/axios";
import { login } from "../authSlice";
import { setAlert } from "../../alert/alertSlice";

const signupThunk = createAsyncThunk(
  "auth/signup",
  async (credentials, { dispatch, rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { name, email, password, password2 } = credentials;
    const body = JSON.stringify({ name, email, password, password2 });

    try {
      const response = await api.post("/api/accounts/signup/", body, config);
      dispatch(signupSuccess(response.data));
      dispatch(login({ email, password }));

      return response.data;
    } catch (err) {
      dispatch(signupFail());
      const alert = { msg: "Error Authenticating", alertType: "error" };
      dispatch(setAlert(alert));
      return rejectWithValue(err.message);
    }
  }
);

export default signupThunk;
