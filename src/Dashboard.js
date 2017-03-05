import React, { Component } from 'react';
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
const ModelModule = ({ name }) => {
  return (
    <tr class="model-group">
      <th scope="row"><a href="/admin/auth/group/">{name}</a></th>
      <td><a href="/admin/auth/group/add/" className="addlink">Add</a></td>
      <td><a href="/admin/auth/group/" className="changelink">Change</a></td>
    </tr>

  )
}
const AppModule = () => {
  return (
    <div className="app-auth module">
      <table>
        <caption>
          <a href="/admin/auth/" className="section" title="Models in the Authentication and Authorization application">Authentication and Authorization</a>
        </caption>
        <ModelModule name="Groups" />
        <ModelModule name="Users" />
      </table>
    </div>
  )
}
const SiteContent = () => {
  return (
    <div id="content" className="colMS">
      <h1>Site administration</h1>
      <div id="content-main">
        <AppModule />
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
class App extends Component {
  render() {
    return (
      <div className="dashboard">
        <div id="container">
          <Header />
          <SiteContent />
          <div id="footer"></div>
        </div>
      </div>

    );
  }
}

export default App;
