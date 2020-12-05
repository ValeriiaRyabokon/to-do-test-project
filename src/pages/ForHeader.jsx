import React from "react";
import { Header } from "../components/Header";
import ModalAdd from "../components/ModalAdd";
import { useDispatch, useSelector } from "react-redux";
import { showModal, hideModal } from "../redux/module/modal/Actions";
import { addList, editLists } from "../redux/module/list/Actions";
import { openEdit } from "../redux/module/list/editList/Actions";

const ForHeader = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal.openModal);
  const edit = useSelector((state) => state.edit.edit);
  const newList=useSelector(state=>state.newLists.newLists)


  const visibleModal = () => {
    dispatch(showModal());
  };
  function unVisibleModal() {
    dispatch(hideModal());
  }
  const createNewList = (list) => {
    dispatch(addList(list));
  };
  const editList = () => {
    dispatch(openEdit());
  };
  const closeEdit = () => {
    console.log('new list is here', newList)
    dispatch(editLists(newList));
  };
  
  return (
    <>
      <Header
        closeEdit={closeEdit}
        editList={editList}
        openModal={visibleModal}
        edit={edit}

      />
      <ModalAdd
        createNewList={createNewList}
        visible={modal}
        unVisible={unVisibleModal}
      />
    </>
  );
};
export default ForHeader;
