import { combineReducers } from "redux";
import reducer from "./Books/reducer";

const rootReducer = combineReducers({
    books: reducer
});

export default rootReducer;