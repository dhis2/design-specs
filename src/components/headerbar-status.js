import React from 'react';
import './headerbar-status.css';

import { DevExample } from '../assets/DevExample.js';

const MobileStatusBar = (props) => (
  <div id="mobile-status-bar">
    <div class="status">
      <div
        class={`
        status-icon
        ${'online' in props && ' online'}
        ${'offline' in props && ' offline'}
        ${'reconnecting' in props && ' reconnecting'}
        `}
      ></div>
      <span class="status-text">
        {'online' in props && 'Online'}
        {'offline' in props && 'Offline'}
        {'reconnecting' in props && 'Reconnecting'}
      </span>
    </div>
    <span class="mobile-info">{props.info}</span>
  </div>
);

const StatusBadge = (props) => (
  <div class="desktop-status-badge">
    <div class="status">
      <span class="desktop-info">{props.info}</span>
      <div
        class={`
        status-icon
        ${'online' in props && ' online'}
        ${'offline' in props && ' offline'}
        ${'reconnecting' in props && ' reconnecting'}
        `}
      ></div>
      <span class="status-text">
        {'online' in props && 'Online'}
        {'offline' in props && 'Offline'}
        {'reconnecting' in props && 'Reconnecting'}
      </span>
    </div>
  </div>
);

const DevDummyHeader = (props) => <div class="headerbar">{props.children}</div>;

export default function specHeaderbarStatus() {
  return (
    <>
      <DevExample width="320px" title="Small screen: Online">
        <DevDummyHeader />
        <MobileStatusBar online />
      </DevExample>

      <DevExample width="320px" title="Small screen: Offline">
        <DevDummyHeader />
        <MobileStatusBar offline />
      </DevExample>

      <DevExample width="320px" title="Small screen: Reconnecting">
        <DevDummyHeader />
        <MobileStatusBar reconnecting />
      </DevExample>

      <DevExample width="320px" title="Small screen: Additional info">
        <DevDummyHeader />
        <MobileStatusBar offline info="Last online 16 weeks ago" />
      </DevExample>

      <DevExample title="Online">
        <DevDummyHeader>
          <StatusBadge online />
          <div style={{ color: '#A0ADBA', marginLeft: '16px' }}>
            Msg icons, Apps icons, Avatar
          </div>
        </DevDummyHeader>
      </DevExample>

      <DevExample title="Offline">
        <DevDummyHeader>
          <StatusBadge offline />
          <div style={{ color: '#A0ADBA', marginLeft: '16px' }}>
            Msg icons, Apps icons, Avatar
          </div>
        </DevDummyHeader>
      </DevExample>

      <DevExample title="Reconnecting">
        <DevDummyHeader>
          <StatusBadge reconnecting />
          <div style={{ color: '#A0ADBA', marginLeft: '16px' }}>
            Msg icons, Apps icons, Avatar
          </div>
        </DevDummyHeader>
      </DevExample>

      <DevExample title="Additional info">
        <DevDummyHeader>
          <StatusBadge offline info="Last online 14 weeks ago" />
          <div style={{ color: '#A0ADBA', marginLeft: '16px' }}>
            Msg icons, Apps icons, Avatar
          </div>
        </DevDummyHeader>
      </DevExample>
    </>
  );
}
