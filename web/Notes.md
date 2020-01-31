## Design Idea
I want the ingredient list to be generated from the steps, so the database would only have a list of steps (or several
lists of steps, if the recipe had some separate pieces). But it would also be nice if the ingredients weren't just
embedded in strings and regex'd out of there.

Update: got the ingredients stored in the steps now, by storing the text with references
to the ingredients and in a separate field the ingredients are stored in a json array:
- Step:
  - text: "do the thing with {0} and {1}"
  - ingredients: [{name: "ingredient 0", ...}, {name: "ingredient 1", ...}]

Now I just need a decent way of reading this in on the frontend. I'd like to keep the github pages
(static) site going, so I think I'll just dump the endpoint calls to a json file!