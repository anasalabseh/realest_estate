import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../services/axios";
import { setAlert } from "../../alert/alertSlice";
import { setLoading } from "../authSlice";

const loginThunk = createAsyncThunk(
  "auth/login",
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
      const response = await api.post("/api/token/", body, config);
      dispatch(
        setAlert({ msg: "Authenticated successfully", alertType: "success" })
      );
      return response.data;
    } catch (err) {
      dispatch(setLoading(false));
      dispatch(setAlert({ msg: "Error Authenticating", alertType: "error" }));
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export default loginThunk;
