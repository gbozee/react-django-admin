import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div id="header">
      <div id="branding">
        <h1 id="site-name">
          <a href="/admin/">Django administration</a>
        </h1>
      </div>
      <div id="user-tools">
        Welcome,
        <strong> biola </strong>.
        <Link to="/">View site</Link> /
        <Link to="/password_change"> Change password</Link> /
        <Link to="/logout"> Log out </Link>
      </div>
    </div>
  );
};
const BreadCrumb = ({ urls }) => {
  return (
    <div className="breadcrumbs">
      <Link to="/">Home </Link>

      {urls.map((value, index) => {
        return (
          <span>
            {index !== urls.length - 1
              ? <span>
                  &rsaquo;<Link to={`${value.url}`}> {value.text} </Link>
                </span>
              : <span>
                  &rsaquo; {value.text}
                </span>}
          </span>
        );
      })}
    </div>
  );
};
export const SiteContent = ({ addButton = false, children, headerText }) => {
  return (
    <div id="content" className="flex">
      <h1>
        {headerText}
      </h1>
      {addButton
        ? <ul className="object-tools">
            <li>
              <a href="/admin/auth/user/add/" className="addlink">
                Add user{" "}
              </a>
            </li>
          </ul>
        : null}
      <div className="module filtered" id="changelist">
        {children}
      </div>
    </div>
  );
};
const ModelModule = ({ app, path, name }) => {
  const url = `/${app}/${path}/`
  return (
    <tr class="model-group">
      <th scope="row"><Link to={url}>{name}</Link></th>
      <td><Link to={`${url}add/`} className="addlink">Add</Link></td>
      <td><Link to={url} className="changelink">Change</Link></td>
    </tr>

  )
}
export const AppModule = ({ verbose_name, app, modules }) => {
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
export const Page = ({ children, urls, className }) => {
  return (
    <div className={className}>
      <div id="container">
        <Header />
        <BreadCrumb urls={urls} />
        {children}
        <div id="footer" />
      </div>
    </div>
  );
};
