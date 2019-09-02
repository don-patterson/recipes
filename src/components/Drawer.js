import React from "react";
import {
  Drawer as MuiDrawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
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
          <ListItem button component="a" href="#AsianDumplingSauce">
            <ListItemText primary="AsianDumplingSauce" />
          </ListItem>
          <ListItem button component="a" href="#BroccoliCasserole">
            <ListItemText primary="BroccoliCasserole" />
          </ListItem>
          <ListItem button component="a" href="#BroccoliSlawSalad">
            <ListItemText primary="BroccoliSlawSalad" />
          </ListItem>
          <ListItem button component="a" href="#ButternutSquashCassrole">
            <ListItemText primary="ButternutSquashCassrole" />
          </ListItem>
          <ListItem button component="a" href="#ChickenBroccoliCasserole">
            <ListItemText primary="ChickenBroccoliCasserole" />
          </ListItem>
          <ListItem button component="a" href="#Chili">
            <ListItemText primary="Chili" />
          </ListItem>
          <ListItem button component="a" href="#ChristmasMorningSaver">
            <ListItemText primary="ChristmasMorningSaver" />
          </ListItem>
          <ListItem button component="a" href="#DakGalbi">
            <ListItemText primary="DakGalbi" />
          </ListItem>
          <ListItem button component="a" href="#DillPickleSoup">
            <ListItemText primary="DillPickleSoup" />
          </ListItem>
          <ListItem button component="a" href="#EggplantMincedPork">
            <ListItemText primary="EggplantMincedPork" />
          </ListItem>
          <ListItem button component="a" href="#FestiveTurnip">
            <ListItemText primary="FestiveTurnip" />
          </ListItem>
          <ListItem button component="a" href="#GrilledSweetPotato">
            <ListItemText primary="GrilledSweetPotato" />
          </ListItem>
          <ListItem button component="a" href="#LeekPotatoSoup">
            <ListItemText primary="LeekPotatoSoup" />
          </ListItem>
          <ListItem button component="a" href="#MintyCookies">
            <ListItemText primary="MintyCookies" />
          </ListItem>
          <ListItem button component="a" href="#ShrimpSquashRisotto">
            <ListItemText primary="ShrimpSquashRisotto" />
          </ListItem>
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
