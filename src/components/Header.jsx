import React from "react";
import { makeStyles } from "@material-ui/core";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Container,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
   height:'150px',
   background:'#7B68EE',

  },
  toolbar: {
    display: "flex",
    flexDirection: "column",
    padding:'20px'
  },
  buttonStyle:{
    marginLeft:'24px',
    background:'#FFC15A'
  }
}));

export const Header = ({ openModal, editList, edit, closeEdit }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.root}>
        <Container fixed>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h4" gutterBottom paragraph >
              TO DO LIST
            </Typography>
            <span
              style={{
                display: "flex",
              }}
            >
              <Box mr={3}>
                <Button
                  onClick={() => openModal()}
                  size="medium"
                  variant="contained"

                  className={classes.buttonStyle}
                >
                  ADD
                </Button>
              </Box>
              {
              edit? <Box mr={3}>
                <Button
                onClick={()=>closeEdit()}
                className={classes.buttonStyle}
                  size="medium"
                  variant="contained"
                >
                  SAVE
                </Button>
              </Box> :
              <Box mr={3}>
              <Button
              onClick={()=>editList()}
              className={classes.buttonStyle}
                size="medium"
                variant="contained"
              >
                EDIT
              </Button>
            </Box>
            }
            </span>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
