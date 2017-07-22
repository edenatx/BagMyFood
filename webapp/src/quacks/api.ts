
function fetchUsersAPI(): any {
    return fetch('/users')
      .then(res => res.json());
}

export default {
    fetchUsersAPI
};
