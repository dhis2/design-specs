import React from 'react';
import './dimension-list.css';
import {
  IconDimensionData16,
  IconDimensionOrgUnit16,
  IconClock16,
  IconDimensionCategoryOptionGroupset16,
  IconDimensionDataElementGroupset16,
  IconDimensionOrgUnitGroupset16,
  IconLock16,
  IconFilter16,
  IconMore16,
} from '@dhis2/ui-icons';

import { DevExample } from '../assets/DevExample.js';

const DimensionSidebar = (props) => (
  <div class="dimension-list">{props.children}</div>
);

const DimensionItem = (props) => (
  <div
    class={`
  dimension-item
  ${props.picked ? ' picked' : ''}
  ${props.disabled ? ' disabled' : ''}
  ${props.recommended ? ' recommended' : ''}
  ${props.dragOnly ? ' drag-only' : ''}
  `}
  >
    <div class="di-icon">{props.icon}</div>
    <div class="di-label">{props.children}</div>
    {props.locked ? (
      <div class="di-lock">
        <IconLock16 />
      </div>
    ) : (
      ''
    )}
    <div class="di-menu-trigger">
      <IconMore16 />
    </div>
  </div>
);
export default function specDimensionList() {
  return (
    <>
      <DevExample
        title="Dimension List"
        notes="The entire dimension item is clickable and draggable. Clicking any point, except the menu trigger, will open the dimension modal. Dragging any point will activate drag mode. A single pointer cursor is used, rather than attempting to switch between cursors."
      >
        <DimensionSidebar>
          <DimensionItem picked icon={<IconDimensionData16 />}>
            Data
          </DimensionItem>
          <DimensionItem picked icon={<IconClock16 />}>
            Period
          </DimensionItem>
          <DimensionItem icon={<IconDimensionOrgUnit16 />}>
            Organisation unit
          </DimensionItem>
          <DimensionItem
            icon={<IconDimensionDataElementGroupset16 />}
            recommended
          >
            Area
          </DimensionItem>
          <DimensionItem icon={<IconDimensionOrgUnitGroupset16 />} picked>
            Facility Ownership
          </DimensionItem>
          <DimensionItem icon={<IconDimensionCategoryOptionGroupset16 />}>
            Location Fixed/Outreach
          </DimensionItem>
          <DimensionItem
            icon={<IconDimensionDataElementGroupset16 />}
            recommended
          >
            Dimension with a long title that must be handled on multiple lines
            and not break the dimension item
          </DimensionItem>
          <DimensionItem
            icon={<IconDimensionCategoryOptionGroupset16 />}
            disabled
          >
            Disabled item
          </DimensionItem>
          <DimensionItem picked locked icon={<IconDimensionData16 />}>
            Data
          </DimensionItem>
        </DimensionSidebar>
      </DevExample>

      <DevExample
        title="Drag only items"
        notes="Some dimension items cannot be clicked to open a modal. There are only two actions: click the menu trigger, or drag the item. In this case, the whole item is draggable. (Example: Assigned Categories in Data Visualizer)."
      >
        <DimensionSidebar>
          <DimensionItem dragOnly icon={<IconFilter16 />}>
            Assigned Categories
          </DimensionItem>
        </DimensionSidebar>
      </DevExample>
    </>
  );
}
