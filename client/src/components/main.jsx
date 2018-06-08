import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <p className="welcome">Welcome</p>
        <button className="btn signup">SIGN UP</button>
        <button className="btn login">LOGIN</button>
      </div>
    );
  }
}

export default Main;