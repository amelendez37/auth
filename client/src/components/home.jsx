import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    return(
      <div className="center">
        <p className="welcome">Hello {this.props.username}</p>
        <button className="btn orange">PROTECTED</button>
        <button className="btn orange">SIGN OUT</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.auth.user.username
  }
};

export default connect(mapStateToProps, null)(Home);