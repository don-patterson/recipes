from flask_sqlalchemy import SQLAlchemy
from re import findall

db = SQLAlchemy()


class Model(db.Model):
    __abstract__ = True

    PAGE_SIZE = 3

    id = db.Column(db.Integer, primary_key=True)

    @classmethod
    def next_page(cls, after=None):
        query = cls.query
        if after is not None:
            query = query.filter(cls.id > after)
        return query.order_by(cls.id).limit(cls.PAGE_SIZE).all()

    @classmethod
    def last_page(cls, before=None):
        query = cls.query
        if before is not None:
            query = query.filter(cls.id < before)
        page = query.order_by(cls.id.desc()).limit(cls.PAGE_SIZE).all()
        page.reverse()
        return page


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


class Recipe(Model):
    name = db.Column(db.String(255), nullable=False)
    steps = db.relationship("Step", back_populates="recipe")

    def as_dict(self):
        return {"id": self.id, "name": self.name}


class Step(Model):
    text = db.Column(db.Text, nullable=False)
    ingredients = db.Column(Ingredient.JSON, nullable=False, default=list)
    recipe_id = db.Column(db.Integer, db.ForeignKey("recipe.id"), nullable=True)
    recipe = db.relationship("Recipe", back_populates="steps")

    def as_dict(self):
        return {
            "id": self.id,
            "text": self.text,
            "ingredients": [i.as_dict() for i in self.ingredients],
        }
