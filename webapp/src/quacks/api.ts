
// interface Users {
//     id: number,
//     username: string
// }

// interface UsersResponse {

// }

function fetchUsersAPI(): any {
    return fetch('/users')
      .then(res => { 
        return res.json();
    });
}

export default {
    fetchUsersAPI
};
