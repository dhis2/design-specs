import React from 'react';
import cx from 'classnames';
import { IconEdit16 } from '@dhis2/ui-icons';

const ContentCell = ({
  editable,
  muted,
  valid,
  error,
  right,
  colspan,
  rowspan,
  children,
}) => (
  <td
    className={cx('cell-default', {
      editable,
      muted,
      valid,
      error,
      right,
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
  rowspan: 1,
};

const Edit = () => (
  <span class="inline-edit">
    <IconEdit16 color="var(--colors-grey700)" />
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
