import React from 'react';

const ContentCell = props => (
  <td
    className={`
    cell-default
    ${"bordered" in props && " cell-bordered"}
    ${"editable" in props && " cell-editable"}
    ${"muted" in props && " content-muted"}
    ${"valid" in props && " content-valid"}
    ${"error" in props && " content-error"}
    ${"right" in props && " cell-right"}
  `}
  >
    {props.children}
  </td>
);

export default ContentCell;
