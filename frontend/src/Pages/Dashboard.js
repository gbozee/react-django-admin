import React, { Component } from 'react';
import {AppModule} from './utils'
import './styles/css/dashboard.css';

const Header = () => {
  return (
    <div id="header">
      <div id="branding">
        <h1 id="site-name">
          <a href="/admin/">Django administration</a></h1>
      </div>
      <div id="user-tools">
        Welcome,
                <strong>biola</strong>.
                <a href="/">View site</a> /
                <a href="/admin/password_change/">Change password</a> /
                <a href="/admin/logout/">Log out</a>
      </div>
    </div>
  )
}


const SiteContent = ({apps}) => {
  return (
    <div id="content" className="colMS">
      <h1>Site administration</h1>
      <div id="content-main">
        <AppModule {...apps} />
      </div>
      <div id="content-related">
        <div className="module" id="recent-actions-module">
          <h2>Recent actions</h2>
          <h3>My actions</h3>
          <p>None available</p>
        </div>
      </div>

      <br className="clear" />
    </div>
  )
}
class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div id="container">
          <Header />
          <SiteContent apps={{
          verbose_name: "Authentication and Authorization",
          app: "auth",
          modules: [
            { name: "Groups", path: "group" },
            { name: "Users", path: "user" }
          ]
        }}/>
          <div id="footer"></div>
        </div>
      </div>

    );
  }
}

export default Dashboard;
