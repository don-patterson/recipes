import React from "react";
import {HashRouter, Route, Switch} from "react-router-dom";

import Recipe from "../Recipe";
import {recipes} from "../../recipes";

import ShrimpSquashRisotto from "../../recipes/ShrimpSquashRisotto";
import SoySrirachaSauce from "../../recipes/SoySrirachaSauce";
import VidaliaOnionDip from "../../recipes/VidaliaOnionDip";

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
      <Route path="/ShrimpSquashRisotto" component={ShrimpSquashRisotto} />
      <Route path="/SoySrirachaSauce" component={SoySrirachaSauce} />
      <Route path="/VidaliaOnionDip" component={VidaliaOnionDip} />

      <Route exact path="/">
        Pick a recipe from the menu!
      </Route>
      <Route>Recipe not found!</Route>
    </Switch>
  </HashRouter>
);

export default Router;
