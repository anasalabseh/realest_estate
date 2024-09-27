import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import alertSlice from "./alert/alertSlice";

const store = configureStore({
  reducer: { auth: authSlice, alert: alertSlice },
});

export default store;
