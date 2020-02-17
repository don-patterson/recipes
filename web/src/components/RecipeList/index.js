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
