import React from 'react';
import Form from './Form';
import '../../CSS/MainStyle.css';
import Card from '../../Components/Card';
import { useSelector } from 'react-redux';

const MainSect = () => {
    const books = useSelector(state => state.books);

    return (
        <main class="py-12 2xl:px-6">
            <div class="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
                <div class="order-2 xl:-order-1">
                    <div class="flex items-center justify-between mb-12">
                        <h4 class="mt-2 text-xl font-bold">Book List</h4>

                        <div class="flex items-center space-x-4">
                            <button class="filter-btn active-filter" id="lws-filterAll">All</button>
                            <button class="filter-btn" id="lws-filterFeatured">Featured</button>
                        </div>
                    </div>
                    <div class="lws-bookContainer">
                        {books.map((book) => <Card book={book} key={book.id}></Card>)}
                    </div>
                </div>
                <div>
                    <Form></Form>
                </div>
            </div>
        </main>
    );
};

export default MainSect;