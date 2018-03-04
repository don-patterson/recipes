import React from "react";
import {Typography} from "@material-ui/core";

const ButternutSquashSoup = () => (
  <div>
    <Typography variant="h4">Ingredients</Typography>
    <ul>
      <li>1 large onion</li>
      <li>2 stalks celery</li>
      <li>2 carrots</li>
      <li>2 potatoes</li>
      <li>1 butternut squash</li>
      <li>1L chicken broth</li>
      <li>.5t cayenne pepper</li>
      <li>1T yellow curry powder</li>
      <li>.5C sour cream</li>
      <li>salt</li>
      <li>pepper</li>
      <li>butter</li>
    </ul>
    <Typography variant="h4">Directions</Typography>
    <ol>
      <li>Roast the butternut squash (whole, peel on) for 1 hour at 375F</li>
      <li>Finely chop all vegetables</li>
      <li>
        Melt some butter in a large pot, and fry the vegetables until lightly
        browned (~5 minutes)
      </li>
      <li>Pour in enough of the chicken broth to cover the vegetables</li>
      <li>Add cayenne, curry, salt, pepper</li>
      <li>Add the butternut squash</li>
      <li>Bring to a boil, reduce heat, cover, simmer for ~45 minutes</li>
      <li>Blend soup until smooth</li>
      <li>Add remaining chicken broth until desired consistency</li>
      <li>Mix in sour cream</li>
    </ol>
  </div>
);

export default ButternutSquashSoup;
