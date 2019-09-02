import React from "react";
import {Typography} from "@material-ui/core";

const Example = () => (
  <div>
    <Typography variant="h4">Ingredients</Typography>
    <ul>
      <li>First Thing</li>
      <li>Second Thing</li>
      <li>Third Thing</li>
      <li>Fourth Thing</li>
      <li>Fifth Thing</li>
    </ul>
    <Typography variant="h4">Directions</Typography>
    <ol>
      <li>First Thing</li>
      <li>Second Thing</li>
      <li>Third Thing</li>
      <li>Fourth Thing</li>
      <li>Fifth Thing</li>
    </ol>
  </div>
);

export default Example;
