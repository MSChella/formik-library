import * as Yup from 'yup';

export const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};

export const formatAuthor = (author) => {
    return `${author.firstName} ${author.lastName}`;
};

export const formatBook = (book) => {
    return `${book.title} by ${formatAuthor(book.author)}`;
};
