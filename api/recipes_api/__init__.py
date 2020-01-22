from flask import Flask
from os import environ

from recipes_api.models import db, Ingredient


def create_app():
    app = Flask(__name__)
    app.config.update(
        SQLALCHEMY_ECHO=False,
        SQLALCHEMY_TRACK_MODIFICATIONS=False,
        SQLALCHEMY_DATABASE_URI=environ["SQLALCHEMY_DATABASE_URI"],
    )
    db.init_app(app)

    register_routes(app)
    return app


def register_routes(app):
    @app.route("/init")
    def init():
        db.drop_all()
        db.create_all()
        return {"done": True}

    @app.route("/test")
    def test():
        if Ingredient.query.count() < 1:
            db.session.add(Ingredient(name="carrots", quantity="3", prep="chopped"))
            db.session.add(
                Ingredient(name="peas", quantity="2x375ml can", prep="drained")
            )
            db.session.add(Ingredient(name="eggs", quantity="2", prep=""))
            db.session.commit()
        return {
            ingredient.name: ingredient.phrase()
            for ingredient in Ingredient.query.all()
        }
