import React from "react";
import {HashRouter, Route, Switch} from "react-router-dom";

import Recipe from "../Recipe";
import {recipes} from "../../recipes";

const Router = () => (
  <HashRouter hashType="noslash">
    <Switch>
      {recipes.map(recipe => (
        <Route
          key={recipe.key}
          path={`/${recipe.key}`}
          render={() => (
            <Recipe name={recipe.name} sections={recipe.sections} />
          )}
        />
      ))}

      <Route exact path="/">
        Pick a recipe from the menu!
      </Route>
      <Route>Recipe not found!</Route>
    </Switch>
  </HashRouter>
);

export default Router;
