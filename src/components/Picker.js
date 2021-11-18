import React, {useEffect, useState} from "react";
import {Autocomplete, TextField} from "@mui/material";

export default ({repo, onSelected}) => {
  const [isLoading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      setRecipes(await repo.ls("public/list"));
    };
    fetchRecipes();
    setLoading(false);
  }, [repo]);

  return (
    <Autocomplete
      autoHighlight
      autoSelect
      blurOnSelect
      clearOnBlur
      fullWidth
      openOnFocus
      getOptionLabel={option => option.name.replace(/\.md$/, "")}
      options={recipes}
      renderInput={params => (
        <TextField
          {...params}
          placeholder={isLoading ? "Loading..." : "Select a Recipe"}
          sx={{
            "&.MuiOutlinedInput-root": {
              color: "primary.contrastText",
              "& fieldset": {
                borderColor: "primary.contrastText",
              },
              "&:hover fieldset": {
                borderColor: "primary.contrastText",
              },
              "&.Mui-focused fieldset": {
                borderColor: "primary.contrastText",
              },
            },
          }}
        />
      )}
      onChange={(_event, value) => onSelected(value)}
      ListboxProps={{sx: {maxHeight: "75vh"}}}
    />
  );
};
