import { combineReducers } from 'redux'
import { listReducer } from './module/list/Reducer'
import { loaderReducer } from './module/list/loader/Reducer'
import { modalReducer } from './module/modal/Reducer'
import { editReducer } from './module/list/editList/Reducer'
export const rootReducer = combineReducers({
    lists: listReducer,
    loader: loaderReducer,
    modal: modalReducer,
    edit: editReducer,
    newLists: listReducer
})