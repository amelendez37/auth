import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
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

export default Main;