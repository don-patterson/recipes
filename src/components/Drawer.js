import React from "react";
import {
  Drawer as MuiDrawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

import {recipes} from "../recipes";

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
        <List className={classes.list}>
          {recipes.map(recipe => (
            <ListItem
              key={recipe.key}
              button
              component="a"
              href={`#${recipe.key}`}
            >
              <ListItemText primary={recipe.name} />
            </ListItem>
          ))}
          <ListItem button component="a" href="#SoySrirachaSauce">
            <ListItemText primary="SoySrirachaSauce" />
          </ListItem>
          <ListItem button component="a" href="#VidaliaOnionDip">
            <ListItemText primary="VidaliaOnionDip" />
          </ListItem>
        </List>
      </div>
    </MuiDrawer>
  );
};

export default Drawer;
