import React from 'react';
import './headerbar.css';

import { IconApps24, IconMessages24, IconMail24 } from '@dhis2/ui-icons';

import { DevExample } from '../assets/DevExample.js';

const Headerbar = (props) => (
  <header id="headerbar" aria-label="header">
    <div id="headerbar-start">
      <a href="#" class="hb-home hb-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 182"
          class="logo"
        >
          <defs></defs>
          <path
            fill="#ffffff"
            d="M191.73,60,109,6.34a19.73,19.73,0,0,0-20.32,0L8.31,58.43a12,12,0,0,0-.25,20.63L88.6,134a19.37,19.37,0,0,0,20.37.25l82.76-53.65a11.88,11.88,0,0,0,0-20.59Zm-91,61.45a4.29,4.29,0,0,1-3.49-.05l-77-52.49L97,19.13a4.76,4.76,0,0,1,3.74,0L179.6,70.28Z"
          ></path>
          <path
            fill="#ffffff"
            d="M88.66,47.82,45.1,76.06l13.61,9.33L97,60.61a4.76,4.76,0,0,1,3.74,0l39.37,25.52,14-9.06L109,47.82A19.76,19.76,0,0,0,88.66,47.82Z"
          ></path>
          <path
            fill="#ffffff"
            d="M191.73,101.46l-8.62-5.59-14.05,9.06,10.53,6.83-78.91,51.15a4.37,4.37,0,0,1-3.49,0l-77-52.5,10-6.47L16.55,94.57,8.31,99.91a12,12,0,0,0-.25,20.63L88.6,175.46a19.34,19.34,0,0,0,20.37.24l82.75-53.65a11.88,11.88,0,0,0,0-20.59Z"
          ></path>
        </svg>
      </a>
      <div class="hb-title">
        Instance name that happens to be very long, that is difficult to deal
        with
      </div>
    </div>
    <div id="headerbar-end">
      <button class="hb-item">
        <span class="hb-item-badge">31</span>
        <IconMessages24 color="var(--colors-grey050)" />
      </button>
      <button class="hb-item">
        <span class="hb-item-badge">8</span>
        <IconMail24 color="var(--colors-grey050)" />
      </button>
      <button class="hb-item">
        <IconApps24 color="var(--colors-grey050)" />
      </button>
      <button class="hb-item">
        <div class="hb-avatar"></div>
      </button>
    </div>
  </header>
);

export default function specHeaderbarProposal() {
  return (
    <>
      <DevExample width="960px" title="Headerbar">
        <Headerbar />
      </DevExample>
      <DevExample width="320px" title="Headerbar on small screens">
        <Headerbar />
      </DevExample>
    </>
  );
}
