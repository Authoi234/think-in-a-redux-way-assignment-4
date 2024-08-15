import { ADDED, DELETED, LOADED, UPDATED } from "./actionTypes"

export const loaded = (books) => {
    return {
        type: LOADED,
        payload: books
    }
};

export const added = (book) => {
    return {
        type: ADDED,
        payload: book
    }
};

export const deleted = (id) => {
    return {
        type: DELETED,
        payload: id
    }
};

export const updated = (updatedBook) => {
    return {
        type: UPDATED,
        payload: updatedBook
    }
};