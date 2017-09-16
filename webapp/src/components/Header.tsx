import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { ButtonToolbar, Button } from 'react-bootstrap';
import { Dispatch } from 'react-redux';

import './Header.css';

interface StateProps  extends RouteComponentProps<any> {
}

interface DispatchProps {
}

type HeaderProps = StateProps & DispatchProps;

function mapStateToProps(state: any) {
  return {};
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {};
}

@connect<StateProps, DispatchProps, any>(mapStateToProps, mapDispatchToProps)
class Header extends React.Component<HeaderProps, {}> {

  componentWillMount() {
    // no op
  };

  render() {

    return (
      <div className="header-container">
          <div className="main-menu-container">
                {'Bag My Food'}
          </div>
          <div className="accounts-cart-container">
              <ButtonToolbar className="menu-buttons">
                <Button bsStyle="primary">My Account</Button>
                <Button bsStyle="info">My Cart</Button>
              </ButtonToolbar>
          </div>
      </div>
    );
  }
}

export default Header;
