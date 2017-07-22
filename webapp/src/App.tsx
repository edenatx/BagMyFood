import * as React from 'react';
import { Grid, Button, Jumbotron } from 'react-bootstrap';
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
       <Jumbotron>
          <Grid>
            <h1>Welcome to React</h1>
            <p>
              <Button
                bsStyle="success"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank"
              >
                View React Bootstrap Docs
              </Button>
            </p>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
