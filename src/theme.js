import React from "react";
import {MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import {purple} from "@material-ui/core/colors";
import CssBaseline from "@material-ui/core/CssBaseline";
import {HashRouter} from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: purple,
  },
  typography: {
    useNextVariants: true,
  },
});

const withTheme = Component => {
  return props => (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter hashType="noslash">
        <Component {...props} />
      </HashRouter>
    </MuiThemeProvider>
  );
};

export {withTheme};
