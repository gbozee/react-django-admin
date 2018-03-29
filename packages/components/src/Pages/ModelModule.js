import React from 'react'

export const ModelModule = ({ app, path, name,Link }) => {
  const url = `/${app}/${path}/`;
  return (
    <tr class="model-group">
      <th scope="row">
        <Link to={url}>{name}</Link>
      </th>
      <td>
        <Link to={`${url}add/`} className="addlink">
          Add
        </Link>
      </td>
      <td>
        <Link to={url} className="changelink">
          Change
        </Link>
      </td>
    </tr>
  );
};