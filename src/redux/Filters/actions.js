import { SEARCH, STATUSCHANGED } from "./actionTypes";

export const statusChanged = (status) => {
    return {
        type: STATUSCHANGED,
        payload: status,
    };
};

export const searched = (searchText) => {
    return {
        type: SEARCH,
        payload: searchText,
    };
};
