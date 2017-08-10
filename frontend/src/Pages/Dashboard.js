import React, { Component } from "react";
import { AppModule, Page, SiteContent } from "./utils";
import "./styles/css/dashboard.css";

class Dashboard extends Component {
  render() {
    const apps = [
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
    ];
    return (
      <Page className="dashboard" bread_crumb={false}>
        <SiteContent headerText="Site administration">
          <div id="content-main">
            {apps.map((app,index)=>
            <AppModule key={index} {...app} />)}
          </div>
        </SiteContent>
        <div id="footer" />
      </Page>
    );
  }
}

export default Dashboard;
