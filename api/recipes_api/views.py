from flask.json import JSONEncoder
from flask.views import MethodView

from recipes_api.models import Recipe, Step


class Recipes(MethodView):
    def get(self):
        return {"results": Recipe.query.all()}


class Steps(MethodView):
    def get(self):
        return {"results": Step.query.all()}


class JSONDictEncoder(JSONEncoder):
    def default(self, o):
        if hasattr(o, "as_dict"):
            return o.as_dict()
        return super().default(o)


def register_views(app):
    app.json_encoder = JSONDictEncoder
    app.add_url_rule("/steps", view_func=Steps.as_view("steps"))
    app.add_url_rule("/recipes", view_func=Recipes.as_view("recipes"))
