import React, {useState} from "react";
import {Repo} from "@deek80/gh-reader";
import Markdown from "./components/Markdown";
import Picker from "./components/Picker";
import {AppBar, Box, Toolbar} from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";

const repo = new Repo("deek80/recipes");

export default () => {
  const [markdown, setMarkdown] = useState("No recipe selected");

  const download = async file => {
    const httpResponse = await fetch(file.download_url);
    if (!httpResponse.ok) {
      console.error("Failed to fetch:", file.download_url);
      return null;
    }
    return httpResponse.text();
  };

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
          <Picker repo={repo} onSelected={handleSelected} />
        </Toolbar>
      </AppBar>
      <Box sx={{m: 4}}>
        <Markdown raw={markdown} />
      </Box>
    </>
  );
};
