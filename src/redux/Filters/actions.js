import { STATUSCHANGED } from "./actionTypes";

export const statusChanged = (status) => {
    return {
        type: STATUSCHANGED,
        payload: status,
    };
};
