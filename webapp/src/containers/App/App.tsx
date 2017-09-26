import * as React from 'react';
import { connect } from 'react-redux';

import { default as Header } from '../../components/Header';
import { default as BigAds } from '../../components/BigAds';
import { Dispatch } from 'react-redux';
import { userQuacks } from '../../quacks/users';
import { ReduxState } from '../../quacks/index';

import './App.css';

interface User {
  id: string;
  username: string;
}

interface StateProps {
  users: Array<User>;
}

interface DispatchProps {
  fetchUsers();
}

type HomeProps = StateProps & DispatchProps;

function mapStateToProps(state: ReduxState) {
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

@connect<StateProps, DispatchProps, void>(mapStateToProps, mapDispatchToProps)
class App extends React.Component<HomeProps, {}> {

  componentWillMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div className="App">
       <Header username={this.props.users[0].username}/>
        <BigAds/>
      </div>
    );
  }
}

export default App;
