import React from "react";
import {Autocomplete, TextField} from "@mui/material";

export default ({options, getLabel, placeholder, onSelected}) => (
  <Autocomplete
    autoHighlight
    autoSelect
    blurOnSelect
    clearOnBlur
    fullWidth
    openOnFocus
    getOptionLabel={getLabel}
    options={options}
    renderInput={params => (
      <TextField
        {...params}
        placeholder={options.length ? placeholder : "Loading..."}
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
    onChange={(_, value, reason) => reason === "blur" && onSelected(value)}
    ListboxProps={{sx: {maxHeight: "75vh"}}}
  />
);
