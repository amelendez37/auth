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
        <Route exact path='/signup' component={Signup}/>
        <Route exact path='/login' component={Login}/>
      </Switch>
    );
  }
}

export default App;