import React from 'react';
import './richText.css';

import {
  Button,
  TextArea
} from "@dhis2/ui-core";

import { DevExample } from "../assets/DevExample.js";
import { Bold, Italic, Header, UnorderedList, OrderedList, Link, Mention } from "./richTextIcons.js";

const RTToolbarWrapper = props => (
  <div class="rich-text-toolbar">
    {props.children}
  </div>
)

const RTToolbarActions = props => (
    <>
    <div class="toolbar-actions-wrap">
      <div class="main-actions">
        <Button secondary small icon={<Bold />}/>
        <Button secondary small icon={<Italic />}/>
        <Button secondary small icon={<Header />}/>
        <Button secondary small icon={<UnorderedList />}/>
        <Button secondary small icon={<OrderedList />}/>
        <Button secondary small icon={<Link />}/>
        {"mentions" in props && (
          <Button secondary small icon={<Mention />}/>
        )}
      </div>
      <div class="side-actions">
        <Button secondary small>Preview</Button>
      </div>
    </div>
    </>
)

const RTToolbarPreview = props => (
  <div class="toolbar-preview-wrap">
    <Button secondary small>Back to write mode</Button>
  </div>
)

const RichTextInput = props => (
  <TextArea placerholder={props.placeholder}/>
)

const RichTextPreview = props => (
  <div class="rich-text-preview">
    {props.children}
  </div>
)

const DevRichTextContent = () => (
  <>
  <h1>h1 Heading 😎</h1>
  <h2>h2 Heading</h2>
  <h3>h3 Heading</h3>
  <h4>h4 Heading</h4>
  <h5>h5 Heading</h5>
  <h6>h6 Heading</h6>

  <h2>Emphasis</h2>
  <p><strong>This is bold text</strong></p>
  <p><em>This is italic text</em></p>
  <p><strong><em>This is bold, italic text</em></strong></p>

  <h2>Lists</h2>
  <p>Unordered</p>
  <ul>
  <li>Create a list by starting a line with - </li>
  <li>Sub-lists are made by indenting 2 spaces:
  <ul>
  <li>Marker character change forces new list start:
  <ul>
  <li>Ac tristique libero volutpat at</li>
  </ul>
  <ul>
  <li>Facilisis in pretium nisl aliquet</li>
  </ul>
  <ul>
  <li>Nulla volutpat aliquam velit</li>
  </ul>
  </li>
  </ul>
  </li>
  <li>Very easy!</li>
  </ul>
  <p>Ordered</p>
  <ol>
  <li>
  <p>Lorem ipsum dolor sit amet</p>
  </li>
  <li>
  <p>Consectetur adipiscing elit</p>
  </li>
  <li>
  <p>Integer molestie lorem at massa</p>
  </li>
  </ol>

  <h2>Links</h2>
  <p><a href="https://dhis2.org">DHIS2 homepage</a></p>

  </>
)

export default function SpecRichText() {
  return (
    <>
      <DevExample title="Composed component, narrow container" notes="Toolbar and input combination">
        <div style={{width: '400px'}}>
        <RTToolbarWrapper>
            <RTToolbarActions mentions />
        </RTToolbarWrapper>
        <RichTextInput placeholder="Write here"/>
        </div>
      </DevExample>

      <DevExample title="Composed component, wide container">
        <div style={{width: '800px'}}>
        <RTToolbarWrapper>
            <RTToolbarActions mentions />
        </RTToolbarWrapper>
        <RichTextInput placeholder="Write here"/>
        </div>
      </DevExample>

      <DevExample title="Header menu">

      </DevExample>

      <DevExample title="Link dialog">

      </DevExample>

      <DevExample title="Mentions menu">

      </DevExample>

      <DevExample title="Preview mode" notes="Toolbar actions are not available during preview mode">
        <div style={{width: '400px'}}>
        <RTToolbarWrapper>
            <RTToolbarPreview />
        </RTToolbarWrapper>
        <RichTextPreview>
          <DevRichTextContent/>
        </RichTextPreview>
        </div>
      </DevExample>
    </>
  );
}
