import React, {useEffect, useState} from "react";
import {AppBar, Box, Toolbar} from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import {Repo} from "@deek80/gh-reader";
import Markdown from "./components/Markdown";
import Picker from "./components/Picker";

const repo = new Repo("deek80/recipes");

const download = async recipe => {
  const httpResponse = await fetch(recipe.download_url);
  if (!httpResponse.ok) {
    console.error("Failed to fetch:", recipe.download_url);
    return null;
  }
  return httpResponse.text();
};

export default () => {
  const [recipes, setRecipes] = useState([]);
  const [markdown, setMarkdown] = useState("No recipe selected");

  useEffect(() => {
    const fetchRecipes = async () => {
      setRecipes(await repo.ls("public/list"));
    };
    fetchRecipes();
  }, [repo]);

  const handleSelected = async recipe => {
    if (recipe === null) {
      setMarkdown("No recipe selected");
      return;
    }

    const text = await download(recipe);
    if (text === null) {
      setMarkdown("Error: failed to download recipe");
      return;
    }

    setMarkdown(text);
  };

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <RestaurantIcon sx={{mr: 2}} />
          <Picker
            options={recipes}
            getLabel={recipe => recipe.name.replace(/\.md$/, "")}
            onSelected={handleSelected}
            placeholder="Select a Recipe"
          />
        </Toolbar>
      </AppBar>
      <Box sx={{m: 4}}>
        <Markdown raw={markdown} />
      </Box>
    </>
  );
};
