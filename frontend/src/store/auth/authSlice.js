import { createSlice } from "@reduxjs/toolkit";
import loginThunk from "./act/actLogin";
import signupThunk from "./act/actSignup";
import { logout as logoutThunk } from "./act/actLogout";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signupSuccess: (state) => {
      state.isAuthenticated = false;
      state.isLoading = true;
    },
    signupFail: (state) => {
      localStorage.removeItem("token");
      state.token = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsAuthenticated: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.isAuthenticated = action.payload;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        localStorage.setItem("token", action.payload.access);
        state.isAuthenticated = true;
        state.isLoading = false;
        state.token = action.payload.access;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.rejected, (state) => {
        localStorage.removeItem("token");
        state.token = null;
        state.isAuthenticated = false;
        state.isLoading = false;
      })
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
      });
  },
});

//Actions:
export const login = loginThunk;
export const signup = signupThunk;
export const logout = logoutThunk;
export const { signupSuccess, signupFail, setLoading, setIsAuthenticated } =
  authSlice.actions;

//Reducer
export default authSlice.reducer;

//Selectors:
export const tokenSelector = (state) => state.auth.token;
export const isLoadingSelector = (state) => state.auth.isLoading;
export const isAuthenticatedSelector = (state) => state.auth.isAuthenticated;
