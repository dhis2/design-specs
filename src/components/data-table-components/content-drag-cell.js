import React from 'react';
import { IconDragHandle24 } from '@dhis2/ui-icons';

const DragCell = (props) => (
  <td class="cell-leading-icon cell-drag-handle">
    <IconDragHandle24 color="var(--colors-grey700)" />
  </td>
);

export default DragCell;
