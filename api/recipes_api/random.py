from random import choices, randint
from string import ascii_letters, digits

from recipes_api.models import Ingredient, Recipe, Step


def sometimes(f):
    if randint(0, 4) == 0:
        return None
    return f()


def word(length=6):
    return "".join(choices(ascii_letters, k=length))


def number(min=1, max=99):
    return randint(min, max)


def quantity():
    return f"{number()} {word(length=4)}"


def ingredient():
    return Ingredient(name=word(), quantity=sometimes(quantity), prep=sometimes(word))


def step():
    text = word()
    ingredients = []
    for i in range(number(max=4)):
        text += f" {{{i}}} {word()}"
        ingredients.append(ingredient())
    return Step(text=text, ingredients=ingredients)


def recipe():
    return Recipe(name=word(), steps=[step() for _ in range(number(max=10))])
