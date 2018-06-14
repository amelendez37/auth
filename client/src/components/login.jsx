import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
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

    this.handleLoginClick = this.handleLoginClick.bind(this);
  }
    
  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleLoginClick(username, password) {
    axios.get(`http://localhost:3000/auth/login/${username}/${password}`)
         .then(res => {
           console.log('SUCCESS HANDLER LOG', res.status)
           if (res.status === 201) {
             // redirect to home
           }
         })
         .catch(err => {
           console.log('ERROR HANDLER LOG', err);
           // if status is a 403
           // render invalid username or password message
         });
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
        <button className="btn auth-btn orange" onClick={() => this.handleLoginClick(this.state.username, this.state.password)}>LOGIN</button>
      </div>
    );
  }
}

export default Login;