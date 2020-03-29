from typing import List
from pydantic import BaseModel as BaseSchema


class ModelSchema(BaseSchema):
    id: int

    class Config:
        orm_mode = True


class Ingredient(BaseSchema):
    name: str
    quantity: str = None
    prep: str = None


class Step(ModelSchema):
    text: str
    ingredients: List[Ingredient]
    recipe_id: int


class Recipe(ModelSchema):
    name: str
