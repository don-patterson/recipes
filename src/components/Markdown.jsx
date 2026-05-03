import React from "react";
import DOMPurify from "dompurify";
import {marked} from "marked";

export default ({raw}) => (
  <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(marked.parse(raw))}}></div>
);
