import * as Yup from 'yup';

export const authorValidationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    birthDate: Yup.date().required('Birth date is required').nullable(),
    biography: Yup.string().required('Biography is required'),
});

export const bookValidationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    isbn: Yup.string().required('ISBN is required'),
    publicationDate: Yup.date().required('Publication date is required').nullable(),
});
