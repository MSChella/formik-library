import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const AuthorForm = ({ initialValues, onSubmit }) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validate={(values) => {
                const errors = {};
                if (!values.name) {
                    errors.name = 'Name is required';
                }


                return errors;
            }}
        >
            <Form>
                <div>
                    <label htmlFor="name">Name</label>
                    <Field type="text" id="name" name="name" />
                    <ErrorMessage name="name" component="div" />
                </div><div>
                    <label htmlFor="birthDate">DOB</label>
                    <Field type="date" id="birthDate" name="birthDate" />
                    <ErrorMessage name="birthDate" component="div" />
                </div><div>
                    <label htmlFor="biography">Biography</label>
                    <Field type="text" id="biography" name="biography" />
                    <ErrorMessage name="biography" component="div" />
                </div>

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default AuthorForm;
