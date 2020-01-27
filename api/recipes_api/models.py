from flask_sqlalchemy import SQLAlchemy
from re import findall

db = SQLAlchemy()


class Step(db.Model):
    """
    A step in a recipe. Like: "Whisk 2 eggs and 1 clove garlic (minced) in a large bowl"
    This would be stored like:
      text = "Whisk {0} and {1} in a large bowl"
      ingredients = [
          {"name": "eggs", "quantity": "2"},
          {"name": "garlic", "quantity": "1 clove", "prep": "minced"},
      ]
    """

    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.Text, nullable=False)
    ingredients = db.Column(db.JSON, nullable=False, default=list)

    required_by_id = db.Column(db.Integer, db.ForeignKey("step.id"), nullable=True)
    required_by = db.relationship("Step", remote_side=id, backref="requirements")

    @staticmethod
    def _format_ingredient(ingredient):
        """
        This is just for fun really. It takes something like:
            {"name": "garlic", "quantity": "1 clove", "prep": "minced"}
        and returns:
            "1 clove garic (minced)"
        Both `quantity` and `prep` are optional.
        """

        if quantity := ingredient.get("quantity"):
            formatted = f"{quantity} {ingredient['name']}"
        else:
            formatted = f"{ingredient['name']}"

        if prep := ingredient.get("prep"):
            return f"{formatted} ({prep})"
        return formatted

    def sentence(self):
        return self.text.format(
            *(self._format_ingredient(ingredient) for ingredient in self.ingredients)
        )
