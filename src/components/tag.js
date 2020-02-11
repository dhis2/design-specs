import React from 'react';
import './tag.css';

import {
} from "@dhis2/ui-core";

import { DevExample } from "../assets/DevExample.js";
import { Monitoring } from "./tagIcons.js";

const Tag = props => (
  <div className={`
tag
${"negative" in props && " negative"}
${"valid" in props && " valid"}
${"neutral" in props && " neutral"}
`}>
    <div class="tag-content">
      {"icon" in props && (
        <div class="tag-icon">{props.icon}</div>
      )}
      {props.children}
    </div>
  </div>
)

export default function SpecTag() {
  return (
    <>

      <DevExample title="Tag: colors">
        <Tag>default</Tag>
        <br/><br/>
        <Tag neutral>neutral</Tag>
        <br/><br/>
        <Tag valid>valid</Tag>
        <br/><br/>
        <Tag negative>negative</Tag>
      </DevExample>

      <DevExample title="Tag: icons" notes="Icon and text should be middle aligned, I can't seem to get this to work?">
        <Tag icon=<Monitoring />>default</Tag>
        <br/><br/>
        <Tag icon=<Monitoring /> neutral>neutral</Tag>
        <br/><br/>
        <Tag icon=<Monitoring /> valid>valid</Tag>
        <br/><br/>
        <Tag  icon=<Monitoring /> negative>negative</Tag>
      </DevExample>


    </>
  );
}
