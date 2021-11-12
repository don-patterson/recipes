import React from "react";
import ReactDOM from "react-dom";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import App from "./App";

const theme = createTheme({});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.querySelector("#root")
);
