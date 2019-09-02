import React from "react";
import {
  Drawer as MuiDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import {Home, Help} from "@material-ui/icons";
import {makeStyles} from "@material-ui/styles";

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
          <ListItem button component="a" href="#">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component="a" href="#example">
            <ListItemIcon>
              <Help />
            </ListItemIcon>
            <ListItemText primary="Test" />
          </ListItem>
        </List>
      </div>
    </MuiDrawer>
  );
};

export default Drawer;
