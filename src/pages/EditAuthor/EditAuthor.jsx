import React from 'react';
import AuthorForm from '../../components/AuthorForm/AuthorForm';

const EditAuthor = ({ onSubmit, initialValues }) => {
    return (
        <div>
            <h2>Edit Author</h2>
            <AuthorForm onSubmit={onSubmit} initialValues={initialValues} />
        </div>
    );
};

export default EditAuthor;
