import { OPEN_EDIT, HIDE_EDIT } from "./Types";

export function openEdit() {
    return dispatch => {
        dispatch({ type: OPEN_EDIT })
    }


}
export function hideEdit() {
    return dispatch => {
        dispatch({ type: HIDE_EDIT })
    }
}