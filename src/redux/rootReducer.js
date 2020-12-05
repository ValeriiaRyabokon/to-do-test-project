import { combineReducers } from 'redux'
import { listReducer } from './module/list/Reducer'
export const rootReducer = combineReducers({
    lists: listReducer
})