import { createSlice } from "@reduxjs/toolkit";
import setAlertThunk from "./act/actAddAlert";

const initialState = [];

export const setAlert = setAlertThunk;

const alertSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    addAlert: (state, action) => {
      state.push(action.payload);
    },
    removeAlert: (state, action) => {
      return state.filter((alert) => alert.id !== action.payload.id);
    },
  },
});

export const selectAllAlerts = (state) => state.alerts;
export const { addAlert, removeAlert } = alertSlice.actions;
export default alertSlice.reducer;
