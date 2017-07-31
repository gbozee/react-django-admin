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
const ModelModule = ({ app, path, name }) => {
  const url = `/${app}/${path}/`
  return (
    <tr class="model-group">
      <th scope="row"><a href={url}>{name}</a></th>
      <td><a href={`${url}add/`} className="addlink">Add</a></td>
      <td><a href={url} className="changelink">Change</a></td>
    </tr>

  )
}
const AppModule = ({ verbose_name, app, modules }) => {
  return (
    <div className="app-auth module">
      <table>
        <caption>
          <a href={`/${app}/"`} className="section" title={`Models in the ${verbose_name} application`}>{verbose_name}</a>
        </caption>
        {modules.map((path, index) =>
          <ModelModule key={index} app={app} {...path } />)}
      </table>
    </div>
  )
}
const SiteContent = () => {
  return (
    <div id="content" className="colMS">
      <h1>Site administration</h1>
      <div id="content-main">
        <AppModule {...{
          verbose_name: "Authentication and Authorization",
          modules: [
            { name: "Groups", path: "group" },
            { name: "Users", path: "user" }
          ]
        }} />
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
