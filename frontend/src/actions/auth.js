import { v4 as uuid } from 'uuid';
import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from './types';

export const signupSuccess = () => (dispatch) => {
  dispatch({
    type: SIGNUP_SUCCESS,
  });
};

export const signupFail = () => (dispatch) => {
  dispatch({
    type: SIGNUP_FAIL,
  });
};

export const loginSuccess = (access) => (dispatch) => {
  localStorage.setItem('token', access);
  dispatch({
    type: LOGIN_SUCCESS,
    payload: { access },
  });
};

export const loginFail = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({
    type: LOGIN_FAIL,
  });
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({
    type: LOGOUT,
  });
};
