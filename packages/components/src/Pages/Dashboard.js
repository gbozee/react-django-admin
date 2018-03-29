import React, { Component } from "react";
import { AppModule, Page, SiteContent } from "./utils";
import "../styles/css/dashboard.css";

class Dashboard extends Component {
  render() {
    return <Page Link={this.props.Link} className="dashboard" bread_crumb={false}>
        <SiteContent headerText="Site administration">
          <div id="content-main">
            {this.props.apps.map((app, index) => (
              <AppModule key={index} Link={this.props.Link} {...app} />
            ))}
          </div>
        </SiteContent>
        <div id="footer" />
      </Page>;
  }
}

export default Dashboard;
