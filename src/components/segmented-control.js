import React from 'react';
import './segmented-control.css';

import { DevExample } from '../assets/DevExample.js';

const SegmentedControl = (props) => (
  <div class="segmented-control">{props.children}</div>
);

const Segment = (props) => (
  <div
    class={`
    segment
    ${'selected' in props && ' selected-segment'}
    ${'disabled' in props && ' disabled-segment'}
    `}
  >
    {props.label}
  </div>
);

export default function specSegmentedControl() {
  return (
    <>
      <DevExample
        title="Segmented Control"
        notes="At least one segment must be selected at all times"
      >
        <SegmentedControl>
          <Segment selected label="dog" />
          <Segment label="cat" />
          <Segment label="giraffe" />
        </SegmentedControl>
      </DevExample>
      <DevExample title="Disabled option">
        <SegmentedControl>
          <Segment label="One" />
          <Segment disabled label="Two" />
          <Segment selected label="Three" />
        </SegmentedControl>
      </DevExample>
    </>
  );
}
