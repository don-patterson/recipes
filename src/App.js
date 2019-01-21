import React, {useState, useEffect} from "react";
import {Route} from "react-router-dom";
import {withTheme} from "./theme";
import AppBar from "./components/AppBar";
import Drawer from "./components/Drawer";
import Recipe from "./components/Recipe";

const recipeJson =
  "https://raw.githubusercontent.com/deek80/recipes/gh-pages/recipes.json";

const App = props => {
  const [recipes, setRecipes] = useState();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    fetch(recipeJson)
      .then(response => response.json())
      .then(setRecipes)
      .catch(error => console.log("error:", error));
  }, []);

  return (
    <div>
      <AppBar isDrawerOpen={isDrawerOpen} setDrawerOpen={setDrawerOpen} />
      <Drawer isDrawerOpen={isDrawerOpen} setDrawerOpen={setDrawerOpen} />
      <Route
        path="/:recipe"
        render={props => <Recipe {...props} recipes={recipes} />}
      />
    </div>
  );
};

export default withTheme(App);
