## Design Idea
I want the ingredient list to be generated from the steps, so the database would only have a list of steps (or several
lists of steps, if the recipe had some separate pieces). But it would also be nice if the ingredients weren't just
embedded in strings and regex'd out of there.

### Brainstorm
- option 1: embed ingredient markup in strings
  ```
  Add {ingredient:"potatoes", quantity:"2 cups", prep:"quartered"} and {ingredient:"carrots", quantity:1, prep:"sliced"} to a pot of boiling water.
  ```
  I don't really like this option, but it's a start.
- option 2: option 1 but with the steps being arrays of alternating string/ingredient/string/ingredient/... entries.
  ```json
  [
    "Add ",
    {ingredient:"potatoes", quantity:"2 cups", prep:"quartered"},
    " and ",
    {ingredient:"carrots", quantity:1, prep:"sliced"},
    " to a pot of boiling water."
  ]
  ```
  This is slightly better. At least you wouldn't have to just parse out
  the ingredients and escape everything...
  Let's start with this. Maybe it can be "upgraded" to use ingredient IDs
  later on, or some fancy join table RecipeIngredient that has prep,
  quantity, and units
- option 3: good ol SQL.
  ```
  RecipeIngredient   i.e.
  ----------------   ----
  recipe_id          1
  ingredient_id      3
  count              2
  count_unit         cups
  prep               cubed 1-2cm
  ```
  That would allow you to query recipes based on ingredients, and probably
  be generally easier to work with in the future.
  Oh, but it's not quite what I want. I'd like the steps in the recipe to
  reference/contain/something the ingredients. hmm
  ```
  RecipeStep
  ----------
  recipe_id
  ingredient_id (nullable, would be like RecipeIngredient above)
  text (would have to include a reference like ${ingredient} or some
        shit that would get substituted in with the ingredient)
  section?
  position?  how do you order a list that's built from a join table?
  ```
  that doesn't seem toooooo bad. Now i just need a raspberry pi
  running python/sqla
