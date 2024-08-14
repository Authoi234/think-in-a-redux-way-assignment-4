 import React from 'react';
import '../../CSS/MainStyle.css';
import { useDispatch, useSelector } from 'react-redux';
import addBooks from './../../redux/Books/thunk/addBooks';
const Form = () => {
    const dispatch = useDispatch();
    const books = useSelector(state => state.books);

    const nextBookId = (books) => {
        const maxId = books.reduce((maxId, book) => Math.max(book.id, maxId), -1);
        return maxId + 1;
    };


    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const author = form.author.value;
        const thumbnail = form.thumbnail.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const featured = form.featured.checked;

        const newBook = {
            name,
            author,
            thumbnail,
            price,
            rating,
            featured,
            id: nextBookId(books)
        };

        dispatch(addBooks(newBook));
    };

    return (
        <div class="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
            <h4 class="mb-8 text-xl font-bold text-center">Add New Book</h4>
            <form class="book-form" onSubmit={handleSubmit}>
                <div class="space-y-2">
                    <label htmlFor="name">Book Name</label>
                    <input required class="text-input" type="text" id="input-Bookname" name="name" />
                </div>

                <div class="space-y-2">
                    <label htmlFor="category">Author</label>
                    <input required class="text-input" type="text" id="input-Bookauthor" name="author" />
                </div>

                <div class="space-y-2">
                    <label htmlFor="image">Image Url</label>
                    <input required class="text-input" type="text" id="input-Bookthumbnail" name="thumbnail" />
                </div>

                <div class="grid grid-cols-2 gap-8 pb-4">
                    <div class="space-y-2">
                        <label htmlFor="price">Price</label>
                        <input required class="text-input" type="number" id="input-Bookprice" name="price" />
                    </div>

                    <div class="space-y-2">
                        <label htmlFor="quantity">Rating</label>
                        <input required class="text-input" type="number" id="input-Bookrating" name="rating" min="1" max="5" />
                    </div>
                </div>

                <div class="flex items-center">
                    <input id="input-Bookfeatured" type="checkbox" name="featured" class="w-4 h-4" />
                    <label htmlFor="featured" class="ml-2 text-sm"> This is a featured book </label>
                </div>

                <button type="submit" class="submit" id="submit">Add Book</button>
            </form>
        </div>
    );
};

export default Form;