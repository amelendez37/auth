import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

import { authUser } from '../actions';

class LandingPage extends Component {
  async componentDidMount() {
    if (window.localStorage.token) { // check jwt
      try {
        const result = await axios.get(`http://localhost:3000/home`, {
          headers: {
            Authorization: window.localStorage.token
          }
        });
        if (result.data.token) {
          this.props.authUser(result.data.username);
        }
      } catch (err) {
        return; // jwt not valid
      }
    }
  }

  render() {
    return (
      this.props.username ? 
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

export default connect(mapStateToProps, { authUser })(LandingPage);