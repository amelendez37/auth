import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
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
      password: '',
      authorized: false,
      errorMessage: ''
    };

    this.handleSignupClick = this.handleSignupClick.bind(this);
  }

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async handleSignupClick() {
    let payload = {
      username: this.state.username,
      password: this.state.password
    }
    let data = await axios.post('http://localhost:3000/auth/signup', payload);
    if (data.status === 201) {
      this.setState({ authorized: true });
    } else {
      // user already exists error
      this.setState({ errorMessage: 'User already exists' });
    }
  }

  render() {
    return (
      this.state.authorized ? 
        <Redirect to="/home"/>
        :
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
          <button className="btn auth-btn orange" onClick={this.handleSignupClick}>SIGN UP</button>
          {
            this.state.errorMessage ?
              <p className="error-message">{this.state.errorMessage}</p>
              :
              null
          }
        </div>
    );
  }
}

export default Signup;