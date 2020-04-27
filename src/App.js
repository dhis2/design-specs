import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { CssReset, CssVariables } from "@dhis2/ui-core";
import { appRoutes, componentRoutes } from "./AppRoutes.js";
import "./App.css";

export default function App() {
  return (
    <>
      <CssReset />
      <CssVariables colors spacers />
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {componentRoutes}

          {appRoutes}
        </Switch>
      </Router>
    </>
  );
}
