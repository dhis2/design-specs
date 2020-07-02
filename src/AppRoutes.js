import React from 'react';
import { Route, Link } from 'react-router-dom';

import SpecComment from './components/comment.js';
import SpecRichText from './components/richText.js';
import SpecTag from './components/tag.js';
import SpecDataTable from './components/data-table.js';
import SpecColorPicker from './components/color-picker.js';
import SpecOUTree from './components/ouTree.js';
import SpecSegmentedControl from './components/segmented-control.js';

const BackLink = () => (
  <div class="back-link">
    <Link to="/">Back to component list</Link>
  </div>
);

export const appRoutes = [
  <Route path="/">
    <Home />
  </Route>,
];

function buildRoute(path, Component) {
  return (
    <Route path={path}>
      <BackLink />
      <Component />
    </Route>
  );
}

const rawComponents = [
  { url: '/comment', component: SpecComment },
  { url: '/rich-text', component: SpecRichText },
  { url: '/tag', component: SpecTag },
  { url: '/data-table', component: SpecDataTable },
  { url: '/color-picker', component: SpecColorPicker },
  { url: '/org-unit-tree', component: SpecOUTree },
  { url: '/segmented-control', component: SpecSegmentedControl },
];

export const componentRoutes = rawComponents.map((object) =>
  buildRoute(object.url, object.component)
);

function Home() {
  return (
    <nav>
      Available Component Specs // turn this dynamic
      <ul>
        <li>
          <Link to="/comment">Comment</Link>
        </li>
        <li>
          <Link to="/rich-text">Rich Text</Link>
        </li>
        <li>
          <Link to="/tag">Tag</Link>
        </li>
        <li>
          <Link to="/data-table">Data Table</Link>
        </li>
        <li>
          <Link to="/color-picker">Color Picker</Link>
        </li>
        <li>
          <Link to="/org-unit-tree">Org unit tree</Link>
        </li>
        <li>
          <Link to="/segmented-control">Segmented Control</Link>
        </li>
      </ul>
      Other examples/mockups
      <ul>
        <li>
          <Link to="/dv-start-screen">Data Visualizer: Start Screen</Link>
        </li>
      </ul>
    </nav>
  );
}
