import { combineReducers } from "redux";
import bookReducer from "./Books/reducer";
import filterReducer from './Filters/reducer';

const rootReducer = combineReducers({
    books: bookReducer,
    filters: filterReducer
});

export default rootReducer;