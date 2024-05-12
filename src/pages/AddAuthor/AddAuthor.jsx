import React from 'react';
import AuthorForm from '../../components/AuthorForm/AuthorForm';

const AddAuthor = ({ onSubmit }) => {
    return (
        <div>
            <h2>Add Author</h2>
            <AuthorForm onSubmit={onSubmit} initialValues={{}} />
        </div>
    );
};

export default AddAuthor;
