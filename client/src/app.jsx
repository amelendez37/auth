import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import LandingPage from './components/landingPage.jsx';
import Signup from './components/signup.jsx';
import Login from './components/login.jsx';
import Home from './components/home.jsx';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <main>
          <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route path='/signup' render={props => <Signup handleInputChange={this.handleInputChange}/>}/>
            <Route path='/login' render={props => <Login handleInputChange={this.handleInputChange}/>}/>
            <Route path='/home' component={Home}/>
          </Switch>
        </main>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(App);