import React from 'react';
import AuthorForm from '../../components/AuthorForm/AuthorForm';
import { addAuthor } from '../../APIServices/authors';

const AddAuthor = () => {



    const handleSubmit = async (formValues, { setSubmitting }) => {


        try {
            setSubmitting(true);
            await addAuthor(formValues);
            alert('Author added successfully!');

            setSubmitting(false);
        } catch (error) {
            console.error('Error adding book:', error);
            alert('Failed to add book');
            setSubmitting(false);
        }
    };

    return (
        <div>
            <h2>Add Author</h2>
            <AuthorForm onSubmit={handleSubmit} initialValues={{}} />
        </div>
    );
};

export default AddAuthor



