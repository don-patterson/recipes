from flask_sqlalchemy import SQLAlchemy
from re import findall

db = SQLAlchemy()


class Ingredient(db.Model):
    """
    Storing things like:
    - 2 cups potatoes, peeled and cubed
    - 1 tsp salt
    - 1 large onion, diced
    - 3 carrots
   """

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    prep = db.Column(db.String(255), nullable=False)
    quantity = db.Column(db.String(255), nullable=False)

    def phrase(self):
        """ This might be useless, but ah well """
        if self.prep:
            return f"{self.quantity} {self.name} ({self.prep})"
        return f"{self.quantity} {self.name}"


class Step(db.Model):
    """
    A step in a recipe. Like: "Whisk 2 eggs and 1 clove of minced garlic in a large bowl"

    I'm not quite sure how to do this. I don't think I can enforce my stupid
    requirements with a database alone. I want like "Whisk {ingredient:123} and {ingredient:456} in a large bowl"
    and that would reference the "2 eggs" and "1 clove of minced garlic" ingredients. So just for convenience I think
    you'd need a join table for Steps <--> Ingredients so that you could fill in the step without doing 100 queries.

    But at the same time, you wouldn't want the backend filling that in, necessarily.

    Anyway, I think I'll give this a try, but there's got to be a better way.

    """

    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.Text, nullable=False)

    def ingredient_ids():
        return [
            int(ingredient_id)
            for ingredient_id in findall("{ingredient:(\d+)}", self.text)
        ]
