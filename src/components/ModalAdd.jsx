import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import {
  DialogTitle,
  DialogContent,
  Button,
  Dialog,
  TextField,
  DialogActions,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  dialogTitle: {
    textAlign: "center",
    background: "#7B68EE",
    color:'white'
  },
}));

const ModalAdd = ({ visible, unVisible, createNewList }) => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState("");

  const newList = (list) => {
    createNewList(list);
    setInputValue("");
  };

  if (!visible) {
    return null;
  }
  return (
    <div>
      <Dialog
        open={visible}
        aria-labelledby="form-dialog-title"
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle className={classes.dialogTitle} id="form-dialog-title">
          Add List
        </DialogTitle>
        <DialogContent>
          <TextField
            style={{
              height: "100px",
            }}
            multiline
            autoFocus
            margin="dense"
            id="list"
            label="New List"
            type="text"
            fullWidth
            onChange={(event) => setInputValue(event.target.value)}
            value={inputValue}
          />
        </DialogContent>
        <DialogActions
          style={{
            justifyContent: "center",
          }}
        >
          <Button
            onClick={() => newList(inputValue)}
            variant="contained"
            style={{
              background:'#FFC15A'
            }}
          >
            Create
          </Button>
          <Button
            onClick={() => unVisible()}
            variant="contained"
            color="secondary"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalAdd;
