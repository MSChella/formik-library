import React, { useEffect, useState } from 'react';
import { addBook, deleteBook, getAllBooks, updateBook } from '../../APIServices/books';
import BookCard from '../../components/BookCard/BookCard';
import '../DashBoard/style.css';
import BookForm from '../../components/BookForm/BookForm';


const BooksPage = () => {
    const [books, setBooks] = useState([]);
    const [editBook, setEditBook] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            const allBooks = await getAllBooks();
            setBooks(allBooks);
        };

        fetchBooks();
    }, []);


    const handleEdit = (book) => {
        setEditBook(book); // Set the book to be edited in the state
    };


    const handleDelete = async (book) => {
        try {
            // Perform delete operation
            await deleteBook(book._id);
            // Remove the deleted book from the state
            setBooks(books.filter((b) => b._id !== book._id));
            alert('Book deleted successfully!');
        } catch (error) {
            console.error('Error deleting book:', error);
            alert('Failed to delete book');
        }
    };



    const handleSubmit = async (formData) => {
        try {
            if (editBook) {
                // If editBook is not null, update the existing book
                await updateBook(editBook._id, formData);
                // Update the book in the state
                setBooks(books.map((book) => (book._id === editBook._id ? formData : book)));
                alert('Book updated successfully!');
                setEditBook(null); // Reset editBook after updating
            } else {
                // If editBook is null, add a new book
                const newBook = await addBook(formData);
                // Add the new book to the state
                setBooks([...books, newBook]);
                alert('Book added successfully!');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to perform operation');
        }
    };

    return (
        <div>
            <h2>Books</h2>
            {editBook ? (
                <BookForm
                    initialValues={editBook}
                    onSubmit={handleSubmit}
                />
            ) : (
                <div className="book-card-container">
                    {books.map((book) => (
                        <BookCard key={book._id} book={book} onEdit={handleEdit} onDelete={handleDelete} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default BooksPage;
