import React, {useState} from "react";
import {Button} from "@material-ui/core";
import marked from "marked";
import {Repo} from "@deek80/gh-reader";

const repo = new Repo("deek80/recipes");

export default () => {
  const [markdown, setMarkdown] = useState("nothing loaded yet");

  const download = async file => {
    const httpResponse = await fetch(file.download_url);
    if (!httpResponse.ok) {
      console.error("Failed to fetch:", file.download_url);
      return null;
    }
    return httpResponse.text();
  };

  const loadRecipePoc = async () => {
    const files = await repo.ls("public/list");
    console.log("got files:", files);
    const firstRecipe = await download(files[0]);
    setMarkdown(firstRecipe);
  };

  return (
    <>
      <Button onClick={loadRecipePoc}>Load recipe</Button>
      <div dangerouslySetInnerHTML={{__html: marked(markdown)}}></div>
    </>
  );
};
