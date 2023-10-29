import { createSlice } from '@reduxjs/toolkit';
import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = [];

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setAlert: (state, action) => {
      state.push(action.payload);
    },
    removeAlert: (state, action) => {
      const alertId = action.payload;
      return state.filter((alert) => alert.id !== alertId);
    }
  }
});

export const { setAlert, removeAlert } = alertSlice.actions;

export default alertSlice.reducer;
