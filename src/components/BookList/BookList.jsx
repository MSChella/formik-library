import React from 'react';

const BookList = ({ books }) => {
    return (
        <div>
            <h2>Books</h2>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>{book.title}</li>
                    // Display other book details here
                ))}
            </ul>
        </div>
    );
};

export default BookList;
