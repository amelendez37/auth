import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';

import Main from './components/main.jsx';
import Signup from './components/signup.jsx';
import Login from './components/login.jsx';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Main}/>
        <Route exact path='/signup' render={props => <Signup handleInputChange={this.handleInputChange}/>}/>
        <Route exact path='/login' render={props => <Login handleInputChange={this.handleInputChange}/>}/>
      </Switch>
    );
  }
}

export default App;