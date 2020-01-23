from flask import Flask
from os import environ

from recipes_api.models import db, Ingredient


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
        db.session.add(Ingredient(name="carrots", quantity="3", prep="chopped"))
        db.session.add(Ingredient(name="peas", quantity="2x375ml can", prep="drained"))
        db.session.add(Ingredient(name="eggs", quantity="2", prep=""))
        db.session.commit()

    app.cli.add_command(init)
    app.cli.add_command(seed)


def register_routes(app):
    @app.route("/ingredients")
    def test():
        return {
            ingredient.name: ingredient.phrase()
            for ingredient in Ingredient.query.all()
        }
