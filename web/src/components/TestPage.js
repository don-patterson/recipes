import React, {useState} from "react";
import {Typography, Chip, Avatar} from "@material-ui/core";
import {Done, Face, Home} from "@material-ui/icons";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2),
  },
  orange: {
    backgroundColor: "orange",
  },
  green: {
    backgroundColor: "green",
  },
}));

const TwoLine = () => {
  const classes = useStyles();
  return (
    <Chip
      className={classes.orange}
      label={
        <div>
          Carrots
          <br />2 cups, chopped
        </div>
      }
      clickable
      onClick={() => console.log("click")}
      color="primary"
    />
  );
};

const OneLine = () => {
  const classes = useStyles();
  return (
    <Chip
      className={classes.orange}
      label="Carrots | 2 cups, chopped"
      clickable
      onClick={() => console.log("click")}
      color="primary"
    />
  );
};

const Brief = () => {
  const classes = useStyles();
  return (
    <Chip
      className={classes.orange}
      label="Carrots | 2c"
      clickable
      onClick={() => console.log("click")}
      color="primary"
    />
  );
};

const TestPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h5">Test Page</Typography>
      Two lines looks like <TwoLine /> that <br />
      What about if it was just <OneLine /> a single line. <br />
      Or it could just exclude the prep part <Brief /> <br />
    </div>
  );
};

export default TestPage;
