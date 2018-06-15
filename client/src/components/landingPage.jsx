import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

class LandingPage extends Component {
  render() {
    return (
      this.props.authorized ? 
        <Redirect to="/home"/>
        :
        <div className="center">
          <p className="welcome">Welcome</p>
          <Link to="/signup">
            <button className="btn signup">SIGN UP</button>
          </Link>
          <Link to="/login">
            <button className="btn orange">LOGIN</button>
          </Link>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authorized: state.auth.user.authorized,
    username: state.auth.user.username
  }
};

export default connect(mapStateToProps, null)(LandingPage);