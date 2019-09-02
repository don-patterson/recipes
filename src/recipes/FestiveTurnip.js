import React from "react";
import {Typography} from "@material-ui/core";

const FestiveTurnip = () => (
  <div>
    <Typography variant="h4">Ingredients (Main)</Typography>
    <ul>
      <li>1 large rutabaga</li>
      <li>2 cooking apples (i.e. Cortland)</li>
      <li>2 tablespoons butter</li>
      <li>1/4 cup brown sugar</li>
      <li>a dash of cinnamon</li>
    </ul>
    <Typography variant="h4">Ingredients (Topping)</Typography>
    <ul>
      <li>1/3 cup brown sugar</li>
      <li>1/3 cup flour</li>
      <li>2 tablespoons butter</li>
    </ul>
    <Typography variant="h4">Directions</Typography>
    <ol>
      <li>Peel and dice the turnip, and boil until tender.</li>
      <li>Drain, and mash with butter.</li>
      <li>Peel and slice the apples, and mix with brown sugar and cinnamon.</li>
      <li>In a greased baking dish, spread 1/2 of the turnip.</li>
      <li>Add the apple mixuture ad the next layer.</li>
      <li>Add the remaining turnip as the next layer.</li>
      <li>
        In a small bowl, mix brown sugar, flour, and butter until crumbly.
      </li>
      <li>Sprinkle on top of turnip.</li>
      <li>Bake for 1 hour at 350F.</li>
    </ol>
  </div>
);

export default FestiveTurnip;
