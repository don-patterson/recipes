import React from "react";
import {Typography} from "@material-ui/core";

const GrilledSweetPotato = () => (
  <div>
    <Typography variant="h4">Ingredients</Typography>
    <ul>
      <li>2 sweet potatoes</li>
      <li>2 tbsp olive oil</li>
      <li>2 tbsp brown sugar</li>
      <li>1 tbsp cumin</li>
      <li>1 tsp cayenne</li>
      <li>salt and pepper</li>
    </ul>
    <Typography variant="h4">Directions</Typography>
    <ol>
      <li>Cut up potatoes, and mix all ingredients in a bowl</li>
      <li>Wrap in aluminium foil pouch</li>
      <li>Cook on BBQ for ~25 minutes, turning 2-3 times throughout</li>
    </ol>
  </div>
);

export default GrilledSweetPotato;
