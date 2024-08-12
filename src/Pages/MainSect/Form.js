import React from 'react';
import '../../CSS/MainStyle.css';
const Form = () => {

    const handleSubmit = () => {
        
    }

    return (
            <div class="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
                <h4 class="mb-8 text-xl font-bold text-center">Add New Book</h4>
                <form class="book-form">
                    <div class="space-y-2">
                        <label for="name">Book Name</label>
                        <input required class="text-input" type="text" id="input-Bookname" name="name" />
                    </div>

                    <div class="space-y-2">
                        <label for="category">Author</label>
                        <input required class="text-input" type="text" id="input-Bookauthor" name="author" />
                    </div>

                    <div class="space-y-2">
                        <label for="image">Image Url</label>
                        <input required class="text-input" type="text" id="input-Bookthumbnail" name="thumbnail" />
                    </div>

                    <div class="grid grid-cols-2 gap-8 pb-4">
                        <div class="space-y-2">
                            <label for="price">Price</label>
                            <input required class="text-input" type="number" id="input-Bookprice" name="price" />
                        </div>

                        <div class="space-y-2">
                            <label for="quantity">Rating</label>
                            <input required class="text-input" type="number" id="input-Bookrating" name="rating" min="1" max="5" />
                        </div>
                    </div>

                    <div class="flex items-center">
                        <input id="input-Bookfeatured" type="checkbox" name="featured" class="w-4 h-4" />
                        <label for="featured" class="ml-2 text-sm"> This is a featured book </label>
                    </div>

                    <button type="submit" class="submit" id="submit">Add Book</button>
                </form>
            </div>
    );
};

export default Form;