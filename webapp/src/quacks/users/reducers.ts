import { 
  FETCH_USERS_HAS_STARTED, 
  FETCH_USERS_WAS_SUCCESSFUL,
  FETCH_USERS_HAS_ERRORED,
  FetchUsersHasStartedAction,
  FetchUsersWasSuccessfulAction,
  FetchUsersHasErroredAction
 } from './actions';

export interface UserState {
  users: string[];
}

type FetchUsersAction = 
  FetchUsersHasStartedAction | 
  FetchUsersWasSuccessfulAction |
  FetchUsersHasErroredAction;

// Reducer
function userReducer(state: UserState = { users: [] }, action: FetchUsersAction) {
  switch (action.type) {
    // // do reducer stuff
    case FETCH_USERS_HAS_STARTED:
      return {
        ...state
      };
    case FETCH_USERS_HAS_ERRORED:
      return {
        ...state
      };
    case FETCH_USERS_WAS_SUCCESSFUL:
      return {
        ...state,
        users: action.payload
      };
    default: return {
        ...state,
        users: [
          { 
            id: 1, 
            firstName: 'Firstname',
            lastName: 'Lastname'
          }
        ]
      }; 
  }
}

export default userReducer;
