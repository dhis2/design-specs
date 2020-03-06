import React from 'react';

  // Not sure whether to use a label prop,or just let the label be passed into the children? Or allow both?

const HeaderCell = props => (
  <th
    className={`
  header-default
  ${"right" in props && " header-right"}
  `}
  >
    <div class="header-content-wrap">
      <span class="header-cell-label">{props.label}</span>
      {props.children}
    </div>
  </th>
);

export default HeaderCell;
