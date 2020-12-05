import { HIDE_MODAL, SHOW_MODAL } from './Types'
const initialState = {
    openModal: false
}
export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MODAL:
            return {...state, openModal: true }
        case HIDE_MODAL:
            return {...state, openModal: false }
        default:
            return state
    }
}