from flask import Flask
from os import environ

from recipes_api.cli import register_cli
from recipes_api.models import db
from recipes_api.views import register_views


def create_app():
    app = Flask(__name__)
    app.config.update(
        SQLALCHEMY_DATABASE_URI=environ["SQLALCHEMY_DATABASE_URI"],
        SQLALCHEMY_ECHO=environ.get("SQLALCHEMY_ECHO") == "True",
        SQLALCHEMY_TRACK_MODIFICATIONS=False,
    )
    db.init_app(app)

    register_cli(app)
    register_views(app)

    return app
