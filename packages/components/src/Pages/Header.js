import React from "react";

export const Header = ({ Link }) => {
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
