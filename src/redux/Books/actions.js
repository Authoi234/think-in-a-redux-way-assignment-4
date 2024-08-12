import { ADDED, LOADED } from "./actionTypes"

export const loaded = (books) => {
    return {
        type: LOADED,
        payload: books
    }
}

export const added = (book) => {
    return {
        type: ADDED,
        payload: book
    }
}