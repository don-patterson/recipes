from flask_sqlalchemy import SQLAlchemy
from re import findall

db = SQLAlchemy()


class Ingredient:
    def __init__(self, name, quantity=None, prep=None):
        self.name = name
        self.quantity = quantity
        self.prep = prep

    def as_dict(self):
        return {"name": self.name, "quantity": self.quantity, "prep": self.prep}

    class JSON(db.TypeDecorator):
        impl = db.JSON
        python_type = list

        def process_bind_param(self, value, dialect):
            """ The JSON value to store in the db """
            return [ingredient.as_dict() for ingredient in value]

        def process_result_value(self, value, dialect):
            return [Ingredient(**ingredient_dict) for ingredient_dict in value]


class Recipe(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    steps = db.relationship("Step", back_populates="recipe")

    def as_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "steps": [s.as_dict() for s in self.steps],  # n queries!
        }


class Step(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.Text, nullable=False)
    ingredients = db.Column(Ingredient.JSON, nullable=False, default=list)
    recipe_id = db.Column(db.Integer, db.ForeignKey("recipe.id"), nullable=True)
    recipe = db.relationship("Recipe", back_populates="steps")

    def as_dict(self):
        return {
            "id": self.id,
            "text": self.text,
            "recipe_id": self.recipe_id,
            "ingredients": [i.as_dict() for i in self.ingredients],
        }
