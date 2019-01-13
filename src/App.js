import React, {useState} from "react";
import {Route} from "react-router-dom";
import {withTheme} from "./theme";
import AppBar from "./components/AppBar";
import Drawer from "./components/Drawer";
import Recipe from "./components/Recipe";

const App = props => {
  const [recipeName, setRecipeName] = useState();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  return (
    <div>
      <AppBar
        isDrawerOpen={isDrawerOpen}
        setDrawerOpen={setDrawerOpen}
        recipeName={recipeName}
      />
      <Drawer isDrawerOpen={isDrawerOpen} setDrawerOpen={setDrawerOpen} />
      <Route path="/:recipe" component={Recipe} setRecipeName={setRecipeName} />
    </div>
  );
};

export default withTheme(App);
