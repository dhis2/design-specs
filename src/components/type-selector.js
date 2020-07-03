import React from 'react';
import './type-selector.css';
import { DevExample } from '../assets/DevExample';

const TypeSelector = (props) => (
  <div id="type-selector-wrapper">{props.children}</div>
);

const VisType = (props) => (
  <div
    class={`
      visType
      ${'selected' in props && ' selected-visType'}
  `}
  >
    <div class="icon">{props.icon}</div>
    <div class="text">
      <p class="name">{props.name}</p>
      <p class="description">{props.description}</p>
    </div>
  </div>
);

const Divider = () => <div class="divider"></div>;

export default function SpecTypeSelector() {
  return (
    <DevExample
      title="Type Selector"
      notes="Should not overflow the viewport, so needs to be set to some percentage of viewport-height. Overflow scrolls."
    >
      <TypeSelector>
        <VisType
          icon={<IconColumn />}
          name="Column"
          description="Compare sizes of related element, displayed vertically. Recommend period in filter."
        />
        <VisType
          icon={<IconStackedColumn />}
          name="Stacked column"
          description="Compare parts of a whole against related elements, vertically. Recommend data or org. unit as series."
        />
        <VisType
          icon={<IconBar />}
          name="Bar"
          description="Compare sizes of related elements, displayed horizontally. Recommend period in filter."
        />
        <VisType
          icon={<IconStackedBar />}
          name="Stacked bar"
          description="Compare parts of a whole against related elements, horizontally. Recommend data or org. unit as series."
        />
        <VisType
          selected
          icon={<IconLine />}
          name="Line"
          description="Track or compare changes over time. Recommend period as the category."
        />
        <VisType
          icon={<IconArea />}
          name="Area"
          description="Track or compare changes over time. Recommend period as the category."
        />
        <VisType
          icon={<IconPie />}
          name="Pie"
          description="Compare parts of a whole at a single point in time. Recommend period in the filter."
        />
        <VisType
          icon={<IconRadar />}
          name="Radar"
          description="Compare several items against multiple variables."
        />
        <VisType
          icon={<IconGauge />}
          name="Gauge"
          description="Compare a percentage indicator against a 100% scale. Recommend period in filter."
        />
        <VisType
          icon={<IconYoyLine />}
          name="Year over year: line"
          description="Compare changes over time between multiple time periods."
        />
        <VisType
          icon={<IconYoyColumn />}
          name="Year over year: column"
          description="Compare changes over time between multiple time periods."
        />
        <VisType
          icon={<IconSingleValue />}
          name="Single value"
          description="Display a single value. Recommend relative period to show latest data."
        />
        <VisType
          icon={<IconPivotTable />}
          name="Pivot table"
          description="View data and indicators in a manipulatable table."
        />
        <Divider />
        <VisType
          icon={<IconMap />}
          name="Open in Maps"
          description="Visually plot data on a world map. Data elements use separate map layers."
        />
      </TypeSelector>
    </DevExample>
  );
}

//icons

const IconColumn = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
  >
    <g fill="none" fill-rule="evenodd">
      <polygon points="0 0 48 0 48 48 0 48" />
      <polygon fill="#147CD7" points="12 12 18 12 18 36 12 36" />
      <polygon fill="#147CD7" points="22 22 28 22 28 36 22 36" />
      <polygon fill="#147CD7" points="32 7 38 7 38 36 32 36" />
      <polygon fill="#4A5768" points="6 6 8 6 8 42 6 42" />
      <polygon fill="#4A5768" points="6 40 42 40 42 42 6 42" />
    </g>
  </svg>
);

const IconArea = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
  >
    <g fill="none" fill-rule="evenodd" transform="matrix(0 -1 -1 0 48 48)">
      <polygon points="0 0 48 0 48 48 0 48" />
      <polygon fill="#4A5768" points="6 6 8 6 8 42 6 42" />
      <polygon fill="#4A5768" points="6 40 42 40 42 42 6 42" />
      <polygon
        fill="#90CAF9"
        points="28 36 34 29 27 24 31 17 20 10 12 10 12 36"
      />
      <polyline
        stroke="#147CD7"
        stroke-width="2"
        points="28 36 34 29 27 24 31 17 20 10"
      />
    </g>
  </svg>
);

const IconBar = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
  >
    <g fill="none" fill-rule="evenodd" transform="matrix(0 -1 -1 0 48 48)">
      <polygon points="0 0 48 0 48 48 0 48" />
      <polygon fill="#147CD7" points="12 22 18 22 18 36 12 36" />
      <polygon fill="#147CD7" points="22 9 28 9 28 36 22 36" />
      <polygon fill="#147CD7" points="32 19 38 19 38 36 32 36" />
      <polygon fill="#4A5768" points="6 6 8 6 8 42 6 42" />
      <polygon fill="#4A5768" points="6 40 42 40 42 42 6 42" />
    </g>
  </svg>
);

const IconGauge = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
  >
    <g fill="none" fill-rule="evenodd" transform="rotate(90 24 24)">
      <polygon points="0 0 48 0 48 48 0 48" />
      <path
        stroke="#4A5768"
        stroke-width="2"
        d="M32,8 C23.163444,8 16,15.163444 16,24 C16,32.836556 23.163444,40 32,40 L32,40"
      />
      <path
        stroke="#147CD7"
        stroke-width="6"
        d="M24.1695806,17.7796867 C22.8114502,19.4870869 22,21.6487813 22,24 C22,29.5228475 26.4771525,34 32,34"
      />
    </g>
  </svg>
);

const IconLine = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
  >
    <g fill="none" fill-rule="evenodd" transform="matrix(0 -1 -1 0 48 48)">
      <polygon points="0 0 48 0 48 48 0 48" />
      <polygon fill="#4A5768" points="6 6 8 6 8 42 6 42" />
      <polygon fill="#4A5768" points="6 40 42 40 42 42 6 42" />
      <polyline
        stroke="#147CD7"
        stroke-width="2"
        points="30 36 23 30 29 24 17 18 28 10"
      />
    </g>
  </svg>
);

const IconMap = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
  >
    <g fill="none" fill-rule="evenodd" transform="rotate(90 24 24)">
      <polygon points="0 0 48 0 48 48 0 48" />
      <path
        fill="#4A5768"
        fill-rule="nonzero"
        d="M24,7 C14.6111593,7 7,14.6111593 7,24 C7,33.3888407 14.6111593,41 24,41 C33.3888407,41 41,33.3888407 41,24 C41,14.6111593 33.3888407,7 24,7 Z M24,9 C32.2842712,9 39,15.7157288 39,24 C39,32.2842712 32.2842712,39 24,39 C15.7157288,39 9,32.2842712 9,24 C9,15.7157288 15.7157288,9 24,9 Z"
      />
      <g fill-rule="nonzero" transform="translate(7 7)">
        <polygon
          fill="#4A5768"
          points="9.676 2.441 11.574 1.809 12.437 4.398 11.273 6.142 14.347 8.448 8.244 13.679 5.837 14.16 7.515 16.956 6.114 19.758 2.241 17.822 .001 15.582 1.415 14.168 3.426 16.178 5.219 17.075 5.235 17.043 2.662 12.756 7.338 11.82 11.153 8.551 8.56 6.607 10.229 4.102"
        />
        <polygon
          fill="#4A5768"
          points="23.454 13.474 22.387 16.141 23.874 18.125 26.929 18.125 27.917 21.088 27.916 26.856 28.263 29.626 26.279 29.874 25.924 27.041 25.917 26.917 25.916 21.413 25.487 20.125 22.875 20.125 20.113 16.442 21.879 12.026 24.007 10.962 26.371 11.75 28.496 11.75 30.999 12.584 32.697 14.283 34.186 17.261 32.397 18.156 31.053 15.468 29.918 14.332 28.173 13.75 26.046 13.75 24.16 13.121"
        />
        <polygon
          fill="#4A5768"
          points="21.252 5.667 23.813 3.106 25.938 3.814 26.21 3.543 27.624 4.957 26.478 6.102 24.353 5.394 24.08 5.666 25.3 6.886 24.374 8.737 24.374 9.344 26.325 8.857 27.519 9.454 29.858 7.7 31.058 9.3 27.731 11.796 26.091 10.976 22.375 11.906 22.375 8.264 22.866 7.28"
        />
        <polygon
          fill="#147CD7"
          points="6.951 19.192 9.73 17.339 13.261 18.222 14.706 19.667 16.832 20.376 18.708 22.252 18.708 25.736 17.228 28.697 15.837 33.566 13.913 33.017 15.33 28.059 15.397 27.886 16.708 25.262 16.708 23.08 15.75 22.123 13.626 21.416 12.238 20.028 10.103 19.493 8.632 20.475 8.227 21.688 11.546 25.007 12.295 28.755 13.678 32.212 11.822 32.955 10.405 29.413 10.353 29.238 9.703 25.993 5.939 22.228"
        />
        <path
          fill="#4A5768"
          d="M17,0 C26.3888407,0 34,7.61115925 34,17 C34,26.3888407 26.3888407,34 17,34 C7.61115925,34 0,26.3888407 0,17 C0,7.61115925 7.61115925,0 17,0 Z M17,2 C8.71572875,2 2,8.71572875 2,17 C2,25.2842712 8.71572875,32 17,32 C25.2842712,32 32,25.2842712 32,17 C32,8.71572875 25.2842712,2 17,2 Z"
        />
      </g>
    </g>
  </svg>
);

const IconPie = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
  >
    <g fill="none" fill-rule="evenodd" transform="rotate(90 24 24)">
      <polygon points="0 0 48 0 48 48 0 48" />
      <circle cx="24" cy="24" r="16" stroke="#4A5768" stroke-width="2" />
      <path
        fill="#FFC324"
        d="M11,24 C11,31.1797017 16.8202983,37 24,37 C31.1797017,37 37,31.1797017 37,24 C37,16.8202983 31.1797017,11 24,11 L24,24 L11,24 Z"
        transform="rotate(165 24 24)"
      />
      <path
        fill="#147CD7"
        d="M11,24 C11,31.1797017 16.8202983,37 24,37 C31.1797017,37 37,31.1797017 37,24 C37,16.8202983 31.1797017,11 24,11 L24,24 L11,24 Z"
        transform="rotate(-15 24 24)"
      />
    </g>
  </svg>
);

const IconPivotTable = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
  >
    <g fill="none" fill-rule="evenodd">
      <polygon points="0 0 48 0 48 48 0 48" />
      <rect
        width="34"
        height="26"
        x="7"
        y="11"
        stroke="#4A5768"
        stroke-width="2"
      />
      <rect width="32" height="2" x="8" y="18" fill="#4A5768" />
      <rect width="2" height="26" x="19" y="11" fill="#4A5768" />
      <rect width="32" height="2" x="8" y="24" fill="#4A5768" />
      <rect width="32" height="2" x="8" y="30" fill="#4A5768" />
    </g>
  </svg>
);

const IconRadar = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
  >
    <g fill="none" fill-rule="evenodd" transform="rotate(90 24 24)">
      <polygon points="0 0 48 0 48 48 0 48" />
      <circle cx="24" cy="24" r="16" stroke="#4A5768" stroke-width="2" />
      <circle cx="24" cy="24" r="9" stroke="#4A5768" stroke-width="2" />
      <circle cx="24" cy="33" r="3" fill="#147CD7" />
      <circle cx="10" cy="16" r="3" fill="#147CD7" />
      <circle cx="37" cy="15" r="3" fill="#147CD7" />
      <polygon stroke="#147CD7" stroke-width="2" points="24 33 10 16 37 15" />
    </g>
  </svg>
);

const IconSingleValue = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
  >
    <g fill="none" fill-rule="evenodd">
      <polygon points="0 0 48 0 48 48 0 48" />
      <rect
        width="34"
        height="20"
        x="7"
        y="14"
        stroke="#4A5768"
        stroke-width="2"
      />
      <text
        fill="#147CD7"
        font-family="iAWriterDuoS-Bold, iA Writer Duo S"
        font-size="15"
        font-weight="bold"
        letter-spacing=".6"
      >
        <tspan x="10" y="29">
          123
        </tspan>
      </text>
    </g>
  </svg>
);

const IconStackedBar = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
  >
    <g fill="none" fill-rule="evenodd" transform="matrix(0 -1 -1 0 48 48)">
      <polygon points="0 0 48 0 48 48 0 48" />
      <polygon fill="#147CD7" points="12 19 18 19 18 36 12 36" />
      <polygon fill="#FFC324" points="12 10 18 10 18 19 12 19" />
      <polygon fill="#147CD7" points="22 25 28 25 28 36 22 36" />
      <polygon fill="#FFC324" points="22 15 28 15 28 25 22 25" />
      <polygon fill="#147CD7" points="32 21 38 21 38 36 32 36" />
      <polygon fill="#FFC324" points="32 12 38 12 38 21 32 21" />
      <polygon fill="#4A5768" points="6 6 8 6 8 42 6 42" />
      <polygon fill="#4A5768" points="6 40 42 40 42 42 6 42" />
    </g>
  </svg>
);

const IconStackedColumn = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
  >
    <g fill="none" fill-rule="evenodd">
      <polygon points="0 0 48 0 48 48 0 48" />
      <polygon fill="#147CD7" points="12 25 18 25 18 36 12 36" />
      <polygon fill="#FFC324" points="12 15 18 15 18 25 12 25" />
      <polygon fill="#147CD7" points="22 29 28 29 28 36 22 36" />
      <polygon fill="#FFC324" points="22 17 28 17 28 29 22 29" />
      <polygon fill="#147CD7" points="32 27 38 27 38 36 32 36" />
      <polygon fill="#FFC324" points="32 9 38 9 38 27 32 27" />
      <polygon fill="#4A5768" points="6 6 8 6 8 42 6 42" />
      <polygon fill="#4A5768" points="6 40 42 40 42 42 6 42" />
    </g>
  </svg>
);

const IconYoyColumn = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
  >
    <g fill="none" fill-rule="evenodd">
      <polygon points="0 0 48 0 48 48 0 48" />
      <polygon fill="#FFC324" points="15 20 18 20 18 36 15 36" />
      <polygon fill="#147CD7" points="12 14 15 14 15 36 12 36" />
      <polygon fill="#147CD7" points="22 22 25 22 25 36 22 36" />
      <polygon fill="#FFC324" points="25 12 28 12 28 36 25 36" />
      <polygon fill="#147CD7" points="32 14 35 14 35 36 32 36" />
      <polygon fill="#FFC324" points="35 27 38 27 38 36 35 36" />
      <polygon fill="#4A5768" points="6 6 8 6 8 42 6 42" />
      <polygon fill="#4A5768" points="6 40 42 40 42 42 6 42" />
    </g>
  </svg>
);

const IconYoyLine = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
  >
    <g fill="none" fill-rule="evenodd" transform="matrix(0 -1 -1 0 48 48)">
      <polygon points="0 0 48 0 48 48 0 48" />
      <polygon fill="#4A5768" points="6 6 8 6 8 42 6 42" />
      <polygon fill="#4A5768" points="6 40 42 40 42 42 6 42" />
      <polyline
        stroke="#FFC324"
        stroke-width="2"
        points="24 36 29 30 19 24 28 16 23 10"
      />
      <polyline
        stroke="#147CD7"
        stroke-width="2"
        points="30 36 23 30 29 24 17 18 28 10"
      />
    </g>
  </svg>
);
