import React from "react";
import Recipe from "../components/Recipe";

const sections = [
  {
    type: "ingredients",
    items: [
      "1/4 cup soy sauce",
      "1/4 cup rice wine vinegar",
      "1 tablespoon honey",
      "2 cloves minced garlic",
      "2 teaspoons minced ginger",
      "1 teaspoon sesame seeds",
      "1 teaspoon sesame oil",
    ],
  },
  {type: "directions", items: ["mix together"]},
];

const AsianDumplingSauce = () => <Recipe sections={sections} />;

export default AsianDumplingSauce;
