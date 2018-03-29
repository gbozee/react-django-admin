//@ts-check
import BaseAdmin from "./base";
import React from "react";
import { render } from "react-dom";
import "components/styles/css/base.css";
import Router from "react-router-dom/HashRouter";
import Route from "react-router-dom/Route";
import Link from "react-router-dom/Link";
import Switch from "react-router-dom/Switch";
import Dashboard from "components/Pages/Dashboard";
import Modellist from "components/Pages/Modellist";
import Changelist from "components/Pages/Changelist";
import ChangeForm from "components/Pages/ChangeForm";
import PasswordChange from "components/Pages/PasswordChange";
import LinkFilterGroup from "components/Pages/Changelist/LinkFilterGroup";

const RootComponent = ({ apps }) => (
  <Router>
    <div>
      <Route
        exact
        path="/"
        render={props => <Dashboard Link={Link} apps={apps} />}
      />
      <Route
        exact
        path="/:app"
        render={({ match: { params: { app } } }) => {
          const application = apps.find((ap, index) => ap.app === app);
          return <Modellist Link={Link} app={application} />;
        }}
      />
      <Route
        exact
        path="/:app/:model/"
        render={props => (
          <Changelist
            Link={Link}
            LinkFilterGroup={LinkFilterGroup}
            {...props}
          />
        )}
      />
      <Route path="/:app/:model/:id/change/" component={ChangeForm} />
      <Route path="/password_change" component={PasswordChange} />
      <Route path="/logout" component={Dashboard} />
    </div>
  </Router>
);

export class ReactAdmin extends BaseAdmin {
  buildAppTree() {
    return this.apps.map(app => {
      return {
        verbose_name: app.verbose_name,
        app: app.path,
        modules: app.models.map(model => ({
          name: `${model.displayName}s`,
          path: model.displayName.toLowerCase()
        }))
      };
    });
  }

  init(domNode) {
    let result = this.buildAppTree();
    return render(<RootComponent apps={result} />, domNode);
  }
}
