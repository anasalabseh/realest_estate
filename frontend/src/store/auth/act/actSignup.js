import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../services/axios";
import { signupSucess, signupFail, signin, loginFail } from "../authSlice";
import { setAlert } from "../../alert/alertSlice";

const signupThunk = createAsyncThunk(
  "auth/signup",
  async (credentials, { dispatch }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { name, email, password, password2 } = credentials;
    const body = JSON.stringify({ name, email, password, password2 });

    try {
      const response = await api.post("/api/accounts/signup", body, config);
      dispatch(signupSucess(response.data));
      dispatch(signin({ email, password }));
    } catch (err) {
      dispatch(signupFail());
      dispatch(setAlert({ msg: "Error Authenticating", alertType: "error" }));
    }
  }
);

export default signupThunk;
