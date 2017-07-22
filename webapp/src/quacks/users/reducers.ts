import { USER_ACTIONS_TYPES } from './actions';

// Reducer
function userReducer(state = { users: [] }, action = { type: ''}) {
  switch (action.type) {
    // // do reducer stuff
    case USER_ACTIONS_TYPES.FETCH_USERS_HAS_STARTED:
      return {
        count: 1,
        ...state
      };
    case USER_ACTIONS_TYPES.FETCH_USERS_HAS_ERRORED:
      return {
        count: 1,
        ...state
      };
    case USER_ACTIONS_TYPES.FETCH_USERS_WAS_SUCCESSFUL:
      return {
        count: 1,
        ...state
      };
    default: return {
        ...state,
        users: [
          {id: 1, username: 'foo'}
        ]
      };  
  }
}

export default userReducer;
