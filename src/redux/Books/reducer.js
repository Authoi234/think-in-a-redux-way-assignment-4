import { ADDED, DELETED, LOADED, UPDATED } from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState.books, action) => {
    switch (action.type) {
        case LOADED:
            return action.payload;

        case ADDED:
            return [
                ...state,
                action.payload
            ];

        case DELETED:
            return state.filter((singleBook) => singleBook.id !== action.payload);
            
        case UPDATED:
            return state;

        default:
            return state;
    }
};

export default reducer