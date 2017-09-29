import * as React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

describe('AppContainer', () => {
  const storeFake = (state) => {
    return {
      default: () => undefined,
      subscribe: () => undefined,
      dispatch: () => undefined,
      getState: () => { 
        return { ...state };
      }
    };
  };
  
  const users = { id: '1', username: 'foobar'};
  
  const fakeState = {
    users: {
      users: [users]
    }
  };
  const fakeFetch = () => undefined;
  let store, wrapper;

  beforeEach(() => {
    const listOfUsers = [users];
    
    store = storeFake(fakeState);
    wrapper = mount(
      <Provider store={storeFake(fakeState)}>
          <App users={listOfUsers} fetchUsers={fakeFetch} />
      </Provider>
    );
  });

  it('renders without crashing', () => {
    expect(wrapper.find(App).length).toEqual(1);
  });
});
