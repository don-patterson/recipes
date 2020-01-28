from flask.views import MethodView

from recipes_api.models import Step


class StepView(MethodView):
    def get(self):
        return {step.id: str(step) for step in Step.query.all()}


def register_views(app):
    app.add_url_rule("/steps", view_func=StepView.as_view("steps"))
