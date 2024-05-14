import React from 'react';
import '../BookCard/style.css';
import { deleteBook, updateBook } from '../../APIServices/books';




const BookCard = ({ book, onEdit, onDelete }) => {
    const { title, author, ISBN, publicationDate } = book;

    const handleEditClick = () => {
        updateBook();
        onEdit(book); // Call the onEdit function and pass the book data
    };

    // const handleDeleteClick = () => {
    //     deleteBook();
    //     onDelete(book); // Call the onDelete function and pass the book data
    // };

    return (
        <div className="book-card">
            <h3>{title}</h3>
            <p>Author: {author}</p>
            <p>ISBN: {ISBN}</p>
            <p>Publication Date: {publicationDate}</p>
            <div className="button-container">
                <button onClick={handleEditClick}>Edit</button>
                <button onClick={deleteBook}>Delete</button>
            </div>
        </div>
    );
};

export default BookCard;

