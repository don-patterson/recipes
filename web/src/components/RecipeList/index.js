import React, {PureComponent} from "react";
import ExampleWrapper from "./exampleWrapper";

class App extends PureComponent {
  state = {
    hasNextPage: true,
    isNextPageLoading: false,
    items: [],
  };

  _loadNextPage = (...args) => {
    console.log("loadNextPage", ...args, this.state);
    this.setState({isNextPageLoading: true}, () => {
      setTimeout(() => {
        this.setState(state => {
          const moreItems = [
            ...state.items,
            {name: `Test ${state.items.length}`},
            {name: `Test ${state.items.length + 1}`},
            {name: `Test ${state.items.length + 2}`},
          ];
          return {
            hasNextPage: moreItems.length < 25,
            isNextPageLoading: false,
            items: moreItems,
          };
        });
      }, 2500);
    });
  };

  render() {
    const {hasNextPage, isNextPageLoading, items} = this.state;

    return (
      <ExampleWrapper
        hasMore={hasNextPage}
        isLoading={isNextPageLoading}
        items={items}
        loadMore={this._loadNextPage}
      />
    );
  }
}

export default App;
