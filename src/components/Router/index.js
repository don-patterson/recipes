import React from "react";
import {HashRouter, Route, Switch} from "react-router-dom";

import AsianDumplingSauce from "../../recipes/AsianDumplingSauce";
import BroccoliCasserole from "../../recipes/BroccoliCasserole";
import BroccoliSlawSalad from "../../recipes/BroccoliSlawSalad";
import ButternutSquashCassrole from "../../recipes/ButternutSquashCassrole";
import ChickenBroccoliCasserole from "../../recipes/ChickenBroccoliCasserole";
import Chili from "../../recipes/Chili";
import ChristmasMorningSaver from "../../recipes/ChristmasMorningSaver";
import DakGalbi from "../../recipes/DakGalbi";
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
      <Route path="/AsianDumplingSauce" component={AsianDumplingSauce} />
      <Route path="/BroccoliCasserole" component={BroccoliCasserole} />
      <Route path="/BroccoliSlawSalad" component={BroccoliSlawSalad} />
      <Route
        path="/ButternutSquashCassrole"
        component={ButternutSquashCassrole}
      />
      <Route
        path="/ChickenBroccoliCasserole"
        component={ChickenBroccoliCasserole}
      />
      <Route path="/Chili" component={Chili} />
      <Route path="/ChristmasMorningSaver" component={ChristmasMorningSaver} />
      <Route path="/DakGalbi" component={DakGalbi} />
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
