from sqlalchemy import Column, ForeignKey, JSON, TypeDecorator, Integer, String, Text
from sqlalchemy.orm import relationship


class Model(BaseModel):
    __abstract__ = True

    PAGE_SIZE = 50

    id = Column(Integer, primary_key=True)

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
    recipe_id = Column(Integer, ForeignKey("recipe.id"), nullable=False)

    recipe = relationship("Recipe", back_populates="steps")
    ingredients = relationship("Ingredient", back_populates="step")
