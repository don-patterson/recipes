import React from "react";
import {Typography} from "@material-ui/core";

const LeekPotatoSoup = () => (
  <div>
    <Typography variant="h4">Ingredients</Typography>
    <ul>
      <li>2+ tbsp butter</li>
      <li>2 leeks, chopped</li>
      <li>1 large onion, chopped</li>
      <li>5 cups potatoes, peeled and cubed</li>
      <li>4 cups chicken broth</li>
      <li>1 cup blend cream (10%)</li>
      <li>1+ teaspoon garlic powder</li>
      <li>salt and pepper</li>
    </ul>
    <Typography variant="h4">Directions</Typography>
    <ol>
      <li>Melt butter in a pot over medium heat</li>
      <li>
        Cook and stir leeks and onion until vegetables are tender, about 5
        minutes
      </li>
      <li>
        Add potatoes and chicken broth and simmer until potatoes are tender,
        about 20 minutes
      </li>
      <li>Add cream, and simmer until slightly thickened, about 15 minutes</li>
      <li>
        Blend (optional) and add garlic powder, salt, and pepper, and simmer for
        another 5 minutes
      </li>
    </ol>
  </div>
);

export default LeekPotatoSoup;
