import { ADDED, LOADED } from "./actionTypes";
import initialState from "./initialState";

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case LOADED:
            return action.payload;
    
        case ADDED:
            return {
                ...state,
                books: [
                    ...state.books,
                    action.payload
                ]
            };
    
        default:
            return state;
    }
};

export default reducer