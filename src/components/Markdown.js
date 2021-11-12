import React from "react";
import {sanitize} from "dompurify";
import {parse} from "marked/lib/marked.esm.js"; // weird workaround?!

export default ({raw}) => (
  <div dangerouslySetInnerHTML={{__html: sanitize(parse(raw))}}></div>
);
