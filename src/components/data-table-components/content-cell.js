import React from "react";
import propTypes from "@dhis2/prop-types";
import cx from "classnames";

const ContentCell = ({
  editable,
  muted,
  valid,
  error,
  right,
  colspan,
  rowspan,
  children
}) => (
  <td
    className={cx("cell-default", {
      editable,
      muted,
      valid,
      error,
      right
    })}
    colspan={colspan}
    rowspan={rowspan}
  >
    {children}
    {editable && <Edit />}
  </td>
);

ContentCell.defaultProps = {
  colspan: 1,
  rowspan: 1
};

const Edit = () => (
  <span class="inline-edit">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <g fill="none" fill-rule="evenodd">
        <rect width="16" height="16" />
        <path
          fill="#4A5768"
          fill-rule="nonzero"
          d="M10,2 L14,6 L6,14 L2,14 L2,10 L10,2 Z M10,4.829 L4,10.828 L5.17,12 L11.171,6 L10,4.829 Z"
        />
      </g>
    </svg>
    <style jsx>
      {`
        .inline-edit {
          display: inline-block;
          margin-left: 8px;
        }
      `}
    </style>
  </span>
);

export default ContentCell;
