import React, {useState} from "react";
import {Button} from "@material-ui/core";
import marked from "marked";
import {getContents} from "@deek80/gh-reader";

export default () => {
  const [markdown, setMarkdown] = useState("nothing loaded yet");

  const loadRecipePoc = async () => {
    const contents = await getContents("deek80", "recipes", "public/list");
    const file_response = await fetch(contents.response[0].download_url);
    setMarkdown(await file_response.text());
  };

  return (
    <>
      <Button onClick={loadRecipePoc}>Load recipe</Button>
      <div dangerouslySetInnerHTML={{__html: marked(markdown)}}></div>
    </>
  );
};
