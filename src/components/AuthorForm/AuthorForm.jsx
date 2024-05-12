import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const AuthorForm = ({ initialValues, onSubmit }) => {
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
                    <label htmlFor="name">Name</label>
                    <Field type="text" id="name" name="name" />
                    <ErrorMessage name="name" component="div" />
                </div>
                {/* Add fields for other author details here */}
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default AuthorForm;
