import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    background: "#FFD073",
    backgroundColor: "#f9d072",
    borderRadius: "5px",
  },
}));

export const EditList = ({ name, id, newLists }) => {
  const [newList, setNewList] = useState(name);
  const classes = useStyles();
  const editList = (e) => {
    setNewList(e.target.value);
    newLists(id, newList);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={1} key={id}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            onChange={(e) => editList(e)}
            className={classes.paper}
            key={id}
            placeholder="Placeholder"
            fullWidth
            value={newList}
          />
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
};
