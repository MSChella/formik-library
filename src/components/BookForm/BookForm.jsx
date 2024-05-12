import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const BookForm = ({ initialValues, onSubmit }) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validate={(values) => {
                const errors = {};
                // Add validation logic here
                return errors;
            }}
        >
            <Form>
                <div>
                    <label htmlFor="title">Title</label>
                    <Field type="text" id="title" name="title" />
                    <ErrorMessage name="title" component="div" />
                </div>
                <div>
                    <label htmlFor="author">Author</label>
                    <Field type="text" id="author" name="author" />
                    <ErrorMessage name="author" component="div" />
                </div>
                <div>
                    <label htmlFor="ISBN">ISBN</label>
                    <Field type="text" id="ISBN" name="ISBN" />
                    <ErrorMessage name="ISBN" component="div" />
                </div>
                <div>
                    <label htmlFor="publicationDate">Publication Date</label>
                    <Field type="date" id="publicationDate" name="publicationDate" />
                    <ErrorMessage name="publicationDate" component="div" />
                </div>

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default BookForm;
