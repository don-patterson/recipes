import React, {useEffect, useState} from "react";
import {AppBar, Box, IconButton, Toolbar} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import {Repo} from "@deek80/gh-reader";
import {Markdown, Picker} from "./components";

const repo = new Repo("don-patterson/recipes");

export default () => {
  const [recipes, setRecipes] = useState([]);
  const [editUrl, setEditUrl] = useState(null);
  const [markdown, setMarkdown] = useState("No recipe selected");

  useEffect(() => {
    const fetchRecipes = async () => {
      setRecipes(await repo.ls("public/list"));
    };
    fetchRecipes();
  }, [repo]);

  const handleSelected = async recipe => {
    if (recipe === null) {
      setEditUrl(null);
      setMarkdown("No recipe selected");
      return;
    }

    setEditUrl(recipe.edit_url);
    const text = await recipe.download();
    if (text === null) {
      setMarkdown("Error: failed to download recipe");
      return;
    }

    setMarkdown(text);
  };

  const handleEdit = () => {
    window.open(editUrl);
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
          <IconButton
            color="inherit"
            disabled={!editUrl}
            onClick={handleEdit}
            sx={{ml: 2, p: 0}}
          >
            <EditIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box sx={{m: 4}}>
        <Markdown raw={markdown} />
      </Box>
    </>
  );
};
