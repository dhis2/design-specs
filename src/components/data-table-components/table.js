import React from 'react';
import cx from 'classnames';

const Table = ({ bordered, children, large }) => (
  <table
    className={cx('data-table', {
      bordered,
      large,
    })}
  >
    {children}
  </table>
);

export default Table;
