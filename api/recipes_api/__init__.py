from flask import Flask
from os import environ

from recipes_api.models import db, Step


def create_app():
    app = Flask(__name__)
    app.config.update(
        SQLALCHEMY_DATABASE_URI=environ["SQLALCHEMY_DATABASE_URI"],
        SQLALCHEMY_ECHO=True,
        SQLALCHEMY_TRACK_MODIFICATIONS=False,
    )
    db.init_app(app)

    register_cli(app)
    register_routes(app)

    return app


def register_cli(app):
    @app.cli.command("init")
    def init():
        """ Reset DB tables """
        db.drop_all()
        db.create_all()

    @app.cli.command("seed")
    def seed():
        """ Seed some data for testing """
        db.session.add(
            Step(
                text="Add {0} and {1} to a pot.",
                ingredients=[
                    {"name": "carrots", "quantity": "2 cups", "prep": "cubed ~2cm"},
                    {"name": "potatoes", "quantity": "4 cups", "prep": "cubed ~2cm"},
                ],
            )
        )
        db.session.add(
            Step(
                text="Add {0} and bring to a boil",
                ingredients=[{"name": "chicken broth", "quantity": "4 cups"}],
            ),
        )
        db.session.add(Step(text="And some other stuff"))
        db.session.commit()

    app.cli.add_command(init)
    app.cli.add_command(seed)


def register_routes(app):
    @app.route("/steps")
    def steps():
        return {step.id: step.sentence() for step in Step.query.all()}
