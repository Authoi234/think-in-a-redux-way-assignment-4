import { ADDED, LOADED } from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState.books, action) => {
    switch (action.type) {
        case LOADED:
            return action.payload;

        case ADDED:
            return [
                ...state,
                action.payload
            ]

        default:
            return state;
    }
};

export default reducer