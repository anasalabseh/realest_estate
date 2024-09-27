import { createAsyncThunk } from "@reduxjs/toolkit";
import { addAlert, removeAlert } from "../alertSlice";
import { nanoid } from "@reduxjs/toolkit";

const setAlertThunk = createAsyncThunk(
  "alerts/setAlert",
  async (alertDetails, { dispatch }) => {
    const id = nanoid();
    const { msg, alertType } = alertDetails;
    dispatch(addAlert({ msg, alertType, id }));
    return new Promise((resolve) => {
      // Remove the alert after a delay (e.g., 5 seconds)
      setTimeout(() => {
        dispatch(removeAlert(id));
        resolve(id); // Resolve the promise after removing the alert
      }, 5000); // Delay for 5 seconds or any desired duration
    });
  }
);

export default setAlertThunk;
