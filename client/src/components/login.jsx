import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

const textFieldStyles = {
  style: { 
    width: '23vw'
  },
  borderColor: {
    borderColor: '#FFF'
  },
  color: {
    color: '#fff'
  }
};

class Login extends Component {
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

  handleLoginClick() {
    // make get request to server
  }

  render() {
    return (
      <div className="center login">
        <TextField
         style={textFieldStyles.style}
         underlineFocusStyle={textFieldStyles.borderColor}
         floatingLabelStyle={textFieldStyles.color}
         inputStyle={textFieldStyles.color}
         floatingLabelText="USERNAME"
         floatingLabelFixed={true}
         name="username"
         onChange={(e) => this.handleInputChange(e)}
         className="username"
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
        <button className="btn auth-btn orange" onClick={this.handleLoginClick}>LOGIN</button>
      </div>
    );
  }
}

export default Login;