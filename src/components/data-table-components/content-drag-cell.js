import React from "react";
import { DragHandle } from "./dataTableIcons.js";

const DragCell = props => (
  <td class="cell-leading-icon cell-drag-handle">
    <DragHandle />
  </td>
);

export default DragCell;
