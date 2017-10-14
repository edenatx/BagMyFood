import * as React from 'react';
import { Button, Icon } from 'react-materialize';

import './Header.css';

interface HeaderProps {
  firstName: String;
  lastName: String;
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
            {'Welcome ' + this.props.firstName + ' ' + this.props.lastName}
          </div>
          <div className="menu-buttons-container">
            <Button waves="light" className="buttons">
              My Account
            </Button>
            <Button waves="light" className="buttons">
              <Icon left={true}>shopping_cart</Icon>
              My Cart
            </Button>
          </div>
      </div>
    );
  }
}
