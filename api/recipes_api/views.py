from flask import request
from flask.json import JSONEncoder
from flask.views import MethodView

from recipes_api.models import Recipe, Step


class ApiView(MethodView):
    @classmethod
    def add_url_rules(cls, app):
        view_func = cls.as_view(cls.__name__)
        list_url = cls.url
        item_url = f"{cls.url}/<int:id>"

        if getattr(cls, "get", None):
            app.add_url_rule(list_url, view_func=view_func, methods=["GET"])

        if getattr(cls, "get_one", None):
            app.add_url_rule(item_url, view_func=view_func, methods=["GET"])

    def dispatch_request(self, *args, **kwargs):
        if request.method.lower() == "get" and kwargs.get("id") is not None:
            return self.get_one(*args, **kwargs)
        return super().dispatch_request(*args, **kwargs)


def _int_param(key):
    return int(request.args[key]) if key in request.args else None


def params(*keys):  # TODO: do actual validation
    return {key: _int_param(key) for key in keys}


class RecipeView(ApiView):
    url = "/recipes"

    def get(self):
        page_params = params("after", "before")
        if page_params["before"] is not None:
            return {"results": Recipe.last_page(before=page_params["before"])}
        return {"results": Recipe.next_page(after=page_params["after"])}

    def get_one(self, id):
        return {"result": Recipe.query.get(id)}


class StepView(ApiView):
    url = "/steps"

    def get(self):
        return {"results": Step.query.filter_by(**params("recipe_id")).all()}


class CrawlView(ApiView):
    """ Dump the important database contents in a giant JSON file
        so I can keep the react site static!

        Endpoint data is dumped in {url: contents} pairs.
    """

    url = "/crawl"

    def get(self):
        endpoint_data = {"/recipes": Recipe.next_page()}

        for recipe in Recipe.query.all():
            endpoint_data.update(
                {
                    f"/recipes?after={recipe.id}": Recipe.next_page(after=recipe.id),
                    f"/recipes?before={recipe.id}": Recipe.last_page(before=recipe.id),
                    f"/steps?recipe_id={recipe.id}": recipe.steps,
                }
            )

        return endpoint_data


class JSONDictEncoder(JSONEncoder):
    def default(self, o):
        if hasattr(o, "as_dict"):
            return o.as_dict()
        return super().default(o)


def register_views(app):
    app.json_encoder = JSONDictEncoder
    RecipeView.add_url_rules(app)
    StepView.add_url_rules(app)
    CrawlView.add_url_rules(app)
