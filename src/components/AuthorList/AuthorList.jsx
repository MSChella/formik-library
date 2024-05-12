import React from 'react';

const AuthorList = ({ authors }) => {
    return (
        <div>
            <h2>Authors</h2>
            <ul>
                {authors.map((author) => (
                    <li key={author.id}>{author.name}</li>
                    // Display other author details here
                ))}
            </ul>
        </div>
    );
};

export default AuthorList;
