import api from '../api';
import { userActionCreators } from './actions';

const fetchUsers = () => (dispatch) => {
    dispatch(userActionCreators.fetchUsersStarted());

    api.fetchUsersAPI().then((response) => {
        dispatch(userActionCreators.fetchUsersSuccessful(response));
    })
    .catch((error) => {
        dispatch(userActionCreators.fetchUsersErrored(error));
    });
};

export default {
    fetchUsers
};
