I was thinking of doing a big client/server model for the recipes, with the
ultimate goal of defining a recipe in terms of steps and their requirements and
having some graph library figure out the logical ordering of the steps.

It was fun to think about, and I still sorta think it could make for a cool
app (especially if you could modify the number of cooks and get different
steps to maximize efficiency. kinda like a build server with a complicated app
dependency situation and multiple worker nodes). Anyway, after all that, it
was basically impossible to actually input and update a recipe!

So I'm going to leave this branch around, in case I want to remind myself how
to get started with FastApi and other docker patterns I like. Otherwise
the main branch is way more practical: serve up some Markdown files!
