import React from "react";
import {Typography} from "@material-ui/core";

const ShripSquashRisotto = () => (
  <div>
    <Typography variant="h4">Ingredients</Typography>
    <ul>
      <li>2 packs of PC 4 cheese risotto (2x170g)</li>
      <li>1 butternut squash (~1 pound, cubed)</li>
      <li>25 shrimp</li>
      <li>garlic (or garlic powder)</li>
      <li>salt</li>
      <li>pepper</li>
      <li>butter</li>
    </ul>
    <Typography variant="h4">Directions</Typography>
    <ol>
      <li>
        Cut butternut squash into bite-size cubes (1-2cm), toss in oil, and
        roast for ~40 minutes at 375F
      </li>
      <li>
        Make risotto according to package instructions (basically like KD)
      </li>
      <li>
        Toss shrimp in oil, salt, pepper, and minced garlic (or garlic powder)
      </li>
      <li>Fry shrimp until fully cooked</li>
      <li>Mix everything together, and add pepper to taste</li>
    </ol>
  </div>
);

export default ShripSquashRisotto;
