import axios from 'axios'
import { AXIOS_LISTS, ADD_LIST, EDIT_LIST, EDIT_LISTS } from './Types';
import { showLoader, hideLoader } from './loader/Actions';
import { hideModal } from '../modal/Actions'
import { hideEdit } from './editList/Actions'
export function axiosLists() {
    return dispatch => {
        dispatch(showLoader())
        axios
            .get("http://localhost:3001/lists")
            .then(({ data }) => {
                dispatch({ type: AXIOS_LISTS, payload: data })
            });
        dispatch(hideLoader())
    }
}
export function addList(list) {
    return dispatch => {
        axios
            .post("http://localhost:3001/lists", {
                name: list,
            })
            .then(({ data }) => {
                dispatch({ type: ADD_LIST, payload: data })
            })
        dispatch(hideModal())
    }
}

export function editList(id, list) {
    return dispatch => {
        const data = { id: id, "name": list }
        dispatch({ type: EDIT_LIST, payload: data })
    }
}
export function editLists(newList) {
    console.log('we are start', newList)
    return dispatch => {
        axios
            .put("http://localhost:3001/lists", {
                newList
            })
            .then(({ data }) => {
                console.log('new list is', data)
                dispatch({ type: EDIT_LISTS, payload: data })
            })
            .catch(() => {
                console.log("Не вдалося оновити список");
            });
        dispatch(hideEdit())
    }
}