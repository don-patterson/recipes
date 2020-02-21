import React, {useState, useEffect} from "react";
import InfiniteLoader from "./InfiniteLoader";
import {useWindowDimensions, last} from "../../util";
import {FakeApi} from "../../api";

const firstPageRequest = FakeApi.get("recipes");

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const {height} = useWindowDimensions();

  const loadMore = async () => {
    // TODO: figure out if it would be better to have the request in state, and
    // trigger an effect when the request was updated. For now this seems to
    // work ok, but I htink you can still get it into a bad state with crazy
    // clicking and scrolling.
    setLoading(true);
    const nextPage = await FakeApi.get("recipes", {after: last(recipes).id});
    setRecipes([...recipes, ...nextPage]);
    setHasMore(nextPage.length > 0);
    setLoading(false);
  };

  useEffect(() => {
    firstPageRequest.then(firstPage => {
      setRecipes(firstPage);
      setHasMore(firstPage.length > 0);
      setLoading(false);
    });
  }, []);

  return (
    <InfiniteLoader
      items={recipes}
      isLoading={isLoading}
      hasMore={hasMore}
      loadMore={loadMore}
      height={height}
      width={240}
    />
  );
};

export default RecipeList;
