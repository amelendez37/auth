import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import passport from 'passport';
import axios from 'axios';
import TextField from 'material-ui/TextField';

import { authUser } from '../actions';

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
      password: '',
      errorMessage: ''
    };
  }
    
  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async handleLoginClick(username, password) {
    const payload = {
      username: username,
      password: password
    }
    try {
      const { data } = await axios.post('http://localhost:3000/auth/login', payload);
      window.localStorage.token = data.token; // store jwt in local storage
      this.props.authUser(data.username);
    } catch (err) {
      this.setState({ errorMessage: 'Invalid username or password' });
    }
  }

  render() {
    return (
      this.props.username ?
        <Redirect to="/home"/>
        :
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
            <button className="btn auth-btn orange" onClick={() => this.handleLoginClick(this.state.username, this.state.password)}>LOGIN</button>
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

const mapStateToProps = (state) => {
  return {
    username: state.auth.user.username
  }
};

export default connect(mapStateToProps, { authUser })(Login);