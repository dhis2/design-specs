import React from 'react';
import './dimension-list.css';

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
  `}
  >
    <div class="di-icon">{props.icon}</div>
    <div class="di-label">{props.children}</div>
    <div class="di-menu-trigger">
      <IconMore />
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
          <DimensionItem picked icon={<DemoIconData />}>
            Data
          </DimensionItem>
          <DimensionItem picked icon={<DemoIconPeriod />}>
            Period
          </DimensionItem>
          <DimensionItem icon={<DemoIconOU />}>Organisation unit</DimensionItem>
          <DimensionItem icon={<DemoIcon1 />} recommended>
            Area
          </DimensionItem>
          <DimensionItem icon={<DemoIcon2 />} picked>
            Facility Ownership
          </DimensionItem>
          <DimensionItem icon={<DemoIcon1 />}>
            Location Fixed/Outreach
          </DimensionItem>
          <DimensionItem icon={<DemoIcon2 />} recommended>
            Dimension with a long title that must be handled on multiple lines
            and not break the dimension item
          </DimensionItem>
          <DimensionItem icon={<DemoIcon1 />} disabled>
            Disabled item
          </DimensionItem>
        </DimensionSidebar>
      </DevExample>
    </>
  );
}

// Example icons - Will be supplied by ui-icons

const DemoIcon1 = (props) => (
  <svg
    height="16"
    viewBox="0 0 16 16"
    width="16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m14 1c.5522847 0 1 .44771525 1 1v12c0 .5522847-.4477153 1-1 1h-12c-.55228475 0-1-.4477153-1-1v-12c0-.55228475.44771525-1 1-1zm0 1h-12v12h12zm-3 7c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm-4 0v4h-4v-4zm4 1c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1 1-.4477153 1-1-.4477153-1-1-1zm-5 0h-2v2h2zm-1-7c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm8 0v4h-4v-4zm-8 1c-.55228475 0-1 .44771525-1 1s.44771525 1 1 1 1-.44771525 1-1-.44771525-1-1-1zm7 0h-2v2h2z"
      fill="inherit"
    />
  </svg>
);

const DemoIcon2 = (props) => (
  <svg
    height="16"
    viewBox="0 0 16 16"
    width="16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m14 1c.5522847 0 1 .44771525 1 1v12c0 .5522847-.4477153 1-1 1h-12c-.55228475 0-1-.4477153-1-1v-12c0-.55228475.44771525-1 1-1zm0 1h-12v12h12zm-9 1v2h3v-1h4v4h-4v-2h-3v4h3v-1h4v4h-4v-2h-4v-8zm6 7h-2v2h2zm0-5h-2v2h2z"
      fill="inherit"
    />
  </svg>
);

const DemoIconData = (props) => (
  <svg
    height="16"
    viewBox="0 0 16 16"
    width="16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m12 1c.5522847 0 1 .44771525 1 1v11c0 .5522847-.4477153 1-1 1h-8c-.55228475 0-1-.4477153-1-1v-11c0-.55228475.44771525-1 1-1zm-8 9v3h8v-3zm2 1v1h-1v-1zm0-4v1h-1v-1zm6-5h-8v3h8zm-6 1v1h-1v-1zm-2 6h8v-3h-8z"
      fill="inherit"
    />
  </svg>
);

const DemoIconOU = (props) => (
  <svg
    height="16"
    viewBox="0 0 16 16"
    width="16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m6 1v4h-2v2h6v-1h4v4h-4v-2h-6v4h6v-1h4v4h-4v-2h-6.5c-.24545989 0-.44960837-.1768752-.49194433-.4101244l-.00805567-.0898756v-7.5h-1v-4zm7 11h-2v2h2zm0-5h-2v2h2zm-8-5h-2v2h2z"
      fill="inherit"
    />
  </svg>
);

const DemoIconPeriod = (props) => (
  <svg
    height="16"
    viewBox="0 0 16 16"
    width="16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m8 2c3.3137085 0 6 2.6862915 6 6s-2.6862915 6-6 6-6-2.6862915-6-6 2.6862915-6 6-6zm0 1c-2.76142375 0-5 2.23857625-5 5 0 2.7614237 2.23857625 5 5 5 2.7614237 0 5-2.2385763 5-5 0-2.76142375-2.2385763-5-5-5zm.5 1.5v3.293l1.8535534 1.85344661-.70710679.70710679-2.14644661-2.14644662v-3.70710678z"
      fill="inherit"
    />
  </svg>
);

const IconMore = (props) => (
  <svg
    height="16"
    viewBox="0 0 16 16"
    width="16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m3 7c.55228475 0 1 .44771525 1 1s-.44771525 1-1 1-1-.44771525-1-1 .44771525-1 1-1zm5 0c.55228475 0 1 .44771525 1 1s-.44771525 1-1 1-1-.44771525-1-1 .44771525-1 1-1zm5 0c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1-1-.44771525-1-1 .4477153-1 1-1z"
      fill="inherit"
      fill-rule="evenodd"
    />
  </svg>
);
