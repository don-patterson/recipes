import React, {useEffect, useState} from "react";
import {Autocomplete, TextField} from "@mui/material";

export default ({repo, onSelected}) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      setRecipes(await repo.ls("public/list"));
    };
    fetchRecipes();
  }, [repo]);

  return (
    <Autocomplete
      autoHighlight
      getOptionLabel={option => option.name}
      options={recipes}
      renderInput={params => <TextField {...params} label="Recipe" />}
      onChange={(_event, value) => onSelected(value)}
    />
  );
};
