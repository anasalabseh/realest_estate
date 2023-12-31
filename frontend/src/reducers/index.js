import { combineReducers } from 'redux';
import alertReducer from './alert';
import authReducer from './auth';

const rootReducer = combineReducers({
  alert: alertReducer,
  auth: authReducer
});

export default rootReducer;
