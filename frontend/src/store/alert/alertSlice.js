import { createSlice } from "@reduxjs/toolkit";
import setAlertThunk from "./act/actAddAlert";

const initialState = [];

const alertSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    addAlert: (state, action) => {
      state.push(action.payload);
    },
    removeAlert: (state, action) => {
      return state.filter((alert) => alert.id !== action.payload);
    },
  },
});

export default alertSlice.reducer;

export const alertsSelector = (state) => state.alert;

//actions
export const { addAlert, removeAlert } = alertSlice.actions;
export const setAlert = setAlertThunk;
