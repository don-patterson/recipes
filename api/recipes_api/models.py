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

    def __str__(self):
        text = self.name
        if self.quantity:
            text = f"{self.quantity} {text}"
        if self.prep:
            text = f"{text} ({self.prep})"
        return text

    class JSON(db.TypeDecorator):
        impl = db.JSON
        python_type = list

        def process_bind_param(self, value, dialect):
            """ The JSON value to store in the db """
            return [ingredient.as_dict() for ingredient in value]

        def process_result_value(self, value, dialect):
            return [Ingredient(**ingredient_dict) for ingredient_dict in value]


class Step(db.Model):
    """
    A step in a recipe. Like: "Whisk 2 eggs and 1 clove garlic (minced) in a large bowl"
    This would be stored like:
      text = "Whisk {0} and {1} in a large bowl"
      ingredients = [
          {"name": "eggs", "quantity": "2"},
          {"name": "garlic", "quantity": "1 clove", "prep": "minced"},
      ]
    """

    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.Text, nullable=False)
    ingredients = db.Column(Ingredient.JSON, nullable=False, default=list)

    required_by_id = db.Column(db.Integer, db.ForeignKey("step.id"), nullable=True)
    required_by = db.relationship("Step", remote_side=id, backref="requirements")

    def __str__(self):
        return self.text.format(*self.ingredients)
