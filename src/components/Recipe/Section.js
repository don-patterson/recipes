import React from "react";
import PropTypes from "prop-types";
import {Typography} from "@material-ui/core";

const Section = ({type, title, items}) => {
  const List = type === "ingredients" ? "ul" : "ol";
  const defaultTitle = type === "ingredients" ? "Ingredients" : "Directions";

  return (
    <div>
      <Typography variant="h6">{title || defaultTitle}</Typography>
      <List>
        {items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </List>
    </div>
  );
};

Section.propTypes = {
  type: PropTypes.oneOf(["ingredients", "directions"]).isRequired,
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Section;
