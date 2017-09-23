import * as React from 'react';
import { Button } from 'react-materialize';

import './Header.css';

interface HeaderProps {
  username: String;
}

export default class Header extends React.Component<HeaderProps, {}> {
  constructor(props: HeaderProps) {
    super(props);
  }

  render() {
    return (
      <div className="header-container">
          <div className="main-menu-container">
            {'Bag My Food'}
          </div>
          <div className="name-container">
            {'Welcome ' + this.props.username}
          </div>
          <div className="menu-buttons-container">
            <Button waves="light" className="buttons">My Account</Button>
            <Button waves="light" className="buttons">My Cart</Button>
          </div>
      </div>
    );
  }
}
