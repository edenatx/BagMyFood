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
    /*eslint-disable*/
    fetch('/users')
      .then(res => res.json())
      .then(users => { 
        this.setState({users});
      });
    /*eslint-enable*/
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
//  <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.tsx</code> and save to reload.
//         </p>

export default App;
