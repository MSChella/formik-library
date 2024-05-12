// pages/AddBook/AddBook.jsx

import React from 'react';
import BookForm from '../../components/BookForm/BookForm';
import { addBook } from '../../APIServices/books';

const AddBook = () => {
    const handleSubmit = async (formValues, { setSubmitting }) => {
        try {
            setSubmitting(true);
            await addBook(formValues);
            alert('Book added successfully!');
            setSubmitting(false);
        } catch (error) {
            console.error('Error adding book:', error);
            alert('Failed to add book');
            setSubmitting(false);
        }
    };

    return (
        <div>
            <h2>Add Book</h2>
            <BookForm onSubmit={handleSubmit} initialValues={{}} />
        </div>
    );
};

export default AddBook;
