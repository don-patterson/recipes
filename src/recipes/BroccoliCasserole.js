import React from "react";
import {Typography} from "@material-ui/core";

const BroccoliCasserole = () => (
  <div>
    <Typography variant="h4">Ingredients</Typography>
    <ul>
      <li>2 bunches of broccoli (~300g)</li>
      <li>1 can cream of mushroom soup</li>
      <li>250ml sour cream</li>
      <li>1 tablespoon minced onion</li>
      <li>1 cup shredded cheddar cheese</li>
      <li>15 Ritz crackers, crushed</li>
    </ul>
    <Typography variant="h4">Directions</Typography>
    <ol>
      <li>Cook broccoli until tener, and drain well.</li>
      <li>Mix with all other ingredients.</li>
      <li>Bake for 20 minutes at 350F.</li>
    </ol>
  </div>
);

export default BroccoliCasserole;
