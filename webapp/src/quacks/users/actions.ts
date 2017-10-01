// Action Types
export const FETCH_USERS_HAS_STARTED = 'FETCH_USERS_HAS_STARTED';
export const FETCH_USERS_HAS_ERRORED = 'FETCH_USERS_HAS_ERRORED';
export const FETCH_USERS_WAS_SUCCESSFUL = 'FETCH_USERS_WAS_SUCCESSFUL';

export interface FetchUsersHasErroredAction {
    type: typeof FETCH_USERS_HAS_ERRORED;
    payload: object;
}

export interface FetchUsersHasStartedAction {
    type: typeof FETCH_USERS_HAS_STARTED;
}

export interface FetchUsersWasSuccessfulAction {
    type: typeof FETCH_USERS_WAS_SUCCESSFUL;
    payload: object;
}

// Actions Creators
export const userActionCreators = {
    fetchUsersErrored: (error: object): FetchUsersHasErroredAction => ({
        type: FETCH_USERS_HAS_ERRORED,
        payload: error
    }),
    fetchUsersStarted: (): FetchUsersHasStartedAction => ({
        type: FETCH_USERS_HAS_STARTED
    }),
    fetchUsersSuccessful: (response: object): FetchUsersWasSuccessfulAction => ({
        type: FETCH_USERS_WAS_SUCCESSFUL,
        payload: response
    })        
};

export default {
    userActionCreators
};
