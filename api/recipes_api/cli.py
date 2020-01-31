from recipes_api.models import db, Ingredient, Recipe, Step
from recipes_api.random import recipe


def register_cli(app):
    @app.cli.command("init")
    def init():
        """ Reset DB tables """
        db.drop_all()
        db.create_all()

    @app.cli.command("seed")
    def seed():
        """ Seed some data for testing """
        for _ in range(10):
            db.session.add(recipe())
        db.session.commit()

    app.cli.add_command(init)
    app.cli.add_command(seed)
