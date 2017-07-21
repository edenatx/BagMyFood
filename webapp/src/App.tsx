import * as React from 'react';
import './App.css';

interface User {
  id: string;
  username: string;
}

class App extends React.Component<{}, {}> {
  users: Array<User> = [];
  state = {users: this.users};

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({users}));
  }

  render() {
    const foo = this.state.users.map( user => {
      return <div key={user.id}>{user.username}</div>;
    });

    return (
      <div className="App">
       <h1>Users</h1>
       {foo}
      </div>
    );
  }
}

export default App;
