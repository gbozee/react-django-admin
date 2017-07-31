import React, { Component } from 'react';
import Dashboard from './Pages/Dashboard'
import ChangeList from './Pages/Changelist'
import PasswordChange from './Pages/PasswordChange'
import Router from 'react-router-dom/BrowserRouter'
import Route from 'react-router-dom/Route'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Dashboard} />
          <Route path="/:app/:model/" component={ChangeList} />
          <Route path="/password_change" component={PasswordChange} />
          <Route path="/logout" component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
