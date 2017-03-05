import React, { Component } from 'react';
import Dashboard from './Dashboard'
import Router from 'react-router-dom/BrowserRouter'
import Route from 'react-router-dom/Route'

class App extends Component {
  render() {
    return (
      <Router>
        <Dashboard />
      </Router>
    );
  }
}

export default App;
