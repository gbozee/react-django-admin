import React, { Component } from 'react';
import Dashboard from './Dashboard'
import ChangeList from './Changelist'
import Router from 'react-router-dom/BrowserRouter'
import Route from 'react-router-dom/Route'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={ChangeList} />
          <Route path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
