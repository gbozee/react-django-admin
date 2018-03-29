//@flow
import React from "react";
import { Page, SiteContent, AppModule } from "./utils";

const Modellist = ({ Link, app }) => {
  return (
    <Page
      Link={Link}
      className="dashboard app-auth"
      urls={[{ text: app.verbose_name }]}
    >
      <SiteContent headerText={`${app.verbose_name} administration`}>
        <div id="content-main">
          <AppModule Link={Link} {...app} />
        </div>
      </SiteContent>
    </Page>
  );
};
export default Modellist;
