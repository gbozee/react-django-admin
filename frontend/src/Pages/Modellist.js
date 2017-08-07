import React from "react";
import { Page, SiteContent, AppModule } from "./utils";

const Modellist = () => {
  return (
    <Page
      className="dashboard app-auth"
      urls={[{ text: "Authentication and Authorization" }]}
    >
      <SiteContent headerText="Authentication and Authorization administration">
        <div id="content-main">
          <AppModule
            {...{
              verbose_name: "Authentication and Authorization",
              app: "auth",
              modules: [
                { name: "Groups", path: "group" },
                { name: "Users", path: "user" }
              ]
            }}
          />
        </div>
      </SiteContent>
    </Page>
  );
};
export default Modellist;
