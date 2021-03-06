import React from 'react';
import './richText.css';

import {
  Button,
  TextArea,
  Menu,
  MenuItem,
  Card,
  Tooltip,
} from '@dhis2/ui-core';
import { InputField } from '@dhis2/ui-widgets';
import { DevExample } from '../assets/DevExample.js';
import { Header, OrderedList } from './richTextIcons.js';
import {
  IconTextBold24,
  IconTextItalic24,
  IconAt24,
  IconLink24,
  IconList24,
} from '@dhis2/ui-icons';

const RTToolbarWrapper = (props) => (
  <div class="rich-text-toolbar">{props.children}</div>
);

const RTToolbarActions = (props) => (
  <>
    <div class="toolbar-actions-wrap">
      <div class="main-actions">
        <Tooltip content="Bold text">
          <Button
            secondary
            small
            icon={<IconTextBold24 color="var(--colors-grey700" />}
          />
        </Tooltip>
        <Tooltip content="Italic text">
          <Button
            secondary
            small
            icon={<IconTextItalic24 color="var(--colors-grey700" />}
          />
        </Tooltip>
        <Tooltip content="Headings">
          <Button secondary small icon={<Header />} />
        </Tooltip>
        <Tooltip content="Unordered list">
          <Button
            secondary
            small
            icon={<IconList24 color="var(--colors-grey700" />}
          />
        </Tooltip>
        <Tooltip content="Ordered list">
          <Button secondary small icon={<OrderedList />} />
        </Tooltip>
        <Tooltip content="Link to a URL">
          <Button
            secondary
            small
            icon={<IconLink24 color="var(--colors-grey700" />}
          />
        </Tooltip>
        {'mentions' in props && (
          <Tooltip content="Mention a user">
            <Button
              secondary
              small
              icon={<IconAt24 color="var(--colors-grey700" />}
            />
          </Tooltip>
        )}
      </div>
      <div class="side-actions">
        <Button secondary small>
          Preview
        </Button>
      </div>
    </div>
  </>
);

const RTToolbarPreview = (props) => (
  <div class="toolbar-preview-wrap">
    <Button secondary small>
      Back to write mode
    </Button>
  </div>
);

const RichTextInput = (props) => <TextArea placerholder={props.placeholder} />;

const RichTextPreview = (props) => (
  <div class="rich-text-preview">{props.children}</div>
);

const RichTextHeaderMenu = () => (
  <Menu dense>
    <MenuItem dense label="Header Level 1" />
    <MenuItem dense label="Header Level 2" />
    <MenuItem dense label="Header Level 3" />
    <MenuItem dense label="Header Level 4" />
    <MenuItem dense label="Header Level 5" />
    <MenuItem dense label="Header Level 6" />
  </Menu>
);

const RichTextLinkDialog = () => (
  <Card>
    <div class="link-dialog-content">
      <InputField
        dense
        label="Link address"
        placeholder="e.g. https://dhis2.org"
        className="rt-link-input"
      />
      <InputField
        dense
        label="Link title (optional)"
        placeholder="e.g. DHIS2 Homepage"
        className="rt-link-input"
      />
      <div class="link-dialog-buttons">
        <Button small primary>
          Insert link
        </Button>
        <Button small secondary>
          Cancel
        </Button>
      </div>
    </div>
  </Card>
);

const RichTextMentionsMenu = () => (
  <Menu dense>
    <MenuItem dense label="FirstName LastName (username)" />
    <MenuItem dense label="FirstName LastName (username)" />
    <MenuItem dense label="FirstName LastName (username)" />
  </Menu>
);

const DevRichTextContent = () => (
  <>
    <h1>h1 Heading</h1>
    <h2>h2 Heading</h2>
    <h3>h3 Heading</h3>
    <h4>h4 Heading</h4>
    <h5>h5 Heading</h5>
    <h6>h6 Heading</h6>

    <h2>Emphasis</h2>
    <p>
      <strong>This is bold text</strong>
    </p>
    <p>
      <em>This is italic text</em>
    </p>
    <p>
      <strong>
        <em>This is bold, italic text</em>
      </strong>
    </p>

    <h2>Lists</h2>
    <p>Unordered</p>
    <ul>
      <li>Create a list by starting a line with - </li>
      <li>
        Sub-lists are made by indenting 2 spaces:
        <ul>
          <li>
            Marker character change forces new list start:
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
    <p>
      <a href="https://dhis2.org">DHIS2 homepage</a>
    </p>
  </>
);

export default function SpecRichText() {
  return (
    <>
      <DevExample
        title="Composed component, narrow container"
        notes="Toolbar and input combination"
      >
        <div style={{ width: '400px' }}>
          <RTToolbarWrapper>
            <RTToolbarActions mentions />
          </RTToolbarWrapper>
          <RichTextInput placeholder="Write here" />
        </div>
      </DevExample>

      <DevExample title="Composed component, wide container">
        <div style={{ width: '800px' }}>
          <RTToolbarWrapper>
            <RTToolbarActions mentions />
          </RTToolbarWrapper>
          <RichTextInput placeholder="Write here" />
        </div>
      </DevExample>

      <DevExample title="Header menu">
        <div style={{ width: '280px' }}>
          <RichTextHeaderMenu />
        </div>
      </DevExample>

      <DevExample title="Link dialog">
        <div style={{ width: '300px' }}>
          <RichTextLinkDialog />
        </div>
      </DevExample>

      <DevExample title="Mentions menu">
        <div style={{ width: '380px' }}>
          <RichTextMentionsMenu />
        </div>
      </DevExample>

      <DevExample
        title="Preview mode"
        notes="Toolbar actions are not available during preview mode"
      >
        <div style={{ width: '400px' }}>
          <RTToolbarWrapper>
            <RTToolbarPreview />
          </RTToolbarWrapper>
          <RichTextPreview>
            <DevRichTextContent />
          </RichTextPreview>
        </div>
      </DevExample>
    </>
  );
}
