import React, {useEffect, useState} from "react";
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {useParams} from "react-router-dom";

import {FakeApi} from "../../api";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2),
  },
}));

const Recipe = () => {
  const classes = useStyles();
  const {id} = useParams();

  const [steps, setSteps] = useState([]);

  useEffect(() => {
    FakeApi.get("steps", {recipe_id: id}).then(setSteps);
    return () => setSteps([]);
  }, [id]);

  return (
    <div className={classes.root}>
      <Typography variant="h5">{`Recipe ${id}!`}</Typography>
      {steps.map(step => (
        <Typography key={step.id}>{step.text}</Typography>
      ))}
    </div>
  );
};

export default Recipe;
