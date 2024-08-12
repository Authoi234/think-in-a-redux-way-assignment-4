import { loaded } from "../actions";

const fetchBookss =  async (dispatch, getState) => {
    const response = await fetch('http://localhost:9000/books');
    const books = await response.json();
    dispatch(loaded(books))
}

export default fetchBookss