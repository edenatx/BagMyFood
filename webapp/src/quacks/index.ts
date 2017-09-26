import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { userReducer, UserState } from './users';

export default combineReducers({
  routing: routerReducer,
  users: userReducer
});

export interface ReduxState {
  users: UserState;
}
