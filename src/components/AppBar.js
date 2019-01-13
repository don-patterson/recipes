import React from "react";
import {
  AppBar as MuiAppBar,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginLeft: -12,
    martinRight: 20,
  },
}));

const AppBar = props => {
  const {isDrawerOpen, setDrawerOpen, recipeName} = props;
  const classes = useStyles();

  return (
    <MuiAppBar position="sticky">
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          onClick={() => setDrawerOpen(!isDrawerOpen)}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" color="inherit" noWrap>
          Recipes
          {recipeName && ` > ${recipeName}`}
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
