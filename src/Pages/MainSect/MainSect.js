import React, { useState } from 'react';
import Form from './Form';
import '../../CSS/MainStyle.css';
import Card from '../../Components/Card';
import { useDispatch, useSelector } from 'react-redux';
import FilterButtons from './FilterButtons';
import deleteBooks from '../../redux/Books/thunk/deleteBooks';

const MainSect = () => {
    const books = useSelector(state => state.books);
    const filters = useSelector((state) => state.filters);
    const dispatch = useDispatch();
    const [isUpdateForm, setIsUpdateForm] = useState(false);
    const [updateDataBook, setUpdateDataBook] = useState(null);

    const handleEdit = (book) => {
        setUpdateDataBook(book);
        setIsUpdateForm(true);
    }

    const handleDelete = (id) => {
        dispatch(deleteBooks(id));
    };

    console.log(books)
    return (
        <main class="py-12 2xl:px-6">
            <div class="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
                <div class="order-2 xl:-order-1">
                    <div class="flex items-center justify-between mb-12">
                        <h4 class="mt-2 text-xl font-bold">Book List</h4>
                        <FilterButtons></FilterButtons>
                    </div>
                    <div class="lws-bookContainer">
                        {books ?

                            books?.filter(book => book.name.toLowerCase().includes(filters.searchText.toLowerCase()))
                                .filter(book => (filters.status === "All" && book) || (filters.status === 'featured' && book.featured))
                                .map((book) =>
                                    <Card
                                        book={book}
                                        key={book.id}
                                        handleDelete={handleDelete}
                                        handleEdit={handleEdit}
                                    ></Card>)
                            :
                            "No Products Found"}
                    </div>
                </div>
                <div>
                    <Form
                        isUpdateForm={isUpdateForm}
                        updateDataBook={updateDataBook}
                    ></Form>
                </div>
            </div>
        </main>
    );
};

export default MainSect;