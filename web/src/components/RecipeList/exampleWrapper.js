import React from "react";
import {FixedSizeList as List} from "react-window";
import InfiniteLoader from "react-window-infinite-loader";

export default function InfinitePageLoader({
  hasMore,
  isLoading,
  items,
  loadMore,
}) {
  // If there are more items to be loaded then add an extra row to hold a loading spinner.
  const itemCount = hasMore ? items.length + 1 : items.length;
  const isItem = i => i < items.length;
  const loadMoreItems = isLoading ? () => {} : loadMore;

  const Item = ({index, style}) => (
    <div style={style}>{isItem(index) ? items[index].name : "Loading..."}</div>
  );

  return (
    <InfiniteLoader
      isItemLoaded={isItem}
      itemCount={itemCount}
      loadMoreItems={loadMoreItems}
      threshold={3}
    >
      {props => (
        <List
          className="List"
          height={150}
          itemCount={itemCount}
          itemSize={48}
          width={300}
          {...props}
        >
          {Item}
        </List>
      )}
    </InfiniteLoader>
  );
}
