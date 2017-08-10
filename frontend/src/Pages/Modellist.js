//@flow
import React from "react";
import { Page, SiteContent, AppModule } from "./utils";

const Modellist = ({app}) => {
  return (
    <Page
      className="dashboard app-auth"
      urls={[{ text: app.verbose_name }]}
    >
      <SiteContent headerText={`${app.verbose_name} administration`}>
        <div id="content-main">
          <AppModule {...app} />
        </div>
      </SiteContent>
    </Page>
  );
};
export default Modellist;
