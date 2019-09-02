import React from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
import Example from "../../recipes/Example";

const Router = () => (
  <HashRouter hashType="noslash">
    <Switch>
      <Route path="/example" component={Example} />
      <Route path="/">
        This site is busted, but the{" "}
        <a href="https://github.com/deek80/recipes/tree/master/old/list">
          recipes
        </a>{" "}
        are still available!
      </Route>
    </Switch>
  </HashRouter>
);

export default Router;
