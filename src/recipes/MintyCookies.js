import React from "react";
import {Typography} from "@material-ui/core";

const MintyCookies = () => (
  <div>
    <Typography variant="h4">Ingredients</Typography>
    <ul>
      <li>1 cup butter flavored Crisco</li>
      <li>1 package (8 oz) cream cheese, softened</li>
      <li>3/4 cup granulated sugar</li>
      <li>1/2 cup firmly packed brown sugar</li>
      <li>1 tsp vanilla</li>
      <li>2 cups all-purpose flour</li>
      <li>1 3/4 cups mint chocolate chips</li>
    </ul>
    <Typography variant="h4">Directions</Typography>
    <ol>
      <li>Heat oven to 375F</li>
      <li>Combine Crisco, cream cheese, sugars and vanilla in large bowl</li>
      <li>Beat at medium speed of electric mixer until well blended</li>
      <li>Mix flour into creamed mixture at low speed until just blended</li>
      <li>Stir in mint chocolate chips</li>
      <li>
        Form balls of 3-4cm diameter, and press slightly onto baking sheet
      </li>
      <li>Bake for 11 minutes, or until lightly browned</li>
      <li>Cool for 2 minutes on baking sheet, then move to cooling rack</li>
    </ol>
  </div>
);

export default MintyCookies;
