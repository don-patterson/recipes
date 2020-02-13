import React from "react";
import {FixedSizeList} from "react-window";
import ReactWindowInfiniteLoader from "react-window-infinite-loader";
import {ListItem, ListItemText} from "@material-ui/core";
import {noop, useWindowDimensions} from "../../util";

const InfiniteLoader = ({items, loadMore}) => {
  // Load a page at a time, and append it to the list. The last item in the list
  // will trigger `loadMore` when you scroll near it unless `loadMore === noop`.
  // Set it this way to prevent multiple concurrent calls to `loadMore`, of if the end of
  // your list has been reached.
  const {height} = useWindowDimensions();

  const isFinishedLoading =
    loadMore === noop ? () => true : index => index !== items.length - 1;

  const renderItem = ({index, style}) => {
    const recipe = items[index];
    return (
      <ListItem style={style} button component="a" href={`#${recipe.id}`}>
        <ListItemText primary={recipe.name} />
      </ListItem>
    );
  };

  const renderList = props => (
    <FixedSizeList
      className="List"
      height={height}
      itemCount={items.length}
      itemSize={48}
      width={240}
      {...props}
    >
      {renderItem}
    </FixedSizeList>
  );

  return (
    <ReactWindowInfiniteLoader
      isItemLoaded={isFinishedLoading}
      itemCount={items.length}
      loadMoreItems={loadMore}
    >
      {renderList}
    </ReactWindowInfiniteLoader>
  );
};

export default InfiniteLoader;
