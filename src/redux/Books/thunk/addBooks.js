import { added } from "../actions";

const addBooks = (newBook) => {
    return async (dispatch, getState) => {
        const response = await fetch('http://localhost:9000/books', {
            method: 'POST',
            body: JSON.stringify(newBook),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const book = await response.json();
        dispatch(added(book))
    }
}

export default addBooks