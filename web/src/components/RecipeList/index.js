import React, {PureComponent} from "react";
import InfiniteLoader from "./InfiniteLoader";
import {last, noop} from "../../util";
import {FakeApi} from "../../api";

class RecipeList extends PureComponent {
  state = {
    recipes: [],
    loadMore: noop,
  };

  loadRecipes = () => {
    this.setState({loadMore: noop}, () => {
      const page = {};
      const lastRecipe = last(this.state.recipes);
      if (lastRecipe !== undefined) {
        page.after = lastRecipe.id;
      }
      FakeApi.get("recipes", page).then(nextPage => {
        if (nextPage.length === 0) {
          return;
        }
        this.setState({
          recipes: [...this.state.recipes, ...nextPage],
          loadMore: this.loadRecipes,
        });
      });
    });
  };

  componentDidMount() {
    this.loadRecipes();
  }

  render() {
    return (
      <InfiniteLoader
        items={this.state.recipes}
        loadMore={this.state.loadMore}
      />
    );
  }
}

export default RecipeList;
