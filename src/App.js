import React, {useState} from "react";
import {Button} from "@material-ui/core";
import marked from "marked";
import {ls, limits} from "./lib/githubApi";

export default () => {
  const [items, setItems] = useState([]);
  const [markdown, setMarkdown] = useState("");

  const {remaining, minutesUntilReset} = limits.useState(s => ({
    remaining: s.remaining,
    minutesUntilReset: s.minutesUntilReset,
  }));

  const doFetch = async () => {
    setItems(await ls("deek80", "recipes", "/public/list"));
  };

  const dumpContent = async url => {
    const response = await fetch(url);
    if (!response.ok) {
      console.error("Failed to fetch url:", url);
      setMarkdown("Failed to fetch url");
    }
    setMarkdown(await response.text());
  };

  return (
    <>
      <div>
        Api limits: remaining:{remaining} minutesUntilReset:{minutesUntilReset}
      </div>
      <Button onClick={doFetch} variant="contained">
        Do Fetch
      </Button>
      {items.map(item => (
        <Button key={item.path} onClick={() => dumpContent(item.download_url)}>
          {item.path}
        </Button>
      ))}
      <div dangerouslySetInnerHTML={{__html: marked(markdown)}}></div>
    </>
  );
};
