import React from "react";
export const BreadCrumb = ({ urls, Link }) => {
  return (
    <div className="breadcrumbs">
      <Link to="/">Home </Link>

      {urls.map((value, index) => {
        return (
          <span>
            {index !== urls.length - 1 ? (
              <span>
                &rsaquo;<Link to={`${value.url}`}> {value.text} </Link>
              </span>
            ) : (
              <span>&rsaquo; {value.text}</span>
            )}
          </span>
        );
      })}
    </div>
  );
};
