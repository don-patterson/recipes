import React, {useState} from "react";
import {Repo} from "@deek80/gh-reader";
import Markdown from "./components/Markdown";
import Picker from "./components/Picker";

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

  const handleSelected = async recipe => {
    setMarkdown(await download(recipe));
  };

  return (
    <>
      <Picker repo={repo} onSelected={handleSelected} />
      <Markdown raw={markdown} />
    </>
  );
};
