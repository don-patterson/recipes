import React from "react";
import {MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import {purple} from "@material-ui/core/colors";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
  palette: {
    primary: purple,
  },
  typography: {
    useNextVariants: true,
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

const withTheme = Component => props => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Component {...props} />
  </MuiThemeProvider>
);
export {withTheme};
