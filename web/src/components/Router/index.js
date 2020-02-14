import React from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
import Recipe from "../Recipe";

const Router = () => (
  <HashRouter hashType="noslash">
    <Switch>
      <Route exact path="/">
        Pick a recipe from the menu!
      </Route>
      <Route path="/:id">
        <Recipe />
      </Route>
      <Route>Recipe not found!</Route>
    </Switch>
  </HashRouter>
);

export default Router;
