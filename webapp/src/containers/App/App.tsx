import * as React from 'react';
import { connect } from 'react-redux';
import { Grid, Button, Jumbotron } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router-dom';

import { Dispatch } from 'react-redux';
import { userQuacks } from '../../quacks/users';

import './App.css';

interface User {
  id: string;
  username: string;
}

interface StateProps  extends RouteComponentProps<any> {
  users: Array<User>;
}

interface DispatchProps {
  fetchUsers();
}

type HomeProps = StateProps & DispatchProps;

function mapStateToProps(state: any) {
  return {
    users: state.users.users
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    fetchUsers() {
      dispatch(userQuacks.fetchUsers());
    }
  };
}

@connect<StateProps, DispatchProps, any>(mapStateToProps, mapDispatchToProps)
class App extends React.Component<HomeProps, {}> {

  componentWillMount() {
    this.props.fetchUsers();
  }

  render() {
    const foo = this.props.users.map( user => {
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
