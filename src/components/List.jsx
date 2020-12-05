import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    background:'#FFD073',
    color: theme.palette.text.secondary,
  },
}));

export default function List({name, id}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={1} key={id}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6} sm={6}>
          <Paper className={classes.paper}>{name}</Paper>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
}
