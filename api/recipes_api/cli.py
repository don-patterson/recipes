from recipes_api.models import db, Ingredient, Recipe, Step


def register_cli(app):
    @app.cli.command("init")
    def init():
        """ Reset DB tables """
        db.drop_all()
        db.create_all()

    @app.cli.command("seed")
    def seed():
        """ Seed some data for testing """
        recipe = Recipe(name="Test Recipe")
        Step(
            text="Add {0} and {1} to a pot.",
            ingredients=[
                Ingredient(name="carrots", quantity="2 cups", prep="cubed ~2cm"),
                Ingredient(name="potatoes", quantity="4 cups", prep="cubed ~2cm"),
            ],
            recipe=recipe,
        )
        Step(
            text="Add {0} and bring to a boil",
            ingredients=[Ingredient(name="chicken broth", quantity="4 cups")],
            recipe=recipe,
        )
        Step(text="And some other stuff", recipe=recipe)
        db.session.add(recipe)
        db.session.commit()

    app.cli.add_command(init)
    app.cli.add_command(seed)
