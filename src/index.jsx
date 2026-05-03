import React from "react";
import {createRoot} from "react-dom/client";
import {alpha, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {deepPurple} from "@mui/material/colors";
import App from "./App";

const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[100],
    },
  },
});

theme.components = {
  MuiAutocomplete: {
    styleOverrides: {
      option: {
        "&.Mui-focused": {
          backgroundColor:
            alpha(theme.palette.primary.dark, 0.5) + "!important",
        },
      },
    },
  },
};

createRoot(document.querySelector("#root")).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
