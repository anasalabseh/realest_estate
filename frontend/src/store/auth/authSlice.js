import { createSlice } from "@reduxjs/toolkit";
import signinThunk from "./act/actSignin";
import signupThunk from "./act/actSignup";
import logoutThunk from "./act/actLogout";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
};

// export const logout = logoutThunk;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      localStorage.setItem("token", action.payload.access);
      state.isAuthenticated = true;
      state.isLoading = false;
      state.token = action.payload.access;
    },
    signupSucess: (state) => {
      state.isAuthenticated = false;
      state.isLoading = true;
    },
    logoutDone: (state) => {
      localStorage.removeItem("token");
      state.token = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    },
    loginFail: (state) => {
      localStorage.removeItem("token");
      state.token = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    },
    signupFail: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    },
  },
});

export const signin = signinThunk;
export const signup = signupThunk;
export default authSlice.reducer;
export const { loginSuccess, signupSucess, logoutDone, loginFail, signupFail } =
  authSlice.actions;
