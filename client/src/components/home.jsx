import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { logoutUser } from '../actions';

class Home extends Component {
  constructor(props) {
    super(props);

    this.handleSignoutClick = this.handleSignoutClick.bind(this);
  }

  handleSignoutClick() {
    delete window.localStorage.token;
    this.props.logoutUser();
  }

  render() {
    return(
      this.props.username ?
        <div className="center">
          <p className="welcome">Hello {this.props.username}</p>
          <button className="btn orange" onClick={this.handleSignoutClick}>SIGN OUT</button>
        </div>
        :
        <Redirect to="/"/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.auth.user.username
  }
};

export default connect(mapStateToProps, { logoutUser })(Home);