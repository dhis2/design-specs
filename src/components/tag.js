import React from 'react';
import './tag.css';

import {} from '@dhis2/ui-core';

import { DevExample } from '../assets/DevExample.js';
import { Monitoring } from './tagIcons.js';

const Tag = (props) => (
  <div
    className={`
tag
${'negative' in props && ' negative'}
${'valid' in props && ' valid'}
${'neutral' in props && ' neutral'}
${'bold' in props && ' bold'}
`}
  >
    <div class="tag-content">
      {'icon' in props && <div class="tag-icon">{props.icon}</div>}
      {props.children}
    </div>
  </div>
);

export default function SpecTag() {
  return (
    <>
      <DevExample title="Tag: colors">
        <Tag>default</Tag>
        <br />
        <br />
        <Tag neutral>neutral</Tag>
        <br />
        <br />
        <Tag valid>valid</Tag>
        <br />
        <br />
        <Tag negative>negative</Tag>
      </DevExample>

      <DevExample
        title="Tag: icons"
        notes="Icon and text should be middle aligned, I can't seem to get this to work?"
      >
        <Tag icon=<Monitoring />>default</Tag>
        <br />
        <br />
        <Tag icon=<Monitoring /> neutral>
          neutral
        </Tag>
        <br />
        <br />
        <Tag icon=<Monitoring /> valid>
          valid
        </Tag>
        <br />
        <br />
        <Tag icon=<Monitoring /> negative>
          negative
        </Tag>
      </DevExample>

      <DevExample title="Tag: Bold" notes="Used in edge cases.">
        <Tag bold>A bold tag</Tag>
        <br />
        <br />
        <Tag bold neutral>
          A bold neutral tag
        </Tag>
        <br />
        <br />
        <Tag bold valid>
          A bold valid tag
        </Tag>
        <br />
        <br />
        <Tag bold negative icon=<Monitoring />>
          A bold negative tag
        </Tag>
      </DevExample>

      <DevExample
        title="Tag: maximum width"
        notes="The text-overflow should be 'ellipsis', but this doesn't seem to work in this demo for some reason. Hovering a clipped tag should show the full text in a tooltip positioned 'Top'"
      >
        <Tag>Very long tag text that goes over the maximum defined width</Tag>
      </DevExample>
    </>
  );
}
