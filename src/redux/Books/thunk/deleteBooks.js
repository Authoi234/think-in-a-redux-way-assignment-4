import { deleted } from "../actions";

const deleteBooks = (bookId) => {
    return async (dispatch, getState) => {
        const response = await fetch(`http://localhost:9000/books/${bookId}`, {
            method: 'DELETE'
        });
        const book = await response.json();
        console.log(book);
        dispatch(deleted(book.id));
    }
}

export default deleteBooks;