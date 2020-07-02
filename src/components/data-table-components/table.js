import React from "react";
import propTypes from "@dhis2/prop-types";
import cx from "classnames";

const Table = ({ bordered, children, large }) => (
  <table
    className={cx("data-table", {
      bordered,
      large
    })}
  >
    {children}
  </table>
);

export default Table;
