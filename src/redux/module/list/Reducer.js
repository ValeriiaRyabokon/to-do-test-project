import { ADD_LIST, AXIOS_LISTS, EDIT_LIST, EDIT_LISTS } from "./Types";

const initialState = {
    lists: [],
    newLists: [],
};
export const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case AXIOS_LISTS:
            return {...state, lists: action.payload, newLists: action.payload };

        case ADD_LIST:
            return {...state, lists: state.lists.concat(action.payload) };
        case EDIT_LIST:
            const id = state.lists.findIndex(({ id }) => id === action.payload.id);
            return {
                ...state,
                newLists: [
                    ...state.newLists.slice(0, id),
                    action.payload,
                    ...state.newLists.slice(id + 1),
                ],
            };
        case EDIT_LISTS:
            return {...state, lists: action.payload };
        default:
            return state;
    }
};