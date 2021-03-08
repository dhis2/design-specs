import React from 'react';
import { Route, Link } from 'react-router-dom';

import SpecComment from './components/comment.js';
import SpecRichText from './components/richText.js';
import SpecTag from './components/tag.js';
import SpecDataTable from './components/data-table.js';
import SpecColorPicker from './components/color-picker.js';
import SpecOUTree from './components/ouTree.js';
import SpecSegmentedControl from './components/segmented-control.js';
import SpecTypeSelector from './components/type-selector.js';
import SpecHeaderbarStatus from './components/headerbar-status.js';
import SpecHeaderbarProposal from './components/headerbar.js';
import SpecDimensionList from './components/dimension-list.js';
import SpecSidenav from './components/sidenav.js';

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
  { url: '/type-selector', component: SpecTypeSelector },
  { url: '/headerbar-status', component: SpecHeaderbarStatus },
  { url: '/headerbar', component: SpecHeaderbarProposal },
  { url: '/dimension-list', component: SpecDimensionList },
  { url: '/sidenav', component: SpecSidenav },
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
        <li>
          <Link to="/headerbar-status">Headerbar Connectivity Status</Link>
        </li>
        <li>
          <Link to="/dimension-list">Dimension Item List</Link>
        </li>
        <li>
          <Link to="/sidenav">Sidenav</Link>
        </li>
      </ul>
      Other examples/mockups
      <ul>
        <li>
          <Link to="/type-selector">Data Visualizer: Type Selector</Link>
        </li>
        <li>
          <Link to="/headerbar">Headerbar updated design proposal</Link>
        </li>
      </ul>
    </nav>
  );
}
