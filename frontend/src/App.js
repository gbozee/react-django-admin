import React, { Component } from "react";
import Dashboard from "./Pages/Dashboard";
import ChangeList from "./Pages/Changelist";
import ChangeForm from './Pages/ChangeForm'
import ModelList from "./Pages/Modellist";
import PasswordChange from "./Pages/PasswordChange";
import Router from "react-router-dom/BrowserRouter";
import Route from "react-router-dom/Route";
import Switch from "react-router-dom/Switch";

class App extends Component {
  state = {
    apps: [
      {
        verbose_name: "Authentication and Authorization",
        app: "auth",
        modules: [
          { name: "Groups", path: "group" },
          { name: "Users", path: "user" }
        ]
      },
      {
        verbose_name: "Todos",
        app: "todos",
        modules: [{ name: "Todos", path: "todo" }]
      }
    ]
  };
  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={() => <Dashboard apps={this.state.apps} />}
          />
          <Route
            exact
            path="/:app"
            render={({ match: { params: { app } } }) => {
              const application = this.state.apps.find((ap, index) => ap.app === app);
              return <ModelList app={application} />;
            }}
          />
          <Route exact path="/:app/:model/" component={ChangeList} />
          <Route path="/:app/:model/:id/change/" component={ChangeForm} />
          <Route path="/password_change" component={PasswordChange} />
          <Route path="/logout" component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
