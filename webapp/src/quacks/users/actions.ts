import { AnyAction } from 'redux';

// Action Types
const FETCH_USERS_HAS_STARTED = 'FETCH_USERS_HAS_STARTED';
const FETCH_USERS_HAS_ERRORED = 'FETCH_USERS_HAS_ERRORED';
const FETCH_USERS_WAS_SUCCESSFUL = 'FETCH_USERS_WAS_SUCCESSFUL';

export const USER_ACTIONS_TYPES = {
    FETCH_USERS_HAS_ERRORED,
    FETCH_USERS_HAS_STARTED,
    FETCH_USERS_WAS_SUCCESSFUL
};

// Actions Creators
export const userActionCreators = {
    fetchUsersErrored: (error: object) => ({
        type: FETCH_USERS_HAS_ERRORED,
        payload: error
    } as AnyAction),
    fetchUsersStarted: () => ({
        type: FETCH_USERS_HAS_STARTED
    } as AnyAction),
    fetchUsersSuccessful: (response: object) => ({
        type: FETCH_USERS_WAS_SUCCESSFUL,
        payload: response
    } as AnyAction)        
};

export default {
    userActionCreators
};
