import React, { Component } from 'react';
import Dashboard from './Pages/Dashboard'
import ChangeList from './Pages/Changelist'
import ModelList from "./Pages/Modellist"
import PasswordChange from './Pages/PasswordChange'
import Router from 'react-router-dom/BrowserRouter'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/:app" component={ModelList} />
          <Route path="/:app/:model/" component={ChangeList} />
          <Route path="/password_change" component={PasswordChange} />
          <Route path="/logout" component={Dashboard} />
          
        </div>
      </Router>
    );
  }
}

export default App;
