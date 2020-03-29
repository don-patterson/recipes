from sqlalchemy import Column, ForeignKey, JSON, TypeDecorator, Integer, String, Text
from sqlalchemy.orm import relationship
from .database import Model


class Ingredient(Model):
    __tablename__ = "ingredient"
    name = Column(String(255), nullable=False)
    quantity = Column(String(255), nullable=False)
    prep = Column(String(255), nullable=False)
    step_id = Column(Integer, ForeignKey("step.id"), nullable=False)
    step = relationship("Step", back_populates="ingredients")


class Recipe(Model):
    __tablename__ = "recipe"
    name = Column(String(255), nullable=False)
    steps = relationship("Step", back_populates="recipe")


class Step(Model):
    __tablename__ = "step"
    text = Column(Text, nullable=False)
    ingredients = relationship("Ingredient", back_populates="step")
    recipe_id = Column(Integer, ForeignKey("recipe.id"), nullable=False)
    recipe = relationship("Recipe", back_populates="steps")
