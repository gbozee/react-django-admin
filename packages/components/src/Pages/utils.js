import React from "react";
import { Link } from "react-router-dom";
import { ModelModule } from "./ModelModule";
import { BreadCrumb } from "./BreadCrumb";
import { Header } from "./Header";

export const SiteContent = ({ addButton = false, children, headerText }) => {
  return (
    <div id="content" className="flex">
      <h1>{headerText}</h1>
      {addButton ? (
        <ul className="object-tools">
          <li>
            <a href="/admin/auth/user/add/" className="addlink">
              Add user{" "}
            </a>
          </li>
        </ul>
      ) : null}
      <div className="module filtered" id="changelist">
        {children}
      </div>
    </div>
  );
};

export const AppModule = ({ verbose_name, app, modules, ...rest }) => {
  return (
    <div className="app-auth module">
      <table>
        <caption>
          <a
            href={`/${app}/"`}
            className="section"
            title={`Models in the ${verbose_name} application`}
          >
            {verbose_name}
          </a>
        </caption>
        {modules.map((path, index) => (
          <ModelModule Link={rest.Link} key={index} app={app} {...path} />
        ))}
      </table>
    </div>
  );
};

export const Page = ({
  children,
  urls,
  className,
  bread_crumb = true,
  ...rest
}) => {
  return (
    <div className={className}>
      <div id="container">
        <Header Link={rest.Link} />
        {bread_crumb ? <BreadCrumb Link={rest.Link} urls={urls} /> : null}
        {children}
        <div id="footer" />
      </div>
    </div>
  );
};
