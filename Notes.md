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
