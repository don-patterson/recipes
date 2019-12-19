import React from "react";
import {HashRouter, Route, Switch} from "react-router-dom";

import Recipe from "../Recipe";
import {recipes} from "../../recipes";

import DillPickleSoup from "../../recipes/DillPickleSoup";
import EggplantMincedPork from "../../recipes/EggplantMincedPork";
import FestiveTurnip from "../../recipes/FestiveTurnip";
import GrilledSweetPotato from "../../recipes/GrilledSweetPotato";
import LeekPotatoSoup from "../../recipes/LeekPotatoSoup";
import MintyCookies from "../../recipes/MintyCookies";
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
      <Route path="/DillPickleSoup" component={DillPickleSoup} />
      <Route path="/EggplantMincedPork" component={EggplantMincedPork} />
      <Route path="/FestiveTurnip" component={FestiveTurnip} />
      <Route path="/GrilledSweetPotato" component={GrilledSweetPotato} />
      <Route path="/LeekPotatoSoup" component={LeekPotatoSoup} />
      <Route path="/MintyCookies" component={MintyCookies} />
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
