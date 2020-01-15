import React from "react";
import PropTypes from "prop-types";
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

import Section from "./Section";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2),
  },
}));

const Recipe = ({name, sections}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h5">{name}</Typography>
      {sections.map((section, index) => (
        <Section key={index} {...section} />
      ))}
    </div>
  );
};

Recipe.propTypes = {
  name: PropTypes.string.isRequired,
  sections: PropTypes.arrayOf(Section).isRequired,
};

export default Recipe;
