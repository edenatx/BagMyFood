import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { userReducer } from './users';

export default combineReducers({
  routing: routerReducer,
  users: userReducer
});