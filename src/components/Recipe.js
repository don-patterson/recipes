import React from "react";
import PropTypes from "prop-types";
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2),
  },
}));

const renderSection = ({type, title, items}) => {
  const List = type === "ingredients" ? "ul" : "ol";
  const defaultTitle = type === "ingredients" ? "Ingredients" : "Directions";

  return (
    <div>
      <Typography variant="h6">{title || defaultTitle}</Typography>
      <List>
        {items.map(item => (
          <li>{item}</li>
        ))}
      </List>
    </div>
  );
};

const Recipe = ({sections}) => {
  const classes = useStyles();
  return <div className={classes.root}>{sections.map(renderSection)}</div>;
};

Recipe.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(["ingredients", "directions"]).isRequired,
      title: PropTypes.string,
      items: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default Recipe;
