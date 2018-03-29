import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button } from "../src/Button";
import App from "../src/App";
import Router from "react-router-dom/HashRouter";
// import "../src/styles/css/base.css";
import Dashboard from "../src/Pages/Dashboard";
import Modellist from "../src/Pages/Modellist";
import Changelist from "../src/Pages/Changelist";
import LinkFilterGroup from "../src/Pages/Changelist/LinkFilterGroup";
const state = {
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
const Link = ({ to, children, className }) => (
  <a className={className} href={to}>
    {children}
  </a>
);
storiesOf("Django Admin React", module)
  .add("Dashboard", () => <Dashboard Link={Link} apps={state.apps} />)
  .add("ModelList", () => <Modellist Link={Link} app={state.apps[0]} />)
  .add("ChangeList", () => (
    <Router>
      <Changelist Link={Link} LinkFilterGroup={LinkFilterGroup} />
    </Router>
  ));
