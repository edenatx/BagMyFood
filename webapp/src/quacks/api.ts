
interface User {
    id: number;
    firstName: string;
    lastName: string;
}

function fetchUsersAPI(): Promise<User[]> {
    return fetch('/api/user')
      .then(res => { 
        return res.json();
    });
}

export default {
    fetchUsersAPI
};
