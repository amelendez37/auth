import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
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
   let data = await axios.get(`http://localhost:3000/auth/login/${username}/${password}`);
   if (data.status === 201) {
     this.props.authUser(username);
   } else {
     this.setState({ errorMessage: 'Invalid username or password' });
   }
  }

  render() {
    return (
      this.props.authorized ?
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
    authorized: state.auth.user.authorized,
    username: state.auth.user.username
  }
};

export default connect(mapStateToProps, { authUser })(Login);