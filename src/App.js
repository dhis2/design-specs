import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import {
  CssReset,
  CssVariables
} from "@dhis2/ui-core";
import SpecComment from './components/comment.js';
import SpecRichText from './components/richText.js';
import "./App.css";

export default function App() {
  return (
    <>
    <CssReset />
    <CssVariables colors spacers />
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/comment">
            <BackLink />
            <SpecComment />
          </Route>
          <Route path="/rich-text">
            <BackLink />
            <SpecRichText />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

function Home() {
  return (
  <nav>
    Available Component Specs
    <ul>
      <li>
        <Link to="/comment">Comment</Link>
      </li>
      <li>
        <Link to="/rich-text">Rich Text</Link>
      </li>
    </ul>
  </nav>
)
}

const BackLink = () => (
  <div class="back-link">
      <Link to="/">Back to component list</Link>
  </div>
)
