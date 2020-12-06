import React, { useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import {List} from "../components/List";
import { useDispatch, useSelector } from "react-redux";
import { axiosLists } from "../redux/module/list/Actions";
import {EditList} from "../components/EditList";
import { editList } from "../redux/module/list/Actions";

const ForList = () => {
  const dispatch = useDispatch();

  const lists = useSelector((state) => state.lists.lists);
  const edit = useSelector((state) => state.edit.edit);
  const loading = useSelector((state) => state.loader.loading);

  useEffect(() => {
    dispatch(axiosLists());
  }, []);

  const newLists = (id, list) => {
    dispatch(editList(id, list));
  };

  if (loading) {
    return (
      <CircularProgress
        disableShrink
        style={{
          position: "relative",
          left: "50%",
          marginTop: "150px",
        }}
      />
    );
  }
  return (
    <div
      style={{
        marginTop: "150px",
      }}
    >
      {edit
        ? lists.map((list) => (
            <EditList
              name={list.name}
              id={list.id}
              newLists={newLists}
              edit={edit}
            />
          ))
        : lists.map((list) => <List name={list.name} id={list.id} />)}
    </div>
  );
};
export default ForList;
