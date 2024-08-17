import { updated } from "../actions";

const updateBooks = (updatedBook, id) => {
    return async (dispatch, getState) => {
        console.log('thunk called')
        const response = await fetch(`http://localhost:9000/books/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                ...updatedBook
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"   
            }
        });
        const book = await response.json();

        dispatch(updated(book))
    }
}

export default updateBooks;