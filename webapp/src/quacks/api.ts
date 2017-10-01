
interface User {
    id: number;
    username: string;
}

function fetchUsersAPI(): Promise<User[]> {
    return fetch('/users')
      .then(res => { 
        return res.json();
    });
}

export default {
    fetchUsersAPI
};
