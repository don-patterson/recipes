import React from "react";
import {Drawer as MuiDrawer} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

import RecipeList from "./RecipeList";

const useStyles = makeStyles(theme => ({
  list: {
    width: 240,
  },
}));

const Drawer = props => {
  const {isDrawerOpen, setDrawerOpen} = props;
  const classes = useStyles();

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <MuiDrawer open={isDrawerOpen} onClose={closeDrawer}>
      <div
        tabIndex={0}
        role="button"
        onClick={closeDrawer}
        onKeyDown={closeDrawer}
      >
        <RecipeList className={classes.list} />
      </div>
    </MuiDrawer>
  );
};

export default Drawer;
