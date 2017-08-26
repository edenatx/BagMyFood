import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { userReducer } from './users';

/**
 * This is currently a JS file because the redux type definition is broken. 
 * TODO: Return to typescript file once the definition is fixed by Redux package
 */
export default combineReducers({
  routing: routerReducer,
  users: userReducer
});