// EditBook.jsx
import React, { useEffect, useState } from 'react';
import BookForm from '../../components/BookForm/BookForm';
import { getBookById, updateBook } from '../../APIServices/books';

const EditBook = ({ match }) => {
    const [book, setBook] = useState(null);

    useEffect(() => {
        const fetchBook = async () => {
            const bookId = match.params.id;
            const fetchedBook = await getBookById(bookId);
            setBook(fetchedBook);
        };
        fetchBook();
    }, [match.params.id]);

    const handleSubmit = async (formData) => {
        try {
            await updateBook(book._id, formData);
            alert('Book updated successfully!');
        } catch (error) {
            console.error('Error updating book:', error);
            alert('Failed to update book');
        }
    };

    return (
        <div>
            <h2>Edit Book</h2>
            {book && <BookForm onSubmit={handleSubmit} initialValues={book} />}
        </div>
    );
};

export default EditBook;
