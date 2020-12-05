import { OPEN_EDIT, HIDE_EDIT } from './Types'
const initialState = {
    edit: false
}
export const editReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_EDIT:
            return {...state, edit: true }
        case HIDE_EDIT:
            return {...state, edit: false }
        default:
            return state
    }
}