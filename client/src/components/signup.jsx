import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

const textFieldStyles = {
  style: { 
    width: '23vw',
  },
  borderColor: {
    borderColor: '#FFF'
  },
  color: {
    color: '#fff'
  }
};

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSignupClick() {
    // make post request to server
  }

  render() {
    return (
      <div className="center">
        <TextField
         style={textFieldStyles.style}
         underlineFocusStyle={textFieldStyles.borderColor}
         floatingLabelStyle={textFieldStyles.color}
         inputStyle={textFieldStyles.color}
         floatingLabelText="USERNAME"
         floatingLabelFixed={true}
         name="username"
         onChange={(e) => this.handleInputChange(e)}
        />
        <TextField
         style={textFieldStyles.style}
         underlineFocusStyle={textFieldStyles.borderColor}
         floatingLabelStyle={textFieldStyles.color}
         inputStyle={textFieldStyles.color}
         floatingLabelText="PASSWORD"
         floatingLabelFixed={true}
         name="password"
         onChange={(e) => this.handleInputChange(e)}
         className="password"
         type="password"
        />
        <button className="btn signup-btn orange" onClick={this.handleSignupClick}>SIGN UP</button>
      </div>
    );
  }
}

export default Signup;