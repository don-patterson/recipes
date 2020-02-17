import React from "react";
import {FixedSizeList} from "react-window";
import ReactWindowInfiniteLoader from "react-window-infinite-loader";
import {ListItem, ListItemText} from "@material-ui/core";
import {noop} from "../../util";

const InfiniteLoader = ({
  items,
  isLoading,
  hasMore,
  loadMore,
  height,
  width,
}) => {
  // every item is "loaded" except the last one
  const isItemLoaded = index => !hasMore || index !== items.length - 1;
  const loadMoreItems = isLoading ? noop : loadMore;

  const renderItem = ({index, style}) => {
    const item = items[index];
    return (
      <ListItem style={style} button component="a" href={`#${item.id}`}>
        <ListItemText primary={item.name} />
      </ListItem>
    );
  };

  const renderList = props => (
    <FixedSizeList
      itemCount={items.length}
      itemSize={48}
      height={height}
      width={width}
      {...props}
    >
      {renderItem}
    </FixedSizeList>
  );

  return (
    <ReactWindowInfiniteLoader
      isItemLoaded={isItemLoaded}
      itemCount={items.length}
      loadMoreItems={loadMoreItems}
    >
      {renderList}
    </ReactWindowInfiniteLoader>
  );
};

export default InfiniteLoader;
