import React from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
import Recipe from "../Recipe";
import TestPage from "../TestPage";

const Router = () => (
  <HashRouter hashType="noslash">
    <Switch>
      <Route exact path="/">
        Pick a recipe from the menu!
      </Route>
      <Route exact path="/test">
        <TestPage />
      </Route>
      <Route path="/:id">
        <Recipe />
      </Route>
      <Route>Recipe not found!</Route>
    </Switch>
  </HashRouter>
);

export default Router;
