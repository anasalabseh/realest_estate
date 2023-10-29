import { createSlice } from '@reduxjs/toolkit';
import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      const { access } = action.payload;
      localStorage.setItem('token', access);
      state.isAuthenticated = true;
      state.loading = false;
      state.token = access;
    },
    signupSuccess: (state) => {
      state.isAuthenticated = false;
      state.loading = true;
    },
    signupFail: (state) => {
      state.isAuthenticated = false;
      state.loading = false;
    },
    loginFail: (state) => {
      localStorage.removeItem('token');
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
    },
    logout: (state) => {
      localStorage.removeItem('token');
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
    }
  }
});

export const {
  loginSuccess,
  signupSuccess,
  signupFail,
  loginFail,
  logout
} = authSlice.actions;

export default authSlice.reducer;
